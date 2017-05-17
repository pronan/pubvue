var path = require('path')
var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
var commonConfig = require('./common.js')

module.exports = webpackMerge(commonConfig, {
  entry: {
    main: "./src/main.js",
  },
  externals: {
    jquery: 'jQuery',
    vue: 'Vue',
    'vue-resource': 'VueResource',
    'vue-router': 'VueRouter',
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },

  devServer: {
    // contentBase: path.join(__dirname, "../dist"),
    // publicPath: '',
    compress: true,
    open: true,
    // host: '120.24.244.38',
    port: 9000,
    proxy: {
      "/tmd": "http://localhost:8000"
    }
  },
  // devtool: '#eval-source-map',
  plugins: [

  ],

})