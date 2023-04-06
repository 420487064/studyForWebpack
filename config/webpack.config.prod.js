const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    output: {
        filename: 'srcipts/[name].[contenthash].js',
        publicPath: 'http://localhost:8080/'       
    },
    // 打包模式
    mode: 'production',
    performance: { hints: false },
    //  压缩css
    optimization: {
        minimizer:  [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    }
}