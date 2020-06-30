module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/core/src/*/*.ts{,x}',
    '**/mobile/src/*/*.ts{,x}',
    '**/desktop/src/*/*.ts{,x}',
  ],
  coveragePathIgnorePatterns: ['node_modules', 'index.ts'],
  projects: [
    '<rootDir>/packages/core/jest.config.js',
    '<rootDir>/packages/desktop/jest.config.js',
    '<rootDir>/packages/mobile/jest.config.js',
  ],
}
