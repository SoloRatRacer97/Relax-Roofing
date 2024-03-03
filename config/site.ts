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
      title: 'Services Soft',
      href: '/services-soft',
    },
    {
      title: 'Services Professional',
      href: '/services-professional',
    },
    {
      title: 'Store',
      href: '/store',
    },
    {
      title: 'Consultant',
      href: '/consultant',
    },
  ],
  services: ['serviceOne', 'serviceTwo', 'serviceThree', 'serviceThree', 'serviceThree', 'serviceThree'],
  links: {
    tikTok: 'https://www.tiktok.com/@desmond.and.sons',
    linkedin: 'Lorem11',
    facebook: 'https://m.facebook.com/Desmondandsonsconstruction',
    instagram: 'Lorem11',
  },
  address: '6212 candlestick Dr. Pasco 99301',
  phone: '(509) 405-6621',
  email: 'des@desandsons.com',
  dateSiteLaunched: 'March 3rd 2024',
};
