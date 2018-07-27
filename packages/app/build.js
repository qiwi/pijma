const path = require('path')
const webpack = require('webpack')

const config = require(path.resolve(__dirname, 'webpack.config.js'))

const compiler = webpack(config)

compiler.run()
