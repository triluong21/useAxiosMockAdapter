const path = require('path');
const slsw = require('serverless-webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: slsw.lib.entries,
  devtool: 'inline-source-map',
  module: {
    rules: [ 
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            logInfoToStdOut: true,
            logLevel: "info"
          }
        },
        exclude: /node_modules/,
      },
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist')
  },
};