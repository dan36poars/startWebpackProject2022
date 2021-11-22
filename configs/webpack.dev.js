const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: {
    commons: [
      'webpack-hot-middleware/client?hot=true&live-reload=true',
      './src/js/commons/commons.bundle',
    ],
    index: [
      'webpack-hot-middleware/client?hot=true&live-reload=true',
      './src/js/index/index.bundle',
    ],
    contact: [
      'webpack-hot-middleware/client?hot=true&live-reload=true',
      './src/js/contact/contact.bundle',
    ],
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/',
  },
  devServer: {
    static: 'dist',
    hot: false,
    client: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 40,
      maxAsyncRequests: 20,
      maxInitialRequests: 20,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      { test: /\.pug$/, use: 'pug-loader' },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      chunksSortMode: 'manual',
      template: './src/pug/index.pug',
      chunks: ['vendors', 'commons', 'index'],
    }),
    new HtmlWebpackPlugin({
      title: 'contact',
      filename: 'contact.html',
      chunksSortMode: 'manual',
      template: './src/pug/contact.pug',
      chunks: ['vendors', 'commons', 'contact'],
    }),
  ],
}
