import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import analyzer from 'rollup-plugin-analyzer';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default [
	{
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
			commonjs(),
			typescript({useTsconfigDeclarationDir: true}),
			copy({
				targets: [{src: 'src/ui-kit.css', dest: 'dist'}],
			}),
			postcss({
				modules: {
					generateScopedName: '[local]__[hash:base64:5]',
				},
			}),
			terser(),
			analyzer({summaryOnly: true}),
		],
	},
];
