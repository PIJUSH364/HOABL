module.exports = {
    transform: {
      "\\.js$": "<rootDir>/node_modules/babel-jest" // Use <rootDir> . 
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns : ["/build/"],
    globals: {
      // we must specify a custom tsconfig for tests because we need the typescript transform
      // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
      // can see this setting in tsconfig.jest.json -> "jsx": "react"
      "ts-jest": {
        tsconfig: "tsconfig.jest.json"
      }
    }
  };