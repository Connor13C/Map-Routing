const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const port = 31408;
const url = "http://localhost:" + port;

module.exports = {
  entry: [
    'babel-polyfill',
    './src/entry.jsx'
  ],
  output: {
    path: path.join(__dirname, '../client_bundle/public'),
    filename: 'bundle.js',
    publicPath: 'public'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'SERVICE_URL': JSON.stringify(url)
      }
    }),
    new CopyWebpackPlugin(['images/*', 'index.html', 'About.html', 'style.css'])
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)/, loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: { presets: ['react'] } // Still unfamiliar with the query instruction
      },
      { test: /\.css$/, loaders: [ 'style-loader', 'css-loader'] },
      { test: /\.scss&/, loaders: ["style-loader", "css-loader", "sass-loader"] }
    ]
  }
}
