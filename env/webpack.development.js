const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

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
        },
        proxy: {
            '/api': {
                'target': 'http://netflixroulette.net/api/api.php',
                'pathRewrite': { '^/api': '' },
                'changeOrigin': true,
                'secure': false,
                'logLevel': 'debug'
            }
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
});
