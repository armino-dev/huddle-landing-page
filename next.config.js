const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css")

module.exports = withCSS(withSass({
  devIndicators: {
    buildActivity: true,
    autoPrerender: false,
  }
}))