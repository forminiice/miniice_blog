// 创建首页
const { createPage } = require('@vuepress/core')

const createHomePage = (options, app) => {
  return {
    name: 'vuepress-plugin-createHomePage',
    async onInitialized(app) {
      // if homepage doesn't exist
      if (app.pages.every((page) => page.path !== '/')) {
        // async create a homepage 
        const homepage = await createPage(app, {
          path: '/',
          // set frontmatter
          frontmatter: {
            layout: 'HomePage',
          },
        })

        // push the homepage to app.pages
        app.pages.push(homepage)
      }
    },
  }
}

module.exports = createHomePage