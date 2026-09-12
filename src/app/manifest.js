export default function manifest() {
  return {
    name: 'Ankush Maurya | Full Stack Developer Lucknow',
    short_name: 'Ankush Maurya',
    description: 'Ankush Maurya – Full Stack Developer from Lucknow specializing in MERN stack, Next.js & scalable backend systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
