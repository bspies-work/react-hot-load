const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        hotOnly: true,
        inline: true,
        port: port
    },
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://0.0.0.0:${port}/`,
        // 'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./index.tpl.html`,
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.ProgressPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            'env',
                            {
                                'targets': {
                                    'browsers': [
                                        'last 1 Chrome version',
                                        'last 1 ChromeAndroid version',
                                        'last 1 iOS version',
                                        'last 1 Edge version',
                                        'last 1 Firefox version'
                                    ]
                                },
                                'modules': false
                            }
                        ],
                        'stage-2',
                        'react'
                    ],
                    compact: false,
                    plugins: [
                        'react-hot-loader/babel'
                    ]
                }
            }
        ]
    }
}