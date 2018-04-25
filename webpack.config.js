const path = require('path');
const webpack = require('webpack');
module.exports = {
    devtool: 'source-map',
  entry: ['./ts-src/app.ts'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, "ts-src"),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true
};