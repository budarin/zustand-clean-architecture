const path = require('path');
const webpack = require('webpack');

const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: './src/index.tsx',
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
            __PROD__: process.env['NODE_ENV'] === 'production',
        }),
        new CopyPlugin({
            patterns: [{ from: './assets/site_icons/' }],
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
            '.ico',
            '.xml',
            '.woff2',
        ],
    },
    module: {
        rules: [
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
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // browsers: 'last 2 versions',
                                        },
                                    ],
                                    [
                                        'postcss-pixels-to-rem',
                                        {
                                            base: 16,
                                            unit: 'rem',
                                            exclude: [],
                                            mediaQueries: true,
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
};
