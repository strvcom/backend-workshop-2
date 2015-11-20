
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./client/App.jsx",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components|server)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.styl$/,
      exclude: /(node_modules|bower_components)/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!stylus-loader")
    }]
  },
  plugins: [
    new ExtractTextPlugin("./public/styles.css")
  ]
}
