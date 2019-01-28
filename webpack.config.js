const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = [
  {
    mode: 'development',
    entry: {
      script: path.resolve(__dirname, 'assets/js/script.js'),
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'public')
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: 'popper.js'
      })
    ]
  },
  {
    mode: 'development',
    entry: {
      style: path.resolve(__dirname, 'assets/scss/style.scss'),
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'css/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: './img/[name].[ext]',
              outputPath: './',
              publicPath: path => '.' + path
            }
          }
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        allChunks: true,
        filename: "css/[name].css",
      })
    ],
  }
];