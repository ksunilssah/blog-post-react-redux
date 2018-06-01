const path = require('path');
const HWP = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index_bundle.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.scss$/,
            use: [
                //process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'

            ]
        }]
    },
    plugins: [
        new HWP({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            //filename: "./css/main.css",
        })
    ]
}