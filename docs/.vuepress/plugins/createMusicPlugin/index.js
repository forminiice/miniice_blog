const { path } = require('@vuepress/utils')

module.exports = () => {
  return {
    clientAppRootComponentFiles: path.resolve(
      __dirname,
      './Music.vue'
    ),
  }
}