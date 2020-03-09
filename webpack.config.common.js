const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DIST_SLUG = 'distribution';
const DIST = path.resolve(__dirname, DIST_SLUG);

module.exports = {
  entry: {
    application: './source/scripts/application.js',
    'application-header': './source/scripts/application-header.js',
    styles: './source/styles/application.scss',
    ie: './source/styles/ie.scss',
    print: './source/styles/print.scss',
  },
  output: {
    filename: 'scripts/[name].js',
    path: DIST,
    publicPath: `/${DIST_SLUG}/`,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // eslint-disable-next-line global-require
              plugins: () => [require('autoprefixer')],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['node_modules'],
                sourceMap: true,
              },
            },
          },
        ],
      },
      {
        // Capture eot, svg, ttf, woff, and woff2
        test: /\.(eot|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[ext]',
            publicPath: '../',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss'],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        `${DIST_SLUG}/*.*`,
        `${DIST_SLUG}/scripts/*.*`,
        `${DIST_SLUG}/styles/*.*`,
        `${DIST_SLUG}/fonts/*.*`,
      ],
      cleanAfterEveryBuildPatterns: [`!${DIST_SLUG}/fonts/*.*`],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css',
    }),
  ],
};
