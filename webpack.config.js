const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')

//jquery
const providePlugin = new Webpack.ProvidePlugin({
    $: 'jquery'
})

//home
const homeWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/assets/pages/home/home.html',
    inject: true,
    chunks: ['home', 'global'],
    filename: 'home/index.html'
})

const homeCssPlugin = new MiniCssExtractPlugin({
    filename: '[name]/[name].css',
})

//tuorial
const tutorialWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/assets/pages/tutorial/tutorial.html',
    inject: true,
    chunks: ['tutorial', 'global'],
    filename: 'tutorial/tutorial.html'
})

//about
const aboutWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/assets/pages/about/about.html',
    inject: true,
    chunks: ['about', 'global'],
    filename: 'about/about.html'
})

module.exports = {
    mode: "development",
    entry: {
        home: './src/assets/pages/home/home.js',
        about: './src/assets/pages/about/about.js',
        tutorial: './src/assets/pages/tutorial/tutorial.js',
        global: './src/assets/js/scripts.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]/bundle-[name].js",
    },
    devServer: {
        host: '192.168.43.186',
        disableHostCheck: true,
        port: "5500",
        open: true,
        contentBase: ['./dist/home']
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        providePlugin,
        homeWebpackPlugin,
        tutorialWebpackPlugin,
        aboutWebpackPlugin,
        homeCssPlugin
    ]
}