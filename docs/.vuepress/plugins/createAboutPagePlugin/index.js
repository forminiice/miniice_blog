// 创建首页
const { createPage } = require('@vuepress/core')

const createAboutPage = (options, app) => {
  return {
    name: 'vuepress-plugin-createAboutPage',
    async onInitialized(app) {
      const AboutPage = await createPage(app, {
        path: '/about',
        // set frontmatter
        frontmatter: {
          layout: 'AboutPage',
        },
      })
      app.pages.push(AboutPage)
    },
  }
}

module.exports = createAboutPage