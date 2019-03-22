const path = require('path')
const fs = require('fs')
const docgen = require('react-docgen-typescript')

const styleguide = path.resolve(__dirname, 'styleguide')

const tsConfig = require(path.resolve(__dirname, '..', '..', 'tsconfig.json'))

const alias = Object.keys(tsConfig.compilerOptions.paths).reduce((p, c) => Object.assign(p, {
  [c.replace(/\/\*$/, '')]: path.resolve(__dirname, '..', '..', tsConfig.compilerOptions.baseUrl, tsConfig.compilerOptions.paths[c][0].replace(/\/\*$/, '')),
}), {})

const readFiles = (dir) => {
  return fs
    .readdirSync(dir)
    .filter((file) => file !== '.' && file !== '..')
    .map((file) => path.resolve(dir, file))
    .reduce((files, file) => files.concat(fs.statSync(file).isDirectory() ? readFiles(file) : file), [])
}

module.exports = {
  resolver: docgen.resolver,
  propsParser: docgen.parse,
  serverPort: 6060,
  styleguideDir: path.resolve(styleguide, 'lib'),
  styleguideComponents: readFiles(path.resolve(styleguide, 'components'))
    .reduce((components, file) => Object.assign(components, {
      [path.relative(path.resolve(styleguide, 'components'), file).slice(0, -1 * path.extname(file).length)]: file,
    }), {}),
  theme: {
    borderRadius: '10px',
    fontFamily: {
      base: '\'Museo Sans\', \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',
    },
    mq: {
      small: '@media (max-width: 0px)',
    },
  },
  require: [
    path.resolve(styleguide, 'require.js'),
  ],
  ignore: [
    '**/*/index.{js,jsx,ts,tsx}',
  ],
  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    return `import {${path.basename(componentPath, path.extname(componentPath))}} from '${Object.keys(alias).find(key => path.resolve(componentPath).startsWith(alias[key]))}'`
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
        `${alias['@qiwi/pijma-media']}/**/*.{js,jsx,ts,tsx}`,
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
      ],
    },
    resolve: {
      alias,
      extensions: ['.tsx', '.ts', '.js'],
    },
  },
}
