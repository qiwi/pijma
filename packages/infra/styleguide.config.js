const path = require('path')
const docgen = require('react-docgen-typescript')
const glob = require('fast-glob')

module.exports = ({cwd, extra = {}, components = []}) => {
  const styleguideRoot = path.resolve(cwd, 'styleguide')
  const styleguideComponentsRoot = path.resolve(styleguideRoot, 'components')
  const tsConfig = require(path.resolve(cwd, '..', '..', 'tsconfig.json'))

  const alias = Object.keys(tsConfig.compilerOptions.paths).reduce((p, c) => Object.assign(p, {
    [c.replace(/\/\*$/, '')]: path.resolve(cwd, '..', '..', tsConfig.compilerOptions.baseUrl, tsConfig.compilerOptions.paths[c][0].replace(/\/\*$/, '')),
  }), {})

  const readFiles = (dir) => glob.sync(['**/*'], {
    cwd: dir,
    onlyFiles: true,
    absolute: true,
  })

  const componentsPaths = components.map(c => `${alias[c]}/**/*.{js,jsx,ts,tsx}`)

  return Object.assign({
    propsParser: docgen.parse,
    serverPort: 8080,
    styleguideDir: path.resolve(styleguideRoot, 'lib'),
    styleguideComponents: readFiles(styleguideComponentsRoot)
      .reduce((components, file) => Object.assign(components, {
        [path.relative(styleguideComponentsRoot, file).slice(0, -1 * path.extname(file).length)]: file,
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
    theme: {},
    require: [
      path.resolve(styleguideRoot, 'require.js'),
    ],
    ignore: [
      '**/*/index.{js,jsx,ts,tsx}',
    ],
    skipComponentsWithoutExample: true,
    getComponentPathLine(componentPath) {
      return `import {${path.basename(componentPath, path.extname(componentPath))}} from '${Object.keys(alias).find(key => path.resolve(componentPath).startsWith(alias[key]))}'`
    },
    getExampleFilename(componentPath) {
      return path.resolve(path.dirname(componentPath), `${path.basename(componentPath, path.extname(componentPath))}.md`)
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
      devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
      target: 'web',
      optimization: {
        moduleIds: false,
        chunkIds: false,
        concatenateModules: false,
        flagIncludedChunks: false,
        mergeDuplicateChunks: false,
        minimize: false,
        portableRecords: false,
        providedExports: false,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        usedExports: false,
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            options: {
              configFile: path.resolve(cwd, 'tslint.json'),
              tsConfigFile: path.resolve(cwd, 'tsconfig.json'),
            },
            exclude: /node_modules/,
          },
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'esbuild-loader',
                options: {
                  loader: 'tsx',
                  tsconfigRaw: tsConfig,
                  target: 'es2015',
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
  }, extra)
}
