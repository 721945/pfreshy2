export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "PREFRESHY-2020" || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/assets/2.ico" }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  serverMiddleware: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/firebase",
    "nuxt-fontawesome",
  ],
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"],
      },
    ],
  },
  firebase: {
    config: {
      apiKey: "AIzaSyAivWrPDOGnH1ZeahoKP8t_B1o-98k7yRU",
      authDomain: "prefreshy-1d048.firebaseapp.com",
      databaseURL: "https://prefreshy-1d048.firebaseio.com",
      projectId: "prefreshy-1d048",
      storageBucket: "prefreshy-1d048.appspot.com",
      messagingSenderId: "987834299834",
      appId: "1:987834299834:web:4a7a4760436d164ade5983",
      measurementId: "G-Z0P6SZ4HCN",
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: "onAuthStateChanged",
        },
        ssr: true,
      },
      firestore: {
        memoryOnly: false,
        static: false,
      },
      functions: true,
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
