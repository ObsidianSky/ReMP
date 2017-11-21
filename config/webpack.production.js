const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
    module: {
        rules: [
            {
                test: /\.(c|sc)ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            minChunks: 2
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new HtmlPlugin({
            dev: false,
            inject: 'body',
            filename: 'template.html',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
});

