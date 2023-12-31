// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue'
  ],
  ssr: false,
  app: {
    head: {
      title: "JobIn",
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
      include: ['InputText', 'Button', 'Dialog','Toast','ProgressSpinner','Ripple','Sidebar','Menu','SelectButton','InputNumber','TabView','TabPanel','DataTable','Column','ColumnGroup','Row'],
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
