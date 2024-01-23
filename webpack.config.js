const webpack = require('webpack');

module.exports = {
  output: {
    library: 'myLib',
    libraryTarget: 'umd',
    filename: 'myLib.js',
    globalObject: 'globalThis'
  },
};

module.exports.module = {
  rules: [
    {
      test: /\.js$/,
      loader: 'null-loader'
    }
  ]
};