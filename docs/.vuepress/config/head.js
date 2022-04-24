const path = require("path");
module.exports = [
  // 网站图标
  ['link', {
    rel: 'icon',
    href: '/img/ico/favicon.ico'
  }],
  // 引入音乐组件
  ['link', {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css'
  }],
  ['script', {
    src: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js',
  }],
  ['script', {
    src: 'https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js',
  }],
];