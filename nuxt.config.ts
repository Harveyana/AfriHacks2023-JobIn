// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    'radix-vue/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },
  ssr: false,
  app: {
    head: {
      title: "JobRoute Ai",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { hid: 'True seamless finance across borders', name: 'Smart and secured mediums to effortlessly send and receive money for individuals and businesses', content: 'Smart and secured mediums to effortlessly send and receive money for individuals and businesses' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/jobInLogo.svg' }],
    },
  },
  primevue: {
    usePrimeVue: true,
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
      // include: '*',
      include: ['Editor', 'Button', 'Dialog','Toast','ProgressSpinner','Ripple','Sidebar','Menu','SelectButton','InputNumber','TabView','TabPanel','Upload'],
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
  }
})
