const path = require('path')
const express = require('express')
const compression = require('compression')
const device = require('express-device')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

const pkg = require(path.resolve(__dirname, 'package.json'))

const config = require(path.resolve(__dirname, 'webpack.config.js'))

const app = express()

app.use(compression())

app.use(device.capture())

app.use('/health', (req, res) => {
  res.json({
    version: pkg.version,
    env: process.env.NODE_ENV,
    device: req.device.type
  })
})

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true,
  stats: 'errors-only'
}))

app.use(webpackHotMiddleware(compiler, {
  stats: 'errors-only'
}))

app.use(webpackHotServerMiddleware(compiler, {
  chunkName: 'index'
}))

app.listen(8080, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }
})
