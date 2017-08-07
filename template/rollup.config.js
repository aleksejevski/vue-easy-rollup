import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import replace from 'rollup-plugin-replace';
import vue from 'rollup-plugin-vue';

export default {
	// Default entry
	entry:	'src/main.js',

	// Default Format
	format: 'cjs',

	// Default output destination
	dest: 	'dist/{{ outputFile }}',
	plugins: [
		replace({
      'process.env.NODE_ENV': JSON.stringify('production')
		}),
		resolve({ jsnext: true }),
		commonjs(),
		alias({
			'vue$': 'vue/dist/vue.esm.js',
		}),
		vue({
			compileTemplate: true,
			css: null,
		}),
		babel({
			exclude:	'node_modules/**',
		}),
	],
}