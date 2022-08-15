import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import {terser} from 'rollup-plugin-terser';
import analyzer from 'rollup-plugin-analyzer';

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
        plugins: [
          require('postcss-flexbugs-fixes'),
          postcssPresetEnv({stage: 2}),
        ],
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
