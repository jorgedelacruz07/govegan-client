require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'GoVegan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // DotEnv
    ['@nuxtjs/dotenv', { path: '/.env' }],

    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',

    // Vuetify
    '@nuxtjs/vuetify',

    // Progressive Web App
    '@nuxtjs/pwa'
  ],

  /*
  **
  */
  meta: {
    name: 'GoVegan',
    description: 'Go to vegan restaurants',
    mobileAppIOS: false,
    lang: 'es',
    ogImage: true,
    ogHost: 'https://govegan.ml',
    nativeUI: true
  },

  /*
  **
  */
  manifest: {
    name: 'GoVegan',
    lang: 'es',
    theme_color: '#FFF',
    background_color: '#FFF'
  },

  icon: {
    iconSrc: 'static/icon.png'
  },

  /*
  ** Vuetify configuration
  */
  vuetify: {
    // Vuetify options
    //  theme: { }
  },

  /*
  ** PWA configuration
  */
  workbox: {
    runtimeCaching: [
      {
        // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        urlPattern: 'https://govegan.ml/.*',
        // Defaults to `networkFirst` if omitted
        handler: 'cacheFirst',
        // Defaults to `GET` if omitted
        method: 'GET'
      }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
