module.exports = {
	testEnvironment: 'jsdom',
	roots: ['src'],
	setupFilesAfterEnv: ['./jest.setup.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	testPathIgnorePatterns: ['node_modules/'],
	moduleNameMapper: {
		'.(css|less|scss)$': 'identity-obj-proxy',
	},
};
