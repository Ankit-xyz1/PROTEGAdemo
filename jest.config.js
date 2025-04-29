module.exports = {
    preset: 'ts-jest/presets/default-esm', // Use ESM preset
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts$': ['ts-jest', { useESM: true }],
    },
    globals: {
      'ts-jest': {
        useESM: true, // Enable ESM mode
      },
    },
    extensionsToTreatAsEsm: ['.ts'], // Ensure .ts files are treated as ESM
    moduleNameMapper: {
      '^supertest$': require.resolve('supertest'), // Fix for Supertest ESM issue
    },
    testMatch: [
      '**/test/**/*.test.ts', // Ensure this matches the test folder and file pattern
    ],
  };
  