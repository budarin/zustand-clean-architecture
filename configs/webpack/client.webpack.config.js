const path = require('path');
const webpack = require('webpack');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    output: {
        path: path.resolve('./dist'),
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
        modules: ['node_modules', 'src'],
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
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions',
                                        },
                                    ],
                                    [
                                        'postcss-pxtorem',
                                        {
                                            rootValue: 16,
                                            unitPrecision: 5,
                                            propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
                                            selectorBlackList: [],
                                            replace: true,
                                            mediaQuery: false,
                                            minPixelValue: 0,
                                            exclude: /node_modules/i,
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

    devServer: {
        port: 3000,
        client: {
            overlay: false,
        },
        static: {
            publicPath: '/dist',
            directory: './dist',
        },
        hot: true,
        open: false,
        compress: true,
        historyApiFallback: true,
    },
};
