const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output:{
    filename: 'bundle.js',
    path: path.resolve('./'),
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader']
    }]
  }
}