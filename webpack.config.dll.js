const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['lodash', 'moment']
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'dll'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]_library',
      path: path.resolve(__dirname, 'dist', 'dll', '[name]-manifest.json')
    })
  ]
};
