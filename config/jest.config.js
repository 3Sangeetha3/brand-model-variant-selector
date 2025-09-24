const { defaults } = require('jest-config');

module.exports = {
  // Tell Jest where to find the test files
  testMatch: [
    '**/tests/unit/**/*.js',
    '**/tests/integration/**/*.js'
  ],
  // Use a transformer for ES Modules
  transform: {},
  // Define the test environment
  testEnvironment: 'node',
  // Resolve import paths in the tests
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
};
