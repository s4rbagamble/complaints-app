var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: [
        './public/app.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    watch: true,
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.html$/,
            loader: 'raw'
        },
        {
            test: /\.scss$/,
            loaders: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
        ]
    }
};
