const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: false
};
module.exports = {
  entry: {
        app: [path.join(__dirname, './src/app.js')],
        'vendor.js': [
            'react',
            'react-dom',
            'react-router'
        ]
    },

  output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap'
      },
      {
        test: /\.html$/,
        loader: ['html-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|otf|mov)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }
      }
    ]
  },
  plugins: [
     new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: '[name].js',
            minChunks: Infinity
        }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          },
      inject: 'body',
      trackJSToken: ''
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}
