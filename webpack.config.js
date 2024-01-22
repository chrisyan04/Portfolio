const webpack = require('webpack');

module.exports = {
  output: {
    library: 'myLib',
    libraryTarget: 'umd',
    filename: 'myLib.js',
    globalObject: 'this'
  },
  plugins: [
    new webpack.DefinePlugin({
      self: 'typeof self !== "undefined" ? self : this',
    }),
  ],
};