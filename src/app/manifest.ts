import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ignis Legal',
    short_name: 'Ignis Legal Web Design',
    description: 'We are a web design company for legal professionals.  Specializing in modern, responsive websites that showcase your skills and attract potential clients.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}