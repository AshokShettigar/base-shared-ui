const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const NODE_ENV = process.env.NODE_ENV;
const env = {
    production: NODE_ENV === 'production',
    staging: NODE_ENV === 'staging',
    test: NODE_ENV === 'test',
    development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

Object.assign(env, {
    build: (env.production || env.staging)
});

const css = new ExtractTextPlugin({
    filename: 'platform-common-ui.css'
});
const stylePath = path.join(__dirname, '../styles');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),

    output: {
        filename: 'platform-common-ui.js',
        library: 'platform-common-ui',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '../lib')
    },

    externals: {
        classnames: {
            root: 'classNames',
            commonjs2: 'classnames',
            commonjs: 'classnames',
            amd: 'classnames'
        },
        reselect: {
            root: 'reselect',
            commonjs2: 'reselect',
            commonjs: 'reselect',
            amd: 'reselect'
        },
        'prop-types': {
            root: 'PropTypes',
            commonjs2: 'prop-types',
            commonjs: 'prop-types',
            amd: 'prop-types'
        },
        lodash: {
            root: 'Lodash',
            commonjs2: 'lodash',
            commonjs: 'lodash',
            amd: 'lodash'
        },
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-transition-group': {
            root: 'ReactTransitionGroup',
            commonjs2: 'react-transition-group',
            commonjs: 'react-transition-group',
            amd: 'react-transition-group'
        },
        'react-redux': {
            root: 'ReactRedux',
            commonjs2: 'react-redux',
            commonjs: 'react-redux',
            amd: 'react-redux'
        },
        'react-redux-popup': {
            root: 'ReactReduxPopup',
            commonjs2: 'react-redux-popup',
            commonjs: 'react-redux-popup',
            amd: 'react-redux-popup'
        },
        'react-router-dom': {
            root: 'ReactRouterDom',
            commonjs2: 'react-router-dom',
            commonjs: 'react-router-dom',
            amd: 'react-router-dom'
        }
    },

    resolve: {
        alias: {
            'platform-common-ui': path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../styles')
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            __DEV__: env.development,
            __STAGING__: env.staging,
            __PRODUCTION__: env.production,
            __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '../src/shared/scss'),
            to: path.resolve(__dirname, '../lib/scss')
        }]),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        css
    ],

    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                include: path.join(__dirname, '../src'),
                use: 'babel-loader'
            },
            {
                test: /\.scss/,
                include: path.join(__dirname, '../src/shared'),
                use: css.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[hash:base64]'
                            }
                        },
                        { loader: 'sass-loader' }
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: stylePath,
                exclude: path.join(__dirname, '../src/shared'),
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
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                include: stylePath,
                use: 'file-loader?mimetype=image/svg+xml&name=fonts/[name].[ext]'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                include: stylePath,
                use: 'file-loader?mimetype=application/font-woff&name=fonts/[name].[ext]'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                include: stylePath,
                use: 'file-loader?mimetype=application/font-woff&name=fonts/[name].[ext]'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                include: stylePath,
                use: 'file-loader?mimetype=application/octet-stream&name=fonts/[name].[ext]'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                include: stylePath,
                use: 'file-loader&name=fonts/[name].[ext]'
            }
        ]
    }
};
