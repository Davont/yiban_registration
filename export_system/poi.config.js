const path = require('path')
const pkg = require('./package')

module.exports = {
  entry: [
    'src/polyfills.js',
    'src/index.js'
  ],
  html: {
    title: "南邮易班新生注册表",
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs')
  },
  homepage: './',
  sourceMap: false,
  postcss: {
    plugins: [
      // Your postcss plugins
    ]
  },
  presets: [
    require('poi-preset-bundle-report')()
  ]
}
