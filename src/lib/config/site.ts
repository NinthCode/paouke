import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'urara-demo.netlify.app',
  title: 'Paouke',
  subtitle: '深井冰的博客',
  lang: 'en-US',
  description: 'Powered by Paouke/Urara',
  author: {
    name: 'paouke',
    photo: '/assets/maskable@192.png',
    status: '🌸',
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  themeColor: '#3D4451'
}
