const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const {
    platformLibsDefinitions,
    webpackUtils,
    COMMON_EXTERNALS,
    providePlugin
} = require('platform-common-ui-lib');

const {
    packageName,
    libraryName
} = platformLibsDefinitions.PLATFORM_COMMON_UI;

const {
    pkgRootPath,
    pkgSrcPath,
    bundleAnalyzerPlugin,
    uglifyPlugin
} = webpackUtils.baseLibImportsAndVars(packageName, 'src');

const cssPlugin = webpackUtils.cssExtractPlugin(packageName);
const stylePath = path.join(pkgRootPath, 'styles');
const NODE_ENV = process.env.NODE_ENV;
const env = webpackUtils.envFromNodeEnv(NODE_ENV);
const entry = {};
entry[packageName] = ['./src/index.js'];

const externals = Object.assign({}, COMMON_EXTERNALS);
delete externals[packageName];
const devtool = webpackUtils.getWebpackDevTool(NODE_ENV);

const basePlugins = [
    new SpriteLoaderPlugin(),
    new webpack.DefinePlugin({
        __DEV__: env.development,
        __STAGING__: env.staging,
        __PRODUCTION__: env.production || env.dt,
        production: JSON.stringify('production'),
        __CURRENT_ENV__: NODE_ENV,
        'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.ProvidePlugin({
        ...providePlugin
    }),
    new CopyWebpackPlugin([{
        from: path.join(__dirname, '../src/shared/scss'),
        to: path.resolve(__dirname, '../dist/scss')
    }]),
    cssPlugin,
    bundleAnalyzerPlugin
];

const devPlugins = env.build ? [
    uglifyPlugin
] : [];

const plugins = basePlugins.concat(devPlugins);
const publicPath = webpackUtils.getPublicPath(NODE_ENV, pkgRootPath, packageName);
const { libraryTarget, library } =
    webpackUtils.getWebpackLibraryOutputConfig(libraryName, packageName);

module.exports = {
    entry,
    output: {
        filename: `${packageName}.js`,
        library,
        libraryTarget,
        path: path.resolve(__dirname, '../dist'),
        publicPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    devtool,
    externals,
    resolve: {
        alias: {
            'platform-common-ui': pkgSrcPath
        },
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(pkgRootPath, 'node_modules'),
            path.join(pkgRootPath, 'src'),
            path.join(pkgRootPath, 'styles')
        ]
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                include: path.join(pkgRootPath, 'src'),
                use: 'babel-loader'
            },
            {
                test: /\.scss/,
                include: path.join(__dirname, '../src/shared'),
                use: cssPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: false,
                                localIdentName: '[hash:base64]'
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
                include: stylePath,
                exclude: path.join(__dirname, '../src/shared'),
                use: cssPlugin.extract({
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
                include: path.resolve(__dirname, '../src/shared/icon/svg'),
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
