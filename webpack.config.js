'use strict';
const { LOADERS } = require('./webpack.constants');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        chunkFilename: './public/[name].bundle.js',
        filename: './public/bundle.js'
    },
    context: __dirname,
    devtool: 'source-map',
    /*
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module){
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
    ],
    */
    module: {
        loaders: LOADERS
    },
    resolve: {
        alias: {
            modernizr$: './.modernizrrc.json'
        }
    }
};
