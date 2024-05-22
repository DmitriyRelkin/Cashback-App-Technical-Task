module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|your-other-dependency)/)",
  ],
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
};
