const {pathsToModuleNameMapper} = require('ts-jest/utils')

const {compilerOptions} = require('../../tsconfig')

module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      'tsConfig': '<rootDir>/tsconfig.json',
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@qiwi).+ \\ .js $'],
  testMatch: ['**/core/**/test/**/*.+(ts|tsx)'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/core/src/*/*.ts{,x}',
  ],
  coverageDirectory: '<rootDir>/coverage/core',
  coveragePathIgnorePatterns: ['node_modules', 'index.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/packages/'}),
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|)$': 'jest-mock',
  },
}
