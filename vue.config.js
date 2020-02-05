/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-01-29 11:20:01
 * @copyright: Copyright (c) 2019, Hand
 */
// const webpack = require('webpack')  // 引入webpack
const path = require("path"); // node
// const appData = require('./data.json')  //
// const seller = appData.seller

// function resolve(dir) {             // 拼接路径
//   return path.join(__dirname, dir)
// }

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      },
      sass: {
        data: `@import "@/assets/styles/general.scss";`
      }
    }
  }
  // chainWebpack(config) {
  // // 别名
  // config.resolve.alias
  //   .set('components', resolve('src/components'))
  //   .set('common', resolve('src/common'))
  //   .set('api', resolve('src/api'))

  // config.plugin('context')
  //   .use(webpack.ContextReplacementPlugin,
  //     [/moment[/\\]locale$/, /zh-cn/])
  // },
};
