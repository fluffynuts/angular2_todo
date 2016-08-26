var
  webpackMerge = require('webpack-merge'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  commonConfig = require('./webpack.common'),
  helpers = require('./helpers');

console.log(helpers.root('dist'));

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
})