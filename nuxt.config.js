export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  router: {
    base: "/",
  },
  head: {
    title: "moretechplc",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo2.svg" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/swiper/swiper-bundle.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
  ],
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  // axios: {
  //   baseURL: 'https://moretechplc.com/api/',
  //            // Used as fallback if no runtime config is provided
  //   proxy: true // Can be also an object with default options
  // },

  // proxy: {
  //   '/api/': { target: 'https://moretechplc.com/api/', pathRewrite: {'^/api/': ''} }

  // },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
