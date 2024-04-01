/** @type {import('./dist').JestConfigWithTsJest} */
module.exports = {

    rootDir: './',
    roots: ["<rootDir>/src/", "<rootDir>/tests/"],

    collectCoverageFrom: ['src/**/*.ts'],
    modulePathIgnorePatterns: ['examples/.*', 'website/.*'],
    // setupFilesAfterEnv: ['<rootDir>/src/__helpers__/setup-jest.ts'],
    testPathIgnorePatterns: ['src/__mocks__/*', '/node_modules/', '/examples/', '/e2e/.*/__tests__', '\\.snap$'],
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest'
    },
    coverageProvider: 'v8',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', 'src'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
}