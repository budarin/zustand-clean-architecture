const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/client/index.tsx',
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
            'ico',
            'xml',
            'webmanifest',
        ],
        modules: ['node_modules', 'src'],
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
