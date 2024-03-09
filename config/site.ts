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
  name: 'Desmond And Sons LLC',
  slogan: "",
  description: 'Business description here',
  url: 'desandsons.com',
  APIurl: 'thisistheurl.com',
  cwsName: 'Cascade Web Solutions',

  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  services: ['Decking Contractor', 'Fencing Contractor', 'Outdoor Living Contractor'],
  links: {
    tikTok: 'https://www.tiktok.com/@desmond.and.sons',
    linkedin: 'https://www.youtube.com/channel/UCFVoGePhX4EYFJHA7DkgvlQ',
    facebook: 'https://m.facebook.com/Desmondandsonsconstruction',
    instagram: 'https://www.instagram.com/desmond_and_sons/',
  },
  address: '6212 candlestick Dr. Pasco 99301',
  phone: '(509) 405-6621',
  email: 'des@desandsons.com',
  dateSiteLaunched: 'March 3rd 2024',
};
