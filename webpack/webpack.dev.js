const webpack = require('webpack')
const path = require('path')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'main.js',
  },
  plugins: [
    // new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('React Boilerplate'), // Define env variables
    }),
    new RefreshWebpackPlugin(),
  ],
}
