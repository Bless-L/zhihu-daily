const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

const entryPath = path.resolve(__dirname, '../src/index')
const outputPath = path.resolve(__dirname, '../dist')

module.exports = merge(base, {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:9090',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './index.js'
    // the entry point of our app
  ],
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    contentBase: outputPath,
    publicPath: '/',
    inline: true,
    port: 9090
  },
  plugins: [
    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ]
})