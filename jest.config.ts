import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/app/password_validation';
const baseTestDir = '<rootDir>/src/test/password_validation';

const config : Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    `${baseDir}/**/*.ts`
  ],
  testMatch:[ 
    `${baseTestDir}/**/*.ts`
  ]
};
export default config;