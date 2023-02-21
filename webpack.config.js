const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'inline-source-map',

  mode: 'none',

  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },

  target: 'web',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: '/node_modules/'
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.js$/,
          exclude: "/node_modules/",
          loader: 'babel-loader',
          options:{
              presets: ['@babel/preset-env']
          }
        }
      ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html')
      }),
      new Dotenv()
  ],
  devServer: {
    historyApiFallback: true,
  }
};