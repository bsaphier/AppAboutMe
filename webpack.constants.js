'use strict';

const LOADERS = [{
  test: /\.scss$/,
  exclude: /(node_modules)/,
  loaders: ['style-loader', 'css-loader', 'sass-loader']
}, {
  test: /jsx?$/,
  exclude: /(node_modules)/,
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
  loader: 'file-loader?name=public/bin/images/[name].[ext]',
  // query: {
  //   useRelativePath: process.env.NODE_ENV === 'production'
  // }
}];


module.exports = { LOADERS };
