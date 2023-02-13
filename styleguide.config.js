/* eslint-disable */

const path = require('path')
const fs = require('fs')
const docgen = require('react-docgen-typescript')
const glob = require('fast-glob')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

const readFiles = (dir) =>
  glob.sync(['**/*'], {
    cwd: dir,
    onlyFiles: true,
    absolute: true,
  })

module.exports = ({ cwd, dirs = [], ...extra }) => {
  const styleguideRoot = path.resolve(cwd, 'src', 'main', 'webapp')
  const styleguideComponentsRoot = path.resolve(styleguideRoot, 'components')

  const packages = Object.fromEntries(
    dirs
      .map((dir) => path.resolve(cwd, dir))
      .map((dir) => [
        JSON.parse(fs.readFileSync(path.resolve(dir, 'package.json'), 'utf8'))
          .name,
        dir,
      ]),
  )

  const components = Object.values(packages).map(
    (dir) => `${dir}/src/main/ts/**/*.{js,jsx,ts,tsx}`,
  )

  return {
    propsParser: docgen.parse,
    serverPort: 8080,
    styleguideDir: path.resolve(cwd, 'target', 'webapp'),
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
    require: [path.resolve(styleguideRoot, 'require.ts')],
    ignore: ['**/*/index.{js,jsx,ts,tsx}'],
    skipComponentsWithoutExample: true,
    getComponentPathLine(componentPath) {
      return `import { ${path.basename(
        componentPath,
        path.extname(componentPath),
      )} } from '${Object.keys(packages).find((key) =>
        path.resolve(componentPath).startsWith(packages[key]),
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
        components,
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
            test: /\.[cm]?[jt]sx?$/,
            use: {
              loader: 'swc-loader',
              options: {
                jsc: {
                  transform: {
                    react: {
                      runtime: 'automatic',
                    },
                  },
                },
              },
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
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        plugins: [new TsconfigPathsPlugin()],
      },
      devServer: {
        historyApiFallback: true,
        allowedHosts: 'all',
      },
    },
    ...extra,
  }
}
