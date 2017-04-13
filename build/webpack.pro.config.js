const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const entryPath = path.resolve(__dirname, '../src/index')

module.exports = merge(base, {
  entry: {
    main: entryPath,
    vendor: [
        'react',
        'react-dom',
        'react-router-dom',
        'whatwg-fetch'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    })
  ]
})