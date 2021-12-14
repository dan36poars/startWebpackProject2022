const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      { test: /\.pug$/, use: 'pug-loader' },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.(json|xml)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/data/[name][ext]',
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
    // set true to see the bundle tree packages loaded
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ],
}
