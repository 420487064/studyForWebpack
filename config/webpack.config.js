const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.config.common.js')
const productionConfig = require('./webpack.config.prod.js')
const developmentConfig = require('./webpack.config.dev')

module.exports = (env) => {
    console.log(env);
    switch (true) {
        case env.development:
            return merge(commonConfig,developmentConfig)
        case env.production:
            return merge(commonConfig,productionConfig)        
        default:
            return new Error('no matching configuration was found')
    }
}