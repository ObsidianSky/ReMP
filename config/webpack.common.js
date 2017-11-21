const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        index: './index.jsx'
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp4|ico)$/i,
                loaders: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'assets/[hash:6].[ext]?[hash]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'BROWSER': JSON.stringify(true)
            }
        })
    ]
};