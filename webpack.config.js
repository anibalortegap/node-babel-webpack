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
		__dirname: false,  
    __filename: false, // if you don't put this is, __dirname and __filename return blank
	},
	externals: [nodeExternals()], // need this to avoid error when working with Express
  module: {
    rules: [{
      test: /\.js?$/, 
      exclude: /node_modules/,
      use: {
        loader:  'babel-loader',
      }
    }]
  }      
}