const { resolve } = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')

const APP_DIR = resolve(__dirname, 'build')

if (process.env["NODE_ENV"] === "production") {

}

module.exports = {
  entry: [
    //'react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    APP_DIR + '/js/index.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },
  context: APP_DIR,
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    // activate hot reloading

    contentBase: resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: [
          'json-loader',
        ],
        exclude: /node_modules/
      }
    ],
  },

  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    // activates HMR
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new HTMLWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env["NODE_ENV"])
      // watch out for webpack and compilation of node environment.
      // Use definePlugin anytime I want to define something at compilation time,
      // that would be available at execution time.
    })
  ],
}
