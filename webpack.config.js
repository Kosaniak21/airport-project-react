const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const config = {
    entry: './src/index.jsx',
    output: {
      filename: 'bundle.js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          use: ['babel-loader'],
        },
        {
          test: /.s?css$/,
          use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@redux-store': path.resolve(__dirname, 'src/redux-store'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@images': path.resolve(__dirname, 'images'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [{ from: 'images/favicon.ico', to: 'favicon.ico' }],
      }),
    ],
    devServer: {
      hot: true,
      historyApiFallback: true,
    },
    devtool: 'source-map',
  };

  if (isProd) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    );
  }

  return config;
};
