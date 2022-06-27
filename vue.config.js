const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack:config=>{
    //alias
    config.resolve.alias
      .set('@',path.resolve(__dirname,'src/'))
      .set('@/router',path.resolve(__dirname,'src/router'))
      .set('@/pages',path.resolve(__dirname,'src/pages'))
  }
})
