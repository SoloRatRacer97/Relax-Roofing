// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import AllOutFooterSection from '../footer/info-heavy';
import { InfoWithSticky } from '../navigation/info-with-sticky-nav';
import { siteConfig } from '@/config/site';
import { useRouter } from 'next/router';
import { ConsBlockyWithQuoteNav } from './consultant-navigation';
import Facebook from '../../../public/icons/facebook.png';
import Instagram from '../../../public/icons/instagram.svg';
import LinkedIn from '../../../public/icons/linkedin.svg';
import Image from 'next/image';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  siteConfiguration?: {
    url: string;
  };
};

export default function ConsLayoutRegular({
  children,
  title = 'Default title of page', // default value if title prop isn't provided
  description = 'Default description of the page', // default value if description prop isn't provided
  siteConfiguration = {
    url: 'default url',
  },
}: LayoutProps) {
  const router = useRouter();
  const href = router.pathname;

  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Sir Suds Laundry Co.',
    url: 'https://www.sirsuds.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.sirsuds.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: 'Sir Suds Laundry Co.',
    url: 'https://www.sirsuds.com/',
    description: "Tri-Cities' Premier Laundromat Experience",
    logo: '/public/logo/main-logo.svg',
    telephone: '+1-940-5075',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1411 Williams Blvd',
      addressLocality: 'Richland',
      addressRegion: 'Washington',
      postalCode: '99354',
      addressCountry: 'US',
    },
  };

  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/filler-logo-ico.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/filler-logo-ico.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/filler-logo-ico.png" />
        {/* Recommended tags */}
        <link rel="canonical" href={siteConfiguration.url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/public/logo/main-logo.svg" /> {/* replace with your actual image path */}
        <meta property="og:url" content={siteConfiguration.url} />
        <meta name="twitter:card" content="summary_large_image" />
        {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
        {organizationSchema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        )}
      </Head>
      {/* <div className="bg-green-300 p-4 text-center">Phone: +123 456 7890</div> */}
      {/* To make it fixed like normal, just take out sticky AND fixed. Comment out "COMPXYZ" if you don't want the banner showing up*/}
      <div className="flex w-full bg-consPrimary text-white">
        <div className="container h-fit lg:h-10 flex flex-col lg:flex-row items-center flex lg:gap-4 px-20 w-full">
          <div className="flex gap-1">
            <div className="flex lg:hidden">Email us at:</div>
            <div> {siteConfig.email}</div>
          </div>
          <div className="hidden lg:flex h-full bg-white w-[1px]"></div>
          <div className="hidden lg:flex items-center gap-2">
            <div>Mon - Fir 8AM - 5PM</div>
            <div className="h-4 w-[1px] bg-white"></div>
            <div>Sat 9AM - 3PM</div>
            <div className="h-4 w-[1px] bg-white"></div>
            <div>Sun Closed</div>
          </div>
          <div className="h-full bg-white w-[1px]"></div>
          <div className="flex gap-1">
            <div className="flex lg:hidden">Call us at:</div>
            <div> {siteConfig.phone}</div>
          </div>
          <div className="hidden lg:flex ml-auto flex gap-2">
            <Image className="h-8 w-8" src={Facebook} alt="FaceBook logo"></Image>
            <Image className="h-8 w-8" src={Instagram} alt="Instagram logo"></Image>
            <Image className="h-8 w-8" src={LinkedIn} alt="Linkedin logo"></Image>
          </div>
        </div>
      </div>
      <div className="relative top-6 z-50">
        <ConsBlockyWithQuoteNav items={siteConfig.mainNav} href={href}></ConsBlockyWithQuoteNav>
      </div>
      <main className="bg-gray-100">{children}</main>
    </div>
  );
}
