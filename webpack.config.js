const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~/src': path.resolve(__dirname, 'src/')
    }
  },
  optimization: {
    minimize: PRODUCTION
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja/),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: path.resolve(__dirname, 'public/404.html')
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ]
}
