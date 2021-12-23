const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// The paths.
const paths = {
    public: path.resolve(__dirname, './public'),
    dist: path.resolve(__dirname, 'dist'),
};

const config = {
    entry: './src/index.js',
    output: {
        path: paths.dist,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css' },
                    },
                    'extract-loader',
                    'css-loader?-url',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [
                                    path.join(__dirname, 'node_modules'),
                                    path.join(
                                        __dirname,
                                        '..',
                                        '..',
                                        'node_modules'
                                    ),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        symlinks: false,
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules',
            '../../node_modules',
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.public + '/index.html', // template file
            minify: false,
        }),
        new MiniCssExtractPlugin(),
    ],
};

module.exports = config;
