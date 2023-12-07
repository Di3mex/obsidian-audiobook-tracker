module.exports = {
    verbose: true,
    preset: 'ts-jest',
    displayName: 'unit-tests',
    collectCoverage: true,
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'ts', 'svelte'],
    automock: false,
    setupFiles: ['./tests/global-setup.ts'],
    setupFilesAfterEnv: ['jest-expect-message']
  };