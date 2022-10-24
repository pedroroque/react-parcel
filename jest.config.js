module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['lcov'],
  reporters: ['jest-silent-reporter', 'summary', ['jest-junit', { outputDirectory: 'reports', outputName: 'frontend-tests.xml' }]]
}
