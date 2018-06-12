const path = require('path');
const webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  entry: ['./app1.js'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts' ]
  },
  externals: {'angular': 'angular'},
  output: {
    filename: 'app1.js',
    path: path.resolve(__dirname, "dist")
  },
  watch: true
};