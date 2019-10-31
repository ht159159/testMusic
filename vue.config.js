//vue.confing.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/testMusic/'
      : '/',
      proxyTable: {
        "/api":{
          target: 'https://api.douban.com',
          changeOrigin: true,
          pathRewrite: {
          '^/api': '/'
          }
          }
      },
  }