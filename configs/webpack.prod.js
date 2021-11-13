const path = require('path');

module.exports = {
  entry: {
    index: ['./src/js/index.bundle.js']
  },
  mode: "production",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../src/html'),
  },
};