/* eslint-disable */

const esbuild = require('esbuild')
const {nodeExternalsPlugin} = require('esbuild-node-externals')
const glob = require('fast-glob')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))

const _entries = argv.entryPoints || './src/**/*.ts(x)?'
const entryPoints = glob.sync(_entries)
const target = argv.target || 'es6'
const outdir = argv.outdir || './lib/es6/'

const displayName = (content, regexp, filter) => (
  Array
    .from(content.matchAll(regexp))
    .filter((match) => filter.includes(match[match.length - 1]))
    .map((match) => `${match[1]}.displayName = '${match[1]}'`)
)

const reactDisplayNamePlugin = (options) => ({
  name: 'react-display-name',
  setup: (build) => {
    build.onLoad({filter: /\.tsx?$/}, async (args) => {
      const contents = (await fs.promises.readFile(args.path)).toString()
      return {
        contents: [
          contents,
          displayName(contents, /const\s+(\w+)\s*=\s*([\.\w]+)/g, options.factoryFuncs),
          displayName(contents, /const\s+(\w+)\s*:\s*([\.\w]+)/g, options.funcTypes),
          displayName(contents, /class\s+(\w+)(<\w>)?\s+extends\s+([\.\w]+)/g, options.classTypes),
        ].join('\n'),
        loader: 'tsx',
      }
    })
  },
})

esbuild.build({
  entryPoints,
  outdir,
  bundle: false,
  minify: false,
  platform: 'node',
  sourcemap: false,
  target,
  plugins: [
    nodeExternalsPlugin(),
    reactDisplayNamePlugin({
      classTypes: [
        'React.Component',
        'React.PureComponent',
        'Component',
        'PureComponent',
      ],
      funcTypes: [
        'React.FunctionComponent',
        'React.FC',
        'FC',
        'FunctionComponent',
      ],
      factoryFuncs: [
        'React.forwardRef',
        'React.memo',
        'forwardRef',
        'memo',
        'styled',
      ],
    }),
  ],
  tsconfig: './tsconfig.build.json',
})
  .catch(() => process.exit(1))
