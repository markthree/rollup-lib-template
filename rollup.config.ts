import { defineConfig } from 'rollup'
import resolve from 'rollup-plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'

export default defineConfig({
	// 输入
	input: 'src/index.ts',
	// 输出
	output: [
		{
			globals: {},
			format: 'umd',
			name: 'template',
			file: 'dist/index.umd.js'
		},
		{
			format: 'es',
			file: 'dist/index.es.js'
		}
	],
	// 插件
	plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
	// 外部模块
	external: []
})
