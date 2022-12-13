import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import analyzer from 'rollup-plugin-analyzer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
			},
			{
				file: packageJson.module,
				format: 'esm',
			},
		],
		plugins: [
			peerDepsExternal(),
			nodeResolve(),
			commonjs(),
			postcss(),
			// css({output: 'ui-kit.css'}),
			terser({
				format: {
					comments: false,
				},
			}),
			typescript({useTsconfigDeclarationDir: true}),
			analyzer(),
		],
	},
];
