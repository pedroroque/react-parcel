module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['lcov'],
  reporters: ['jest-silent-reporter', 'summary', ['jest-sonar', { outputDirectory: 'reports/sonar', outputName: 'frontend.xml' }], ['jest-junit', { outputDirectory: 'reports/junit', outputName: 'frontend.xml' }]]
}
