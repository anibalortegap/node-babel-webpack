const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
	entry: {
		app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
	},
	target:'node',
	node: {
		__dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
	},
	//externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [{
      test: /\.js?$/, 
      exclude: /node_modules/,
      loader:  'babel-loader',
    }]
  }      
}