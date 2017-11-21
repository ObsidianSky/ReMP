const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

process.traceDeprecation = true;

const port = 8084;
const host = '127.0.0.1';

module.exports = webpackMerge(commonConfig, {
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://${host}:${port}`,
        'webpack/hot/only-dev-server',
        './index.jsx'
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        host: host,
        port: port,
        historyApiFallback: true,
        noInfo: true,
        hot: true,
        inline: true,
        stats: {
            colors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(c|sc)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'DEV': JSON.stringify(true)
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlPlugin({
            dev: true,
            inject: 'body',
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ],
});
