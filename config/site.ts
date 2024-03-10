import { NavItem } from '@/types/nav';

interface SiteConfig {
  name: string;
  slogan: string;
  description: string;
  url: string;
  APIurl: string;
  cwsName: string;
  mainNav: NavItem[];
  services: string[];
  links: {
    tikTok: string;
    facebook: string;
    linkedin: string;
    instagram: string;
  };
  address: string;
  phone: string;
  email: string;
  dateSiteLaunched: string;
}

// TODO: Business/Site configuration
export const siteConfig: SiteConfig = {
  name: 'Relax Roofing',
  slogan: "",
  description: 'Business description here',
  url: 'relaxroofing.com',
  APIurl: 'thisistheurl.com',
  cwsName: 'Cascade Web Solutions',

  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  services: ['Residential Roofing', 'Commercial Roofing', 'Roof Repair & Maintenance'],
  links: {
    tikTok: 'https://www.tiktok.com/@desmond.and.sons',
    linkedin: 'https://www.youtube.com/channel/UCFVoGePhX4EYFJHA7DkgvlQ',
    facebook: 'https://m.facebook.com/Desmondandsonsconstruction',
    instagram: 'https://www.instagram.com/desmond_and_sons/',
  },
  address: '',
  phone: 'NEEDED',
  email: 'johnrobert70471@gmail.com',
  dateSiteLaunched: 'March 3rd 2024',
};
