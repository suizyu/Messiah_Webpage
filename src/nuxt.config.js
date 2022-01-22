export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: 'static' ,
  assetsDir: './',
  publicPath: './',
  head: {
    title: 'src',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'modern-css-reset',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/typekit.js', mode: 'client' },
    { src: '~/plugins/fontAwesome.js', mode: 'client' },
    { src: '~/plugins/tinybox.js', mode: 'client' },
    { src: '~/plugins/axios.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    //'vue-awesome-swiper'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-fontawesome',
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  privateRuntimeConfig: {
    apiKey: process.env.API_KEY,
    baseUrl: process.env.BASE_URL
  },
  
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },

  storybook: {
    // Options
  },

  fontawesome: {
    component: 'fa'
  },

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {
      target: process.env.BASE_URL,
      pathRewrite: {'^/api/': '/'},
    }
  },
}
