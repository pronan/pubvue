var path = require('path')
var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
var commonConfig = require('./common.js')
// var HtmlWebpackPlugin = require('html-webpack-plugin')

// console.log('*******', path.join(__dirname, "dist"))
module.exports = webpackMerge(commonConfig, {
  entry: {
    // vendor: "./src/vendor.js",
    main: "./src/main.js",
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },

  devServer: {
    // contentBase: path.join(__dirname, "../dist"),
    compress: true,
    open: false,
    inline:true,
    host:'0.0.0.0',
    // publicPath: '',
    port: 9000,
    proxy: {
      "/tmd": "http://localhost:8000"
    }
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module) {
    //     return module.context && module.context.indexOf('node_modules') !== -1;
    //   },
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'manifest' ,
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'mie hahaha',
    //   filename: '../index.html',
    //   template: './config/admin.html',
    // }),
  ],

})