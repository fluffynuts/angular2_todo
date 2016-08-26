var
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  helpers = require('./helpers');

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    app: './src/main.ts',
    vendor: './src/vendor.ts'
  },
  output: {
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.ts' ]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [ 'ts', 'angular2-template-loader' ]
      },
      {
        test: /\.html$/,
        loader: 'html?caseSensitive'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ],
  },
  htmlLoader: {
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: [ 'app', 'vendor', 'polyfills' ]
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
