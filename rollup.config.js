/* eslint-disable @typescript-eslint/no-var-requires */
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const analyzer = require('rollup-plugin-analyzer');
const postcss = require('rollup-plugin-postcss');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const typescript = require('rollup-plugin-typescript2');

const packageJson = require('./package.json');

// Track iterations over output files
let analyzePluginIterations = 0;

module.exports = {
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve({browser: true}),
		postcss({
			minimize: true,
			extract: 'ui-kit.css',
		}),
		commonjs(),
		typescript({useTsconfigDeclarationDir: true}),
		terser(),
		analyzer({
			filter: ({id}) => !/\/assets\//.test(id),
			onAnalysis: () => {
				if (analyzePluginIterations > 0) {
					// eslint-disable-next-line @typescript-eslint/no-throw-literal
					throw ''; // We only want reports on the first output
				}
				analyzePluginIterations += 1;
			},
		}),
	],
};
