const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    commons: './src/js/commons/commons.bundle.js',
    index: './src/js/index/index.bundle.js',
    contact: './src/js/contact/contact.bundle.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/',
  },
  devServer: {
    static: 'dist',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
          name: 'vendors',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      chunksSortMode: 'manual',
      template: './src/html/index/index.html',
      chunks: ['commons', 'vendors', 'index'],
    }),
  ],
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'contact',
  //     filename: 'contact.html',
  //     chunksSortMode: 'manual',
  //     template: './src/html/contact/contact.html',
  //     chunks: ['commons', 'vendors', 'contact'],
  //   }),
  // ],
}
