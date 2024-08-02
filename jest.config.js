module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions:{
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  transform: {'^.+\\.ts?$': 'ts-jest'},
  //testRegex: '/tests/*/.*\\.(test|spec)?\\.(ts|tsx)$',
  testMatch: ["**/tests/**/*.+(js|jsx|ts|tsx)"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  coveragePathIgnorePatterns: ['node_modules', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
};