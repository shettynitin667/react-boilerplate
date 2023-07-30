const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'scss'],
    alias: {
      '@': path.resolve(__dirname, '..', './src'),
      utils: path.resolve(__dirname, '..', './src/utils'),
      components: path.resolve(__dirname, '..', './src/components'),
      views: path.resolve(__dirname, '..', './src/views'),
      assets: path.resolve(__dirname, '..', './src/assets'),
      store: path.resolve(__dirname, '..', './src/store'),
      router: path.resolve(__dirname, '..', './src/router'),
      services: path.resolve(__dirname, '..', './src/services'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          { loader: 'css-loader', options: { modules: true } },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  stats: 'errors-only',
}
