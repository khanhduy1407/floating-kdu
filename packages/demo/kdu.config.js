module.exports = {
  chainWebpack: config => {
    config.module
      .rule('kdu')
      .use('kdu-loader')
      .loader('kdu-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/style/imports.scss";',
      },
    },
  },
}
