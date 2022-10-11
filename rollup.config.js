import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import analyzer from 'rollup-plugin-analyzer';
import css from 'rollup-plugin-import-css';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
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
			css({output: 'ui-kit.css'}),
			commonjs(),
			typescript({useTsconfigDeclarationDir: true}),
			terser({
				format: {
					comments: false,
				},
			}),
			analyzer({summaryOnly: true}),
		],
	},
];
