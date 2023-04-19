<<<<<<< HEAD
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const config = {
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          use: ["babel-loader"],
        },
        {
          test: /.s?css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: "asset/resource",
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images",
                publicPath: "/images",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    devServer: {
      hot: true,
    },
    devtool: "source-map",
  };

  if (isProd) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    );
  }

  return config;
};
=======
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const config = {
        entry: './src/index.jsx',
        output: {
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    use: ['babel-loader'],
                },
                {
                    test: /.s?css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
        devServer: {
            hot: true,
        },
    };

    if (isProduction) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        );
    }

    return config;
};
>>>>>>> e4bfb1dc507d480f0ecce6a03311b267036c80d3
