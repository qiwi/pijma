const path = require('path')
const fs = require('fs')
const docgen = require('react-docgen-typescript')

const styleguide = path.resolve(__dirname, 'styleguide')

const tsConfig = require(path.resolve(__dirname, '..', '..', 'tsconfig.json'))

const alias = Object.keys(tsConfig.compilerOptions.paths).reduce((p, c) => Object.assign(p, {
  [c.replace(/\/\*$/, '')]: path.resolve(__dirname, '..', '..', tsConfig.compilerOptions.baseUrl, tsConfig.compilerOptions.paths[c][0].replace(/\/\*$/, '')),
}), {})

const readFiles = (dir) => fs
  .readdirSync(dir)
  .filter((file) => file !== '.' && file !== '..')
  .map((file) => path.resolve(dir, file))
  .reduce((files, file) => files.concat(fs.statSync(file).isDirectory() ? readFiles(file) : file), [])

module.exports = {
  propsParser: docgen.parse,
  serverPort: 6060,
  styleguideDir: path.resolve(styleguide, 'lib'),
  styleguideComponents: readFiles(path.resolve(styleguide, 'components'))
    .reduce((components, file) => Object.assign(components, {
      [path.relative(path.resolve(styleguide, 'components'), file).slice(0, -1 * path.extname(file).length)]: file,
    }), {}),
  styles: {
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
  theme: {
    borderRadius: '10px',
    fontFamily: {
      base: '\'Museo Sans\', \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',
      monospace: 'monospace',
    },
    mq: {
      small: '@media (max-width: 0px)',
    },
    color: {
      codeBackground: '#fff',
    },
  },
  require: [
    path.resolve(styleguide, 'require.js'),
  ],
  ignore: [
    '**/*/index.{js,jsx,ts,tsx}',
  ],
  skipComponentsWithoutExample: true,
  getComponentPathLine(file) {
    return `import {${path.basename(file, path.extname(file))}} from '${Object.keys(alias).find(key => path.resolve(file).startsWith(alias[key]))}'`
  },
  getExampleFilename(componentPath) {
    return path.resolve(path.dirname(componentPath), `${path.basename(componentPath, path.extname(componentPath))}.md`)
  },
  getExampleFilename(componentPath) {
    return path.resolve(path.dirname(componentPath), `${path.basename(componentPath, path.extname(componentPath))}.md`)
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Главная',
      content: path.resolve(styleguide, 'Index.md'),
      sectionDepth: Number.MAX_VALUE,
    },
    {
      name: 'Компоненты',
      components: [
        `${alias['@qiwi/pijma-core']}/**/*.{js,jsx,ts,tsx}`,
        `${alias['@qiwi/pijma-desktop']}/**/*.{js,jsx,ts,tsx}`,
      ],
      sectionDepth: Number.MAX_VALUE,
    },
  ],
  logger: {
    info: () => null,
    warn: () => null,
  },
  webpackConfig: {
    devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            configFile: path.resolve(__dirname, 'tslint.json'),
            tsConfigFile: path.resolve(__dirname, 'tsconfig.json'),
          },
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, 'tsconfig.json'),
              },
            },
          ],
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
      extensions: ['.tsx', '.ts', '.js'],
    },
  },
}
