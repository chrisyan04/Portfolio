const webpack = require('webpack');

module.exports = {
  output: {
    library: 'myLib',
    libraryTarget: 'umd',
    filename: 'myLib.js',
    globalObject: 'globalThis'
  },
  plugins: [
    new webpack.DefinePlugin({
      self: 'typeof self !== "undefined" ? self : this',
    }),
  ],
};

module.exports.module = {
  rules: [
    {
      test: /\.js$/,
      loader: 'null-loader'
    }
  ]
};