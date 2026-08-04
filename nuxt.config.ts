// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'VideoPlay - HD Online Video Streaming Cinema',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'VideoPlay HD online video streaming platform with movies, anime, tech & documentaries.' },
                { name: 'keywords', content: 'VideoPlay, HD streaming, online video, 4K movies, anime, tech documentaries' },
                { name: 'robots', content: 'index, follow' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'VideoPlay - HD Online Video Streaming Cinema' },
                { property: 'og:description', content: 'VideoPlay HD online video streaming platform with movies, anime, tech & documentaries.' },
                { property: 'og:image', content: '/logo.png' },
                { name: 'twitter:card', content: 'summary_large_image' },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/logo.png' }
            ]
        }
    },
    modules: [
        '@nuxtjs/color-mode',
        '@nuxt/image',
    ],
    css:[
        '~/assets/css/app.css'
    ],
    colorMode:{
        preference: 'system', // default value of $colorMode.preference
        fallback: 'dark', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },
    postcss:{
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
})
