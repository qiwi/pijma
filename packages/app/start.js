const path = require('path')
const express = require('express')
const compression = require('compression')
const device = require('express-device')

const pkg = require(path.resolve(__dirname, 'package.json'))

const config = require(path.resolve(__dirname, 'webpack.config.js'))

const publicPath = config[0].output.publicPath

const app = express()

app.use(device.capture())

app.use(compression())

app.use('/health', (req, res) => {
  res.json({
    version: pkg.version,
    env: process.env.NODE_ENV,
    device: req.device.type
  })
})

app.use(publicPath, express.static(path.resolve(__dirname, 'lib', 'client')))

const server = require(path.resolve(__dirname, 'lib', 'server')).default

const desktopClientStats = require(path.resolve(__dirname, 'lib', 'stats.desktop.json'))
const mobileClientStats = require(path.resolve(__dirname, 'lib', 'stats.mobile.json'))

app.use(server({clientStats: [desktopClientStats, mobileClientStats]}))

app.listen(8080, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }
})
