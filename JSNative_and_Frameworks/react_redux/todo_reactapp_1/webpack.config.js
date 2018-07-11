
let path = require('path');
var webpack = require('webpack');


module.exports = {

entry: './src/App.jsx',

output: {

	filename: 'bundle.js',
	path: path.resolve(__dirname, './public'),
	publicPath: '/public/'
	
},



	devServer:{
	
		overlay: true,
		
	},

module:  {

	rules: [

		{

		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel-loader'

		},


		{

		test: /\.css$/,

		use: [ 'style-loader',
				'css-loader' ]

		},

		{
			test:/\.scss$/,
			use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader" 
            }, {
                loader: "sass-loader" 
            }]
			
		}

	]


},
	
	resolve: {

		extensions: ['*','.js','.jsx','json']
	},



	devtool:'eval-source-map'

	
};

