const path = require('path')
const _ = require('lodash')
const tailwindcss = require('tailwindcss')
const postcssNormalize = require('postcss-normalize')
const postcssImport = require('postcss-import')
const postcssApply = require('postcss-apply')
const postcssCsso = require('postcss-csso')
const postcssNested = require('postcss-nested')
const postcssMixins = require('postcss-mixins')
const postcssSimpleVars = require('postcss-simple-vars')
const postcssFlexboxFixes = require('postcss-flexbugs-fixes')
const postcssPresetEnv = require('postcss-preset-env')

const inProduction = process.env.NODE_ENV === 'production'

// test
module.exports = {
  modifyWebpackConfig: ({ webpackConfig }) => {
    // add postcss loader and plugins
    webpackConfig.module.rules.push(
      {
        include: [path.resolve(__dirname, 'src')],
        test: /\.css$/,
        use: [
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssImport,
                postcssPresetEnv,
                postcssMixins,
                postcssApply,
                postcssNested,
                postcssNormalize,
                postcssSimpleVars,
                tailwindcss('tailwind.config.js'),
                postcssFlexboxFixes(),
                postcssCsso()
              ],
              syntax: 'postcss-scss'
            }
          }
        ]
      }
    )

    webpackConfig.resolve.modules.unshift(path.resolve(__dirname, './src'))

    return webpackConfig
  },
  plugins: _.concat(
    ['eslint'],
    inProduction ? ['disable-sourcemaps-production'] : []
  )
}
