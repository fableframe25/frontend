export default function manifest() {
  return {
    name: 'Fable Frame - Professional Web Development',
    short_name: 'Fable Frame',
    description: 'Transform your business with custom website development, e-commerce solutions, and digital services. Professional, responsive websites that convert visitors into customers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/fableframe.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/fableframe.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/fableframe.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait-primary',
  }
}
