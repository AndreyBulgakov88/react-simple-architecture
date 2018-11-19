const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.jsx'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]_[hash:base64]",
              sourceMap: true
            }
          },
          {
            loader: "sass-loader"
          }, 
        ]
      },
      {
        test: /^((?!base64).)*(png|jpg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.base64.(png|jpg)$/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          'svg-react-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      minify: 
      {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      Home: path.resolve(__dirname, 'src/pages/Home'),
      Product: path.resolve(__dirname, 'src/pages/Product'),
      sharedComponents: path.resolve(__dirname, 'src/shared-components'),
      styles: path.resolve(__dirname, 'src/styles'),
    }
  }
};