const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader"
          ]
        }
      ]
    },
    plugins: [
        new MiniCssExtractPlugin('styles.css'),
    ]
};
module.exports = config;
