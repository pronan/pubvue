var path = require('path')
var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
var commonConfig = require('./common.js')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')

var extractLESS = new ExtractTextPlugin(`[name].[chunkhash].css`);

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
  module: {
    rules: [
      { 
        test: /\.less$/, 
        use: extractLESS.extract(["css-loader","less-loader"]),
      }, 
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/static/dist/',
    filename: '[name].[chunkhash].js'
  },

  plugins: [
    extractLESS,
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module) {
    //     return module.context && module.context.indexOf('node_modules') !== -1;
    //   },
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'manifest' ,
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({
      title: 'PRODUCTION ADMIN',
      filename: '../html/admin.html',
      template: './config/admin.template.external.html',
    }),
  ],

})