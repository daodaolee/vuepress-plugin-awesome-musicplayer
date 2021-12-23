const path = require("path")

module.exports = {
  base: '/vuepress-plugin-awesome-musicplayer/',
  title: 'musicplayers',
  description: "a music player by vuepress",
  themeConfig: {
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated'
  },
  plugins: [
    path.resolve(__dirname, '../../index.js'),
  ]
}