// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-19',
  devtools: { enabled: true },

  app: {    
    head: {      
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: 'StudyPal | Learn better and smarter',
      
      meta: [  
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' }, //UPDATE THIS WHEN THE APP DESCRIPTION ALSO UPDATE favicon
        { name: 'keywords', content: 'StudyPal, Lasu, studypal.com.ng' }, //UPDATE THIS WHEN THE APP KEYWORDS
        { name: 'author', content: 'studypal.com.ng' },

        { property: 'og:title', content: 'StudyPal' },
        { property: 'og:description', content: '' }, //UPDATE THIS WHEN THE APP DESCRIPTION
        { property: 'og:image', content: 'https://studypal.com.ng/imgs/logo_large_og.png' },
        { property: 'og:url', content: 'https://studypal.com.ng' },


        { name: 'twitter:title', content: 'StudyPal' },
        { name: 'twitter:description', content: '' },
        { name: 'twitter:image', content: 'https://studypal.com.ng/imgs/logo_large_og.png' },
        { name: 'twitter:url', content: 'https://studypal.com.ng' },
        { name: 'twitter:card', content: 'summary' },
      ],

      
      link: [
        {rel: "canonical", href:"https://www.studypal.com.ng"},
        // {rel: "preconnect", href:"https://fonts.googleapis.com"},
        // {rel:"preconnect", href:"https://fonts.gstatic.com"},
        // {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap"}  
      ],

      script: [ 
        // { src: "https://accounts.google.com/gsi/client" } 
      ]
    },
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  css: [
    "@/assets/scss/main.scss",
    // 'vue-toast-notification/dist/theme-default.css', 
    // "animate.css/animate.min.css"
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";',
        },
      },
    },
    esbuild: {
      drop: ['debugger'],
      pure: ['console.log', 'console.error', 'console.warn', 'console.debug', 'console.trace'],
    },
  },

  modules: ["@vueuse/nuxt", "@pinia/nuxt", "@nuxtjs/supabase"],

  runtimeConfig:{
    apiKey:'new api key',
    public: {
      enviroment: 'Development',
      apiBase: 'https://localhost:7106/api/',
      clientUrl:"",
      googleClientId:"",
    }
  },

  supabase:{
    redirect:false
  }
})