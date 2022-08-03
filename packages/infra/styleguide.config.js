/* eslint-disable */

const path = require('path')
const docgen = require('react-docgen-typescript')
const glob = require('fast-glob')

module.exports = ({ cwd, extra = {}, components = [] }) => {
  const styleguideRoot = path.resolve(cwd, 'styleguide')
  const styleguideComponentsRoot = path.resolve(styleguideRoot, 'components')
  const tsConfig = require(path.resolve(cwd, '..', '..', 'tsconfig.json'))

  const alias = Object.keys(tsConfig.compilerOptions.paths).reduce(
    (p, c) =>
      Object.assign(p, {
        [c.replace(/\/\*$/, '')]: path.resolve(
          cwd,
          '..',
          '..',
          tsConfig.compilerOptions.baseUrl,
          tsConfig.compilerOptions.paths[c][0].replace(/\/\*$/, ''),
        ),
      }),
    {},
  )

  const readFiles = (dir) =>
    glob.sync(['**/*'], {
      cwd: dir,
      onlyFiles: true,
      absolute: true,
    })

  const componentsPaths = components.map(
    (c) => `${alias[c]}/**/*.{js,jsx,ts,tsx}`,
  )

  return Object.assign(
    {
      propsParser: docgen.parse,
      serverPort: 8080,
      styleguideDir: path.resolve(styleguideRoot, 'lib'),
      styleguideComponents: readFiles(styleguideComponentsRoot).reduce(
        (components, file) =>
          Object.assign(components, {
            [path
              .relative(styleguideComponentsRoot, file)
              .slice(0, -1 * path.extname(file).length)]: file,
          }),
        {},
      ),
      styles: {
        Playground: {
          root: {
            marginTop: 20,
            marginBottom: 48,
          },
          preview: {
            padding: 0,
            border: 0,
            borderRadius: 0,
          },
          controls: {
            marginTop: 16,
            marginBottom: 16,
          },
        },
        Editor: {
          root: {
            '& .cm-s-base16-light.CodeMirror': {
              isolate: false,
              background: 'none',
              border: '1px solid #e6e6e6',
              borderRadius: '10px',
            },
          },
        },
      },
      theme: {},
      template: {
        head: {
          links: [
            {
              rel: 'stylesheet',
              href: 'https://static.qiwi.com/fonts/museo-sans/v2/index.css',
            },
          ],
        },
      },
      require: [path.resolve(styleguideRoot, 'require.js')],
      ignore: ['**/*/index.{js,jsx,ts,tsx}'],
      skipComponentsWithoutExample: true,
      getComponentPathLine(componentPath) {
        return `import {${path.basename(
          componentPath,
          path.extname(componentPath),
        )}} from '${Object.keys(alias).find((key) =>
          path.resolve(componentPath).startsWith(alias[key]),
        )}'`
      },
      getExampleFilename(componentPath) {
        return path.resolve(
          path.dirname(componentPath),
          `${path.basename(componentPath, path.extname(componentPath))}.md`,
        )
      },
      updateExample: (params, example) => {
        const { settings, lang, content } = params
        if (!settings) {
          return params
        }
        const props = {}
        if (settings.actions) {
          props['data-action-states'] = JSON.stringify([
            ...[
              {
                action: 'none',
                ...(settings.wait ? { wait: settings.wait } : {}),
              },
            ],
            ...settings.actions,
          ])
        } else if (settings.wait) {
          props['data-action-states'] = JSON.stringify([
            {
              action: 'none',
              wait: settings.wait,
            },
          ])
        }
        if (settings.id) {
          props['data-description'] = settings.id
        }
        return {
          settings: {
            ...settings,
            props: {
              ...(settings.props || {}),
              ...props,
            },
          },
          lang,
          content,
        }
      },
      mountPointId: 'root',
      pagePerSection: true,
      sections: [
        {
          name: 'Главная',
          content: path.resolve(styleguideRoot, 'Index.md'),
          sectionDepth: Number.MAX_VALUE,
        },
        {
          name: 'Компоненты',
          components: componentsPaths,
          sectionDepth: Number.MAX_VALUE,
        },
      ],
      logger: {
        info: () => null,
        warn: () => null,
      },
      webpackConfig: {
        target: 'web',
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: {
                loader: 'swc-loader',
              },
              exclude: /node_modules/,
            },
            {
              test: /\.(?:png|jpg|gif|ico|eot|woff|woff2|ttf|svg)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[hash].[ext]',
                  },
                },
              ],
            },
            {
              test: /\.(?:css)?$/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                },
              ],
            },
          ],
        },
        resolve: {
          alias,
          extensions: ['.tsx', '.ts', '.jsx', '.js'],
        },
        devServer: {
          historyApiFallback: true,
          disableHostCheck: true,
        },
      },
    },
    extra,
  )
}
