const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: './src/client/index.tsx',
    cache: {
        type: 'filesystem',
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[contenthash].js',
        compareBeforeEmit: true,
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        concatenateModules: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './assets/index.html',
            inject: 'body',
        }),
        new webpack.DefinePlugin({
            __DEV__: process.env['NODE_ENV'] !== 'production',
        }),
    ],
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.jsm',
            '.json',
            '.css',
            '.mp3',
            '.svg',
            '.png',
            '.gif',
            'ico',
            'xml',
            'webmanifest',
        ],
    },
    module: {
        rules: [
            {
                test: /\.(ico|xml|webmanifest)$/,
                include: [path.resolve('./assets/site_icons/')],
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                },
            },
            {
                test: /\.(gif|svg|png)$/,
                include: [path.resolve('./assets/site_icons/')],
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                },
            },

            {
                test: /\.(mp3|aac|ogg)$/,
                exclude: [path.resolve('./assets/site_icons/')],
                type: 'asset/resource',
            },
            {
                test: /\.(gif|svg|png)$/,
                exclude: [path.resolve('./assets/site_icons/')],
                type: 'asset/resource',
            },
            {
                test: /\.(ts|tsx|js|jsx|json)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: path.resolve('node_modules/.cache/client'),
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
