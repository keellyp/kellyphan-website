module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    lang: 'en',
    title: 'Kelly Phan - Portfolio',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          "I'm a French frontend developer based in Paris. I'm a digital enthusiast and I'm always curious to learn new things. I'm available for freelance and I'm looking for a 6-months internship abroad.",
      },
      {
        hid: 'twitter-site',
        name: 'twitter:site',
        content: '@keellyp',
      },
      {
        hid: 'twitter-title',
        name: 'twitter:title',
        content: 'Kelly Phan - Portfolio',
      },
      {
        hid: 'twitter-description',
        name: 'twitter:description',
        content:
          "I'm a French frontend developer based in Paris. I'm a digital enthusiast and I'm always curious to learn new things. I'm available for freelance and I'm looking for a 6-months internship abroad.",
      },
      {
        hid: 'twitter-image',
        name: 'twitter:image',
        content: 'https://kellyphan.fr/og-image.jpg',
      },
      {
        hid: 'twitter-imageAlt',
        name: 'twitter:image:alt',
        content: 'Kelly Phan website',
      },
      {
        hid: 'og-url',
        name: 'og:url',
        content: 'http://kellyphan.fr',
      },
      {
        hid: 'og-type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og-title',
        name: 'og:title',
        content: 'Kelly Phan - Portfolio',
      },
      {
        hid: 'og-description',
        name: 'og:description',
        content:
          "I'm a French frontend developer based in Paris. I'm a digital enthusiast and I'm always curious to learn new things. I'm available for freelance and I'm looking for a 6-months internship abroad.",
      },
      {
        hid: 'og-image',
        name: 'og:image',
        content: 'https://kellyphan.fr/og-image.jpg',
      },
      {
        hid: 'og-imageWidth',
        name: 'og:image:width',
        content: '279',
      },
      {
        hid: 'og-imageHeight',
        name: 'og:image:height',
        content: '279',
      },
      {
        hid: 'og-siteName',
        name: 'og:site_name',
        content: 'Kelly Phan',
      },
      {
        hid: 'og-siteName',
        name: 'og:site_name',
        content: 'Kelly Phan',
      },
      {
        hid: 'ms-color',
        name: 'msapplication-TileColor',
        content: '#000000',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/x-icon',
        href: '/apple-touch-icon.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/favicon-32x32.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicon-16x16.png',
      },
    ],
    link: [
      {
        rel: 'manifest',
        sizes: '16x16',
        type: 'image/png',
        href: '/site.webmanifest',
      },
    ],
    link: [
      { rel: 'mask-icon', color: '#0554ff', href: '//safari-pinned-tab.svg' },
    ],

    /*
     ** Customize the progress bar color
     */
    loading: { color: '#0554ff' },
    /*
     ** Build configuration
     */
    build: {
      /*
       ** Run ESLint on save
       */
      extend(config, { isDev, isClient }) {
        if (isDev && isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
          });
        }
      },
    },
  },
};
