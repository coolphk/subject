const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('@api', resolve('src/api'))
            .set('@assets', resolve('src/assets'))
            .set('@comp', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@layout', resolve('src/layout'))
            .set('@static', resolve('src/static'))
    },
    publicPath:'/ruoyi-admin',
    // outputDir:'ruoyi-admin',
    devServer: {
        proxy: { //配置跨域
            '/ruoyi-admin': {
                target: 'http://localhost:8888/', //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true, //允许跨域
                // pathRewrite: {
                //     '^/api': 'ruoyi-admin/' //请求的时候使用这个api就可以
                // }
            }
        }
    },
    filenameHashing:false
}
