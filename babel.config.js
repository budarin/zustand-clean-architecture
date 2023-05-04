module.exports = {
    presets: [
        '@babel/preset-env',
        [
            '@babel/preset-react',
            {
                useBuiltIns: true,
                runtime: 'automatic',
                development: true,
            },
        ],
        '@babel/preset-typescript',
    ],
};
