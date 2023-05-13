const path = require('path');
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
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.jsm', '.json', '.css', '.mp3', '.svg', '.png', '.gif'],
        modules: ['node_modules', 'src'],
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|mp3|aac|ogg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(gif|svg|png)$/,
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
        client: {
            overlay: false,
        },
        static: {
            publicPath: '/dist',
            directory: './dist',
        },
        open: false,
        port: 3000,
        compress: true,
        hot: true,
        historyApiFallback: true,
    },
};
