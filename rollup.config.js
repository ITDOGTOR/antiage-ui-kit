import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcssPresetEnv from 'postcss-preset-env';
import analyzer from 'rollup-plugin-analyzer';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';

const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
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
			resolve(),
			commonjs(),
			typescript({tsconfig: './tsconfig.json'}),
			postcss({
				plugins: [postcssFlexbugsFixes, postcssPresetEnv({stage: 2})],
				extract: true,
				minimize: true,
				sourceMap: true,
			}),
			terser(),
			analyzer(),
		],
	},
	{
		input: 'dist/esm/index.d.ts',
		output: [{file: 'dist/index.d.ts', format: 'esm'}],
		plugins: [dts()],
		external: [/\.css$/],
	},
];
