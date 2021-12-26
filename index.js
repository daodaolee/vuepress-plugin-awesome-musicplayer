const path = require("path")
module.exports = (options, context) => ({
  enhanceAppFiles: path.resolve(__dirname, './lib/client.js'),

  scss: {
    includePath: ["./lib/css/common.scss"]
  }
})