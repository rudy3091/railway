import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' assert { type: 'json' };

export default [
  {
    input: 'lib/index.ts',
    output: {
      file: pkg.main,
      format: 'cjs',
    },
    plugins: [
      typescript({
        declaration: true,
      }),
    ],
  },
  {
    input: 'lib/index.ts',
    output: {
      file: pkg.module,
      format: 'esm',
    },
    plugins: [
      typescript({
        declaration: true,
      }),
    ],
  },
];
