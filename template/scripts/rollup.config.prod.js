import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import baseConfig from './rollup.config.base';
import {
  name,
  version,
  author,
  license
} from '../package.json';

import transBigHumpName from './trans-big-hump-name';
const libName = transBigHumpName(name);

// banner
const banner =
  `${'/*!\n' + ' * '}${name}.js V ${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the ${license} License.\n` +
  ` */`;

// 支持输出 []
export default [
  // .js, .cjs.js, .esm.js
  {
    ...baseConfig,
    output: [
      // umd development version with sourcemap
      // {
      //   file: `dist/${name}.js`,
      //   format: 'umd',
      //   name: libName,
      //   banner,
      // },
      // cjs and esm version
      // {
      //   file: `dist/${name}.cjs.js`,
      //   format: 'cjs',
      //   banner,
      // },
      // // cjs and esm version
      // {
      //   file: `dist/${name}.esm.js`,
      //   format: 'es',
      //   banner,
      // },
    ],
    plugins: [...baseConfig.plugins, filesize()]
  },
  // .min.js
  {
    ...baseConfig,
    output: [
      // umd with compress version
      {
        file: `dist/${name}.min.js`,
        format: 'umd',
        name: libName,
      },
      // cjs and esm version
      {
        file: `dist/${name}.cjs.min.js`,
        format: 'cjs',
      },
      // cjs and esm version
      {
        file: `dist/${name}.esm.min.js`,
        format: 'es',
      }
    ],
    plugins: [
      ...baseConfig.plugins,
      uglify(
        {
          compress: {
            drop_console: true,
          },
          // ↓ 不混淆其中某个变量名，其他变量名混淆
          mangle: {
            reserved: [
              // 'Event'
            ],
          }
        },
        minify,
      ),
      filesize(),
    ],
  },
];
