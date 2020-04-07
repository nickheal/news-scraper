module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}"
  ],
  moduleNameMapper: {
    "^src(.*)": "<rootDir>src$1"
  }
}