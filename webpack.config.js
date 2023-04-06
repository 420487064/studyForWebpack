const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: {
        // index: {
        //     import: './src/index.js',
        //     dependOn: 'common'
        // },
        // another: {
        //     import: './src/another.js',
        //     dependOn: 'common'
        // },
        // common: './src/common'
        index: './src/index.js',
        another: './src/another.js'
    },
    output: {
        filename: 'srcipts/[name].[contenthash].js',
        path: path.resolve(__dirname,'./dist'),
        clean:true,
        publicPath: 'http://localhost:8080/'       
    },
    // 打包模式
    mode: 'production',
    // 错误定位
    devtool: 'inline-source-map', 
    plugins: [
        // 模板
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'app.html',
            inject: 'body'
        }),
        // 分离 打包的css
        new MiniCssExtractPlugin({
            filename: 'style/[contenthash].css'
        })
    ],
    //  启动热更新，要配置webpack-dev-server
    devServer: {
        static: './dist'
    },
    performance: { hints: false },
    //  加载非js资源
    module: {
        rules: [
            {
                test: /\.png$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[contenthash][ext]'
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/inline'
            },
            {
                test: /\.txt$/,
                type: 'asset'
            },
            {
                test: /\.jpg$/,
                type: 'asset',
                // 生成 base64的设置
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 *1024
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                 test: /\.(csv|tsv)$/,
                 use: 'csv-loader'
            },
            {
                test: /\.xml$/,
                use: 'xml-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    //  压缩css
    optimization: {
        minimizer:  [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}