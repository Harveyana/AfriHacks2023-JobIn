// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    'radix-vue/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@sidebase/nuxt-pdf',
    '@nuxt-alt/markdown-it'
  ],
    markdownit: {
      runtime: true
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },
  app: {
    head: {
      title: "JobRoutes",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
        // { hid: 'True seamless finance across borders', name: 'Smart and secured mediums to effortlessly send and receive money for individuals and businesses', content: 'Smart and secured mediums to effortlessly send and receive money for individuals and businesses' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://firebasestorage.googleapis.com/v0/b/jobroute-58c44.appspot.com/o/JobRoutes%20logo%20SVG%201%20(2).png?alt=media&token=a668b178-01ac-40ba-ac16-41873c9b549d' }],
    },
  },
  primevue: {
    usePrimeVue: true,
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
      // include: '*',
      include: ['Editor', 'Button', 'Dialog','Toast','ProgressSpinner','Ripple','Sidebar','Menu','SelectButton','InputNumber','TabView','TabPanel','Upload','Knob'],
    },
    directives: {
      include: '*'
    },
    composables: {
      include: '*'
  },
  options: {
    ripple: true,
    unstyled: true
  }
  },
  // routeRules: {
  //   // Homepage pre-rendered at build time
  //   '/': { prerender: true },
  // }
})
