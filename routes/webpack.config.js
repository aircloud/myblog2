/**
 * Created by Xiaotao.Nie on 23/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'webpack.output.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
};

