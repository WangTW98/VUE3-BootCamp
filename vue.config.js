// 是否多页面
const isMultiPage = false
// 配置
module.exports = {
  /**
   * @description: 部署应用包时的基本 URL
   * @type: string
   * @default: '/'
   */
  publicPath: './',
  /**
   * @description: 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
   * @description: 目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)
   * @type: string
   * @default: 'dist'
   */
  outputDir: 'dist',
  /**
   * @description: 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
   * @description: 从生成的资源覆写 filename 或 chunkFilename 时，assetsDir 会被忽略
   * @type: string
   * @default: ''
   */
  assetsDir: '',
  /**
   * @description: 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
   * @type: string
   * @default: 'index.html'
   */
  indexPath: 'index.html',
  /**
   * @description: 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
   * @description: 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希
   * @type: boolean
   * @default: true
   */
  filenameHashing: true,
  /**
   * @description: 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件
   * @description: 当在 multi-page 模式下构建时，webpack 配置会包含不一样的插件 (这时会存在多个 html-webpack-plugin 和 preload-webpack-plugin 的实例)。
   * @description: 如果你试图修改这些插件的选项，请确认运行 vue inspect。
   * @type: Object
   * @default: undefined
   */
  pages: isMultiPage ? {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  } : undefined,
  /**
   * @description: 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
   * @description: 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
   * @description: 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'default'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
   * @description: 设置为 error 将会使得 eslint-loader 把 lint 警告也输出为编译错误，这意味着 lint 警告将会导致编译失败。
   * @type: boolean | 'warning' | 'default' | 'error'
   * @default: 'default'
   */
  lintOnSave: 'default',
  /**
   * @description: 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
   * @type: boolean
   * @default: false
   */
  runtimeCompiler: false,
  /**
   * @description: 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
   * @type: Array<string | RegExp>
   * @default: []
   */
  transpileDependencies: [],
  /**
   * @description: 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   * @type: boolean
   * @default: true
   */
  productionSourceMap: true,
  /**
   * @description: 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
   * @description: 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
   * @type: string
   * @default: undefined
   */
  crossorigin: undefined,
  /**
   * @description: 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
   * @description: 如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
   * @description: 该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响
   * @description: 当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次
   * @type: boolean
   * @default: false
   */
  integrity: false,
  /**
   * @description: 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
   * @description: 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
   * @@type: Object | Function
   * @@default: ?
   */
  configureWebpack: undefined,
  /**
   * @description: 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
   * @type: Object | Function
   * @default: ?
   */
  chainWebpack: undefined,
  css: {
    /**
     * @description: 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
     * @description: 设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
     * @description: 如果你在 css.loaderOptions.css 里配置了自定义的 CSS Module 选项，则 css.requireModuleExtension 必须被显式地指定为 true 或者 false，否则我们无法确定你是否希望将这些自定义配置应用到所有 CSS 文件中。
     * @type: boolean
     * @default: true
     */
    requireModuleExtension: false,
    /**
     * @description: 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
     * @description: 同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。
     * @description: 当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS。
     * @description: 提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取。
     * @type: boolean | Object
     * @default: 生产环境下是 true，开发环境下是 false
     */
    extract: false,
    /**
     * @description: 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
     * @type: boolean
     * @default: false
     */
    sourceMap: false,
    /**
     * @description: 向 CSS 相关的 loader 传递选项。
     * @description: 支持的 loader 有：css-loader.postcss-loader,sass-loader,less-loader,stylus-loader
     * @description: 另外，也可以使用 scss 选项，针对 scss 语法进行单独配置（区别于 sass 语法）
     * @description: 相比于使用 chainWebpack 手动指定 loader 更推荐上面这样做，因为这些选项需要应用在使用了相应 loader 的多个地方
     * @type: Object
     * @default: {}
     */
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      sass: {
        // 这里的选项会传递给 scss-loader
      }
    }
  },
  /**
   * @description: 所有 webpack-dev-server 的选项都支持。
   * @description: 有些值像 host、port 和 https 可能会被命令行参数覆写
   * @description: 有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 publicPath 同步以保障正常的工作
   * @type: Object
   */
  devServer: {
    /**
     * @description: 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。
     * @description: 这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
     * @description: devServer.proxy 可以是一个指向开发环境 API 服务器的字符串
     * @description: 这会告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到 http://localhost:4000
     * @description: 如果你想要更多的代理控制行为，也可以使用一个 path: options 成对的对象
     * @type: string | Object
     */
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    } || 'http://localhost:4000'
  },
  /**
   * @description: 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
   * @type: boolean
   * @default: require('os').cpus().length > 1
   */
  parallel: require('os').cpus().length > 1,
  /**
   * @description: 向 PWA 插件传递选项。
   * @type: Object
   * @default: ?
   */
  pwa: undefined,
  /**
   * @description: 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。
   * @type: Object
   * @default: ?
   */
  pluginOptions: {
    foo: {
      // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
    }
  }
}
