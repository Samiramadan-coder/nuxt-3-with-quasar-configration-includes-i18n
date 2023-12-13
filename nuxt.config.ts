// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui"],
  css: ["~/assets/css/app.scss"],
  build: {
    transpile: ["i18n"],
  },
  quasar: {
    // Quasar plugins
    plugins: ["Notify"],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: {
      /**
       * 'ionicons-v4'
       *  'mdi-v5'
       * 'eva-icons'
       * 'themify'
       * 'line-awesome'
       * 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
       */
      fontIcons: ["material-icons"],

      font: "roboto-font",

      svgIcons: [],

      // [] --- includes all animations
      animations: "all",
    },

    /**
     *  Quasar language pack
     * 'en-US'
     * 'ar
     */
    lang: "ar",

    // Enable Quasar Scss Variables in style scope
    sassVariables: true,
  },
});
