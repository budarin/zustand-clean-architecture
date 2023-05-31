const path = require('path');
const { dependencies } = require(path.resolve('package.json'));

module.exports = {
    presets: [
        '@babel/preset-env',
        [
            '@babel/preset-react',
            {
                corejs: {
                    version: dependencies['core-js'],
                    proposals: true,
                },
                useBuiltIns: 'entry',
                runtime: 'automatic',
                development: process.env['NODE_ENV'] !== 'production',
            },
        ],
        '@babel/preset-typescript',
    ],
};
