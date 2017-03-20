var path = require('path')
var fs = require('fs')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.mutiPageConfig = function () {
  const pages = fs.readdirSync('src/html');
  const config = {
    entry: {},
    devHtmlPluginList: [],
    prodHtmlPluginList: []
  }
  for (let index in pages) {
    let pageName = pages[index]
    let excludeChunksList = [...pages]
    excludeChunksList.splice(index, 1)
    // bas中entry配置
    config.entry[pageName] = ['babel-polyfill', './src/html/' + pageName + '/main.js']
    // dev中HtmlWebpackPlugin配置
    config.devHtmlPluginList.push(new HtmlWebpackPlugin({
      filename: pageName + '.html',
      template: 'src/html/' + pageName + '/page.html',
      inject: true,
      excludeChunks: excludeChunksList
    }))
    // prod中HtmlWebpackPlugin配置
    config.prodHtmlPluginList.push(new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/' + pageName + '.html'),
      template: 'src/html/' + pageName + '/page.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
      excludeChunks: excludeChunksList
    }))
  }
  return config
}
