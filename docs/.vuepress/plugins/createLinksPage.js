// 创建首页
const { createPage } = require('@vuepress/core')

const createLinksPage = (options, app) => {
  return {
    name: 'vuepress-plugin-createLinksPage',
    async onInitialized(app) {
      console.log(app.pages.every((page) => page.path !== '/'))

      const linksPage = await createPage(app, {
        path: '/links',
        // set frontmatter
        frontmatter: {
          layout: 'LinksPage',
        },
      })
      app.pages.push(linksPage)
    },
  }
}

module.exports = createLinksPage