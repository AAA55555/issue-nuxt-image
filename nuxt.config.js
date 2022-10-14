const { APP_PREFIX } = process.env

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    dir: APP_PREFIX ? `dist/${APP_PREFIX}` : 'dist',
    fallback: '404.html',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'img',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/i18n'
  ],

  // i18n module configuration  https://i18n.nuxtjs.org/
  i18n: {
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.js'
      }
    ],
    langDir: '~/i18n/',
    defaultLocale: 'ru',
    lazy: true,
    strategy: 'prefix'
  },

  router: {
    base: APP_PREFIX || '',
    trailingSlash: true,
  },


  publicRuntimeConfig: {
    prefix: APP_PREFIX || '',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  },
}
