const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const common = require('./webpack.config.common');
const path = require('path');
const webpack = require('webpack');

const { merge } = require('webpack-merge');

const DIST_SLUG = 'distribution';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4648;
const PROXY = `http://${HOST}:${PORT}`;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [__dirname, path.join(__dirname, DIST_SLUG)],
    compress: true,
    hot: true,
    overlay: true,
    port: PORT,
    watchContentBase: true,
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        files: [
          '*.html',
          'images/**/*',
          `${DIST_SLUG}/**/*.js`,
          `${DIST_SLUG}/**/*.css`,
          `${DIST_SLUG}/fonts/*.*`,
        ],
        host: HOST,
        port: PORT,
        proxy: PROXY,
      },
      {
        reload: false,
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
