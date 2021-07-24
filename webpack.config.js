const { resolve, join } = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.DEV === '1';
const INCLUDE = resolve(__dirname, 'src');

const PORT = 8090;

module.exports = {
  mode: dev ? 'development' : 'production',

  entry: './src/index.ts',
  devtool: 'inline-source-map',
  target: 'web',

  module: {
    rules: [
      {
        test: /\.(png|gif|jpg|woff2|ttf|svg)$/,
        include: INCLUDE,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.tsx|ts$/,
        loader: 'babel-loader',
        include: INCLUDE,
        options: {
          plugins: ['react-refresh/babel'],
        },
      },
    ],
  },

  plugins: (dev
    ? [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
      ]
    : []
  ).concat([
    new HtmlWebpackPlugin({
      title: '@wexond/react testing',
      template: 'static/pages/app.html',
      filename: `app.html`,
    }),
  ]),

  devServer: {
    contentBase: join(__dirname, 'build'),
    port: PORT,
    hot: true,
    inline: true,
    disableHostCheck: true,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '~': INCLUDE,
    },
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '~': INCLUDE,
    },
    symlinks: true,
  },
};
