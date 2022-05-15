const {
  createHomePagePlugin,
  createLinksPagePlugin,
  createAboutPagePlugin,
  createMusicPlugin
} = require("../plugins")
module.exports = [
  createHomePagePlugin(),
  createLinksPagePlugin(),
  createAboutPagePlugin(),
  createMusicPlugin(),
]