'use strict';
const { LOADERS } = require('./webpack.constants');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/app-about-me/',
    filename: './public/bundle.js'
  },
  context: __dirname,
  module: {
    loaders: LOADERS
  },
  resolve: {
    alias: {
      modernizr$: './.modernizrrc.json'
    }
  }
};
