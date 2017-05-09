var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader?name=images/[name].[ext]"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css',  allChunks: true }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    inline: true,
    hot: true
  }
}
