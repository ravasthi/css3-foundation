const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'application': './source/scripts/application.js',
        'application-header': './source/scripts/application-header.js',
        'styles': './source/styles/application.scss',
        'ie': './source/styles/ie.scss',
        'print': './source/styles/print.scss'
    },
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, 'distribution'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
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
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [ 'node_modules' ],
                            sourceMap: true
                        }
                    }
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
                        publicPath: '../'
                    }
                },
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.css',
            '.scss'
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            'distribution/*.*',
            'distribution/scripts/*.*',
            'distribution/styles/*.*',
            'distribution/fonts/*.*'
        ]),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "styles/[id].css",
        }),
        new BrowserSyncPlugin({
            files: [
                '*.html',
                'images/**/*',
                'distribution/**/*.js',
                'distribution/**/*.css'
            ],
            host: 'localhost',
            port: 4649,
            server: {
                baseDir: ['.']
            }
        })
    ]
};
