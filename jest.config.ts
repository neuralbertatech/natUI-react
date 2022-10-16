import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 80,
      lines: 75,
      statements: 80
    }
  },
  moduleDirectories: [
    "node_modules",
    "<rootDir>"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest"
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"]
};

export default config;
