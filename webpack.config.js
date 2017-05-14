module.exports = {
	entry: "./app/scripts/app.js",
	output: {
		path: "./app/temp/scripts",
		filename: "app.js"
	},
	module: {
		loaders: [
			{
				loader: "babel",
				query: {
					presets: ["es2015"]
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}
