const express = require('express')
const webpackDev = require('../configs/webpack.dev.js')
const app = require('express')()

const isDev = process.env.NODE_ENV === 'production'

if (!isDev) {
  // Development
  console.log('Development')
  const webpack = require('webpack')
  const configDevClient = require('../configs/webpack.dev.js')
  const compiler = webpack(configDevClient)
  const devMiddleware = require('webpack-dev-middleware')(compiler)

  const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    noInfo: true,
    publicPath: configDevClient.output.publicPath
  })

  app.use(devMiddleware)
  app.use(hotMiddleware)

  const port = process.env.PORT || 3000
  console.log('Middleware Enabled...')
  console.log(
    'running express in http://localhost:' +
      port +
      ' in ' +
      (process.env.NODE_ENV || 'development')
  )

  app.use(express.static('dist'))

  app.get('/', function (req, res) {
    res.render('index')
  })

  app.listen(port, () => {
    console.log('Server started ...')
  })
} else {
  // Production
  console.log('Production')
  const port = process.env.PORT || 8080
  app.use(express.static('dist'))

  app.get('/', function (req, res) {
    res.render('index')
  })

  app.listen(port, function () {
    console.log('running express in http://localhost:' + port)
  })
}
