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
  name: 'Business Name',
  slogan: "Super cool business slogan",
  description: 'Business description here',
  url: 'thisistheurl.com',
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
    tikTok: 'Lorem11',
    linkedin: 'Lorem11',
    facebook: 'Lorem11',
    instagram: 'Lorem11',
  },
  address: '1234 Aynwhere place  SW, Calgary, AB T2P 3E5',
  phone: '(509) 123-4567',
  email: 'info@exampledomain.com',
  dateSiteLaunched: 'January 1st XXXX',
};
