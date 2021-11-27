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
    filename: 'assets/js/[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/',
    assetModuleFilename: 'images/[name][ext]',
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
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
    }),
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
