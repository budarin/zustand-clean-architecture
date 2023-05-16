module.exports = {
    presets: [
        '@babel/preset-env',
        [
            '@babel/preset-react',
            {
                useBuiltIns: true,
                runtime: 'automatic',
                development: process.env['NODE_ENV'] !== 'production',
            },
        ],
        '@babel/preset-typescript',
    ],
};
