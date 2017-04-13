const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, '../dist')
const contextPath = path.resolve(__dirname, '../src')

module.exports = {
  context: contextPath,
  output: {
    path: outputPath,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','autoprefixer-loader', 'sass-loader']
        })
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules', 'postcss-loader']
      },{
        test: /(\.js$)/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },{
        test: /(\.jsx$)/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },{
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] 
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      inject: 'body'
    }),
  ]
}