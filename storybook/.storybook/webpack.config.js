const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const css = new ExtractTextPlugin({
  filename: 'platform-common-ui.css'
});

const stylePath = path.join(__dirname, '../../styles');

module.exports = {

    resolve: {
        alias: {
            'platform-common-ui': path.resolve(__dirname, '../../src')
        },
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new SpriteLoaderPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, '../static') }
        ]),
        css
    ],

    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                include: path.join(__dirname, '../../src'),
                use: 'babel-loader'
            },
            {
                test: /\.scss/,
                include: path.join(__dirname, '../../src/shared'),
                use: css.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: false,
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: [
                    stylePath,
                    path.join(__dirname, './')
                ],
                exclude: path.join(__dirname, '../../src/shared'),
                use: css.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => {
                                    autoprefixer({
                                        browsers: ['last 2 version', 'ie >= 11']
                                    });
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.svg$/,
                include: path.resolve(__dirname, '../../src/shared/icon/svg'),
                use: [
                    {
                        loader: 'svg-sprite-loader'
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { convertColors: { shorthex: true } },
                                { removeStyleElement: true }
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
                include: stylePath
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                include: [
                    path.join(__dirname, '../static'),
                    stylePath
                ]
            },
            {
                test: /\.md$/,
                use: "markdown-loader"
            }
        ]
    }
};
