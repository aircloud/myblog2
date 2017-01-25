/**
 * Created by Xiaotao.Nie on 24/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/article.client.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build2.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
        ]
    },
};



