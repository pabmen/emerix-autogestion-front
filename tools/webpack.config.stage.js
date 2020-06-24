/**
 * STAGE webpack config.
 * Webpack configuration only used by STAGE environment.
 *
 * Compiles production code (minified) into a build directory, but keeps console logs.
 */

const webpack = require('webpack');

const webpackMergeSmart = require('webpack-merge').smart;
const commonConfig = require('./common.js');

module.exports = webpackMergeSmart(commonConfig, {
	// Chosen mode tells webpack to use its built-in optimizations accordingly.
	mode: 'production',

	plugins: [
		//  Define global variables
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('stage'),
				'FULLPAGE_LICENSE': JSON.stringify('32A63C86-F77D4C71-B3F07B9C-D1854E7F'),

				// [portusojos.com, throughyoureyes.site]
				'FULLPAGE_PARALLAX_KEY': JSON.stringify(['cG9ydHVzb2pvcy5jb21fRUVqY0dGeVlXeHNZWGc9M25y', 'dGhyb3VnaHlvdXJleWVzLnNpdGVfTWJuY0dGeVlXeHNZWGc9SzFJ']),
			},
		}),
	],
});
