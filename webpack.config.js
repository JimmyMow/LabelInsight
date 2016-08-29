var path = require('path');
var webpack = require('webpack');
var open = require('open');

module.exports = {
  entry: './app/index.js',
  output: { path: __dirname, filename: '/public/bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          compact: true,
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
};
