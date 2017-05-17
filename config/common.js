var path = require('path')
var webpack = require('webpack')
var argv = require('yargs').argv

module.exports = {
  resolve: {
    modules: [
      path.resolve('./js'),
      path.resolve('./vue'),
      'node_modules',
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vue-router$': 'vue-router/dist/vue-router.common.js',
      'vue-resource$': 'vue-resource/dist/vue-resource.common.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
    ],
  },
  performance: {
    hints: false
  },
  plugins: [
      
  ],
}
