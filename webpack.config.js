const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~/src': path.resolve(__dirname, 'src/')
    }
  },
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    inline: true,
    open: true,
    openPage: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: path.resolve(__dirname, 'public/404.html')
    })
  ]
}
