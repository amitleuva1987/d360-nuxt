// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
      head: {
        charset: 'utf-16',
        viewport: 'width=500, initial-scale=1',
        title: 'Discover360 | Instantly Reach Your Future Customers',
        meta: [
          // <meta name="description" content="My amazing site">
          { name: 'description', content: 'Make better marketing decisions by learning what ads are already successful. Get comprehensive data on profitable native campaigns.' }
        ],
      }
    },
    css: ["@/assets/css/styles.css"],
    build: {
        transpile: ['@headlessui/vue'],
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
    },

    modules: [
      '@nuxt/image-edge',
    ]

    // buildModules: [
    //   '@aceforth/nuxt-optimized-images',
    // ],
  
    // optimizedImages: {
    //   inlineImageLimit: 1000,
    //   imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : 'img/[contenthash:7].[ext]',
    //   responsiveImagesName: ({ isDev }) => isDev ? '[path][name]--[width][hash:optimized].[ext]' : 'img/[contenthash:7]-[width].[ext]',
    //   handleImages: ['jpeg', 'png', 'svg'],
    //   optimizeImages: true,
    //   optimizeImagesInDev: true,
    //   defaultImageLoader: 'img-loader',
    //   mozjpeg: {
    //     quality: 80,
    //   },
    //   optipng: {
    //     optimizationLevel: 3,
    //   },
    //   pngquant: false,
    //   gifsicle: {
    //     interlaced: true,
    //     optimizationLevel: 3,
    //   },
    //   svgo: {
    //     // enable/disable svgo plugins here
    //   },
    //   webp: {
    //     preset: 'default',
    //     quality: 75,
    //   },
    // }
})
