const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		host: '0.0.0.0',
		disableHostCheck: true,
		// allowedHosts: [
		//   'localhost',
		// 	'otherproductionhost'
		// ],
		compress: true,
		port: 3000,
		watchOptions: {
			poll: true // Or you can set a value in milliseconds.
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
				]
			},
			{
				test: /.*\.(gif|png|jpe?g)$/i,
				use: {
					loader: 'file-loader',
				}
			}
		]
	},
};