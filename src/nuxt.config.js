export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static' ,
  mode: 'universal',
  assetsDir: './',
  publicPath: './',
  head: {
    title: '最果てのメサイア 公式サイト',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:site_name', property: 'og:site_name', content: '最果てのメサイア 公式サイト' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: '新作ストーリーRPG 最果てのメサイア 公式サイト。' },
      { hid: 'og:url', property: 'og:url', content: 'https://focused-dijkstra-bd6b7b.netlify.app/' },
      { hid: 'og:image', property: 'og:image', content: 'https://focused-dijkstra-bd6b7b.netlify.app/' + '_nuxt/img/logo.175fb92.png' }
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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-microcms-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-fontawesome',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  privateRuntimeConfig: {
    apiKey: process.env.API_KEY,
    serviceDomain: process.env.SERVICE_DOMAIN,
  },

  // Netlify
  env: {
    apiKey: process.env.API_KEY,
    serviceDomain: process.env.SERVICE_DOMAIN,
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

  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode:'all',
  }
}
