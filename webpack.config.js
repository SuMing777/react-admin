/*
 * @Descripttion:
 * @version:
 * @Author: SuMing777
 * @Date: 2020-08-22 12:54:50
 * @LastEditors: SuMing777
 * @LastEditTime: 2020-08-23 01:15:28
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "js/app.js",
  },
  module: {
    rules: [
      //react语法的处理
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"],
          },
        },
      },
      //css文件的处理
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
      //sass文件的处理
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      // 图片的配置
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "resource/[name].[ext]",
            },
          },
        ],
      },
      // 字体图标的配置
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "resource/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 处理html文件
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // 独立css文件
    new ExtractTextPlugin("css/[name].css"),
  ],
  devServer: {
    port: 8086,
  },
  devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "common",
          filename: "js/base.js",
        },
      },
    },
  },
};