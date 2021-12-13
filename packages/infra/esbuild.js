const esbuild = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')
const glob = require('fast-glob')

const entryPoints = glob.sync('./src/**/*.ts(x)?')

esbuild.build({
  entryPoints,
  outdir: './lib/es5/',
  bundle: false,
  minify: false,
  platform: 'node',
  sourcemap: false,
  target: 'es6',
  plugins: [nodeExternalsPlugin()],
  tsconfig: './tsconfig.build.json'
})
  .catch(() => process.exit(1))
