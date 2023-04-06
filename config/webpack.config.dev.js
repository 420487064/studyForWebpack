module.exports = {
    output: {
        filename:  'script/[name].js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        static: '../dist'
    }
}