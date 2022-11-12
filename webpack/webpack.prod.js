const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new BundleAnalyzerPlugin()],
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[name].[contenthash].js',
  },
}
