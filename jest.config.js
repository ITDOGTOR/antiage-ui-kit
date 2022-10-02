module.exports = {
	roots: ['src'],
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
	coveragePathIgnorePatterns: ['.stories.ts'],
	setupFilesAfterEnv: ['./setupTests.ts'],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
	resetMocks: true,
};
