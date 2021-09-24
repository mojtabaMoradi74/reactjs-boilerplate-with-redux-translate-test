module.exports = {
    rootDir: '.',
    displayName: {
        name: 'enzyme-setup',
        color: 'blue'
    },
    runner: 'jest-runner',
    verbose: true,
    errorOnDeprecated: true,
    roots: ['./src'],
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['./src/setupTests.js']
}