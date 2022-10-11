const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 本地代理配置
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // 线上打包
  publicPath: process.env.NODE_ENV === 'production' ? '/vue2mi' : '/',
  productionSourceMap: true,
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
})
