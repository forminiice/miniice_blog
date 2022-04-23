const { path } = require('@vuepress/utils')

const fooTheme = (options, app) => {
  return {
    name: 'vuepress-theme-forminiice',
    // 继承默认主题
    extends: '@vuepress/theme-default',
    // layouts: path.resolve(__dirname, 'layouts'),
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
      404: path.resolve(__dirname, 'layouts/404.vue'),
      HomePage: path.resolve(__dirname, 'layouts/HomePage.vue'),
      LinksPage: path.resolve(__dirname, 'layouts/LinksPage.vue')
    },
    // ...
  }
}

module.exports = fooTheme