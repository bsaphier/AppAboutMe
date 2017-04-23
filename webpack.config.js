'use strict';
// const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
       test: /\.modernizrrc.js$/,
       loader: 'modernizr-loader'
     }, {
       test: /\.modernizrrc(\.json)?$/,
       loader: 'modernizr-loader!json-loader'
     }, {
       test: /\.(jpe?g|png|gif|svg)$/i,
       loader: 'file-loader'
     }
    ]
  },
  resolve: {
    alias: {
      modernizr$: './.modernizrrc.json'
    }
  }
};
