'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/app'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'app'),
	  loader: 'babel-loader',
    },
	{ 
		test: /\.css$/, 
		loader: "style-loader!css-loader" 
	}
	]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'app.js'
  }
};