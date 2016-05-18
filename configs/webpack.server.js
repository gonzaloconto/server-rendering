var webpack       = require("webpack");
var nodeExternals = require("webpack-node-externals");
var path          = require("path");
var fs            = require("fs");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractCSS = new ExtractTextPlugin('../src/assets/css');

module.exports = {
	target:  "node",
	cache:   false,
	context: __dirname,
	debug:   false,
	devtool: "source-map",
	entry:   ["../src/server"],
	output:  {
		path:          path.join(__dirname, "../dist"),
		filename:      "server.js"
	},
	plugins: [
		new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEV__: false}),
		new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
		extractCSS
	],
	module:  {
		loaders: [
			{test: /\.json$/, loaders: ["json"]},
			{test: /\.scss$/i, loader: extractCSS.extract(['css','sass']), exclude: /node_modules/},
			{test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/, loaders: ["file?context=static&name=/[path][name].[ext]"], exclude: /node_modules/},
			{test: /\.js$/, loaders: ["babel?presets[]=es2015&presets[]=stage-0&presets[]=react"], exclude: /node_modules/}
		],
		postLoaders: [
		],
		noParse: /\.min\.js/
	},
	externals: [nodeExternals({
		whitelist: ["webpack/hot/poll?1000"]
	})],
	resolve: {
		modulesDirectories: [
			"src",
			"node_modules",
			"static"
		],
		extensions: ["", ".json", ".js"]
	},
	node:    {
		__dirname: true,
		fs:        "empty"
	}
};
