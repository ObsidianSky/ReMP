module.exports = {
    setupFiles: [
        'raf/polyfill',
        '<rootDir>/enzyme.config.js'
    ],
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.scss$': '<rootDir>/env/tests/styleMock.js',
    },
};