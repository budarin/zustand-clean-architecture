const path = require('path');

module.exports = {
    mode: 'development', // 'production'
    devtool: false,
    entry: './src/server/index.ts',
    output: {
        path: path.resolve('./dist'),
        filename: 'sw.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.jsm', '.json', '.css', '.mp3', '.svg', '.png', '.gif'],
        modules: ['node_modules', 'src'],
    },
    module: {
        rules: [
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
        ],
    },
};
