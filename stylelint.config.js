module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
    plugins: ['stylelint-use-logical'],
    rules: {
        'selector-class-pattern': null,
        'custom-property-pattern': null,
    },
};
