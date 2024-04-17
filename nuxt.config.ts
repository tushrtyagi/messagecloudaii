// https://nuxt.com/docs/api/configuration/nuxt-config

export default ({
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
    ]
  },
  app: {
    head: {
      title: "Email Dev",
      htmlAttrs: {
        lang: "en",
      },
      experimental: {
        clientFallback: true
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet" ,  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" },
        { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}
      ]
    }
  },

  
    css: [
      'bootstrap/dist/css/bootstrap.min.css',
      '@coreui/coreui/dist/css/coreui.min.css',
  ],
  styleResources: {
    scss: [
      './assets/scss/main.scss'
    ],
    plugins: [
      { src: '~/plugins/coreui', mode: 'client' },

      
  ],
  },
});



