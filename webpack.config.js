const webpack = require('webpack');
const childProcess = require('child_process');
const gitRef = childProcess.execSync('git rev-parse --short HEAD').toString().trim();

module.exports = {
	watch: true,
	module: {
		postLoaders: [
			{
				loader: 'transform?envify'
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react'],
					plugins: ['jsx-display-if', 'transform-object-rest-spread', `${__dirname}/gulptasks/encapsulateJsx`]
				}
			}
		]
	},
	output: {
		filename: 'app.js',
		publicPath: `/static/${gitRef}/`,
		library: 'App',
		libraryTarget: 'umd'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.DefinePlugin({
			'process.env.REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD': true,
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.BUNDLE': `"${gitRef}"`
		}),
		/*new webpack.optimize.UglifyJsPlugin({
		 compress: true
		 })*/
	],
};