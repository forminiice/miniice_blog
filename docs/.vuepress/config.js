const path = require("path");
const head = require("./config/head"); // 引入 head 配置
const themeConfig = require("./config/themeConfig"); // 引入主题配置
const plugins = require("./config/plugins"); // 引入插件配置

module.exports = {
  // 站点配置
  base: "../../", // 部署站点的基础路径
  lang: 'zh-CN',
  title: 'ice',
  description: '小冰啦小冰',
  head, // head 配置
  // locals:  // locales多语言支持的各个语言 locales 。

  // 主题配置
  // theme: '@vuepress/theme-default',
  theme: path.resolve(__dirname, './theme/index.js'),
  themeConfig, // 主题配置

  plugins, // 插件配置

  // Markdown 配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },

  // Dev配置项
  host: "localhost", // 开发模式下，访问域名
  port: 2234, // 开发模式下，访问端口
};