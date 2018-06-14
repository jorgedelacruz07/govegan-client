require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'govegan',
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

  vuetify: {
    // Vuetify options
    //  theme: { }
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
