const esbuild = require('esbuild')
const {nodeExternalsPlugin} = require('esbuild-node-externals')
const glob = require('fast-glob')
const fs = require('fs');

const entryPoints = glob.sync('./src/**/*.ts(x)?')

const reactDisplayNamePlugin = (options) => {
  const displayName = (content, regexp, filter) => {
    return Array
      .from(content.matchAll(regexp))
      .filter((match) => filter.includes(match[2]))
      .map((match) => `${match[1]}.displayName = '${match[1]}'`)
  }
  return {
    name: 'react-display-name',
    setup: (build) => {
      build.onLoad({filter: /\.tsx?$/}, async (args) => {
        let contents = (await fs.promises.readFile(args.path)).toString()
        return {
          contents: [
            contents,
            displayName(contents, /const\s+(\w+)\s*=\s*([\.\w]+)/g, options.factoryFuncs),
            displayName(contents, /const\s+(\w+)\s*:\s*([\.\w]+)/g, options.funcTypes),
            displayName(contents, /class\s+(\w+)\s+extends\s+([\.\w]+)/g, options.classTypes),
          ].join('\n'),
          loader: 'tsx',
        }
      })
    }
  }
}

esbuild.build({
  entryPoints,
  outdir: './lib/es6/',
  bundle: false,
  minify: false,
  platform: 'node',
  sourcemap: false,
  target: 'es6',
  plugins: [
    nodeExternalsPlugin(),
    reactDisplayNamePlugin({
      classTypes: [
        'React.Component',
        'React.PureComponent',
        'Component',
        'PureComponent'
      ],
      funcTypes: [
        'React.FunctionComponent',
        'React.FC',
        'FC',
        'FunctionComponent'
      ],
      factoryFuncs: [
        'React.forwardRef',
        'React.memo',
        'forwardRef',
        'memo',
        'styled'
      ],
    })
  ],
  tsconfig: './tsconfig.build.json'
})
  .catch(() => process.exit(1))
