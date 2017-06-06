const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
  entry: {
    'js': './js/script.js',
    'style': './css/style.css',
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].bundle.js',
    publicPath: '/js/'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextWebpackPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          publicPath: '/css/',
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('../css/[name].css'),
  ]
};

module.exports = webpackConfig;
