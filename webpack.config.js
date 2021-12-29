const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// The paths.
const paths = {
    public: path.resolve(__dirname, 'public'),
    dist: path.resolve(__dirname, 'docs'),
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
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            //webpackImporter: false,
                            sourceMap: true,
                            sassOptions: {
                                includePaths: [
                                    path.join(__dirname, 'node_modules'),
                                ],
                            },
                        },
                    },
                ],
            },
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
