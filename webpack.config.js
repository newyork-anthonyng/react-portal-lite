const path = require('path');

module.exports = {
	entry: './lib/portal.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'portal.js',
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			}
		]
	},
};
