// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 可根据需要设置为 'production'
  entry: {
    home: './src/home.js',
    about: './src/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!dll/**'],
    }),
    // 引用 DLL
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/dll/vendor-manifest.json')
    }),
    // 生成 HTML 文件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['vendor', 'home'], // 加载 home 页面时的 chunk
      filename: 'home.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['vendor', 'about'], // 加载 about 页面时的 chunk
      filename: 'about.html'
    })
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    static: [
      // {
      //   directory: path.join(__dirname, 'dist', 'public'),
      // },
      {
        directory: path.join(__dirname, 'dist', 'dll'),
        publicPath: '/dll',
      }
    ],
    port: 9000,
    // open: true
  }
};
