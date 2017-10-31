module.exports = {
    setupFiles: [
        'raf/polyfill',
        '<rootDir>/enzyme.config.js'
    ],
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.scss$': '<rootDir>/config/tests/styleMock.js',
    },
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: './coverage'
};