// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import AllOutFooterSection from '../footer/info-heavy';
import { InfoWithSticky } from '../navigation/info-with-sticky-nav';
import { siteConfig } from '@/config/site';
import { useRouter } from 'next/router';
import { StoreInfoWithSticky } from './store-navigation';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  siteConfiguration?: {
    url: string;
  };
};

export default function StoreLayoutRegular({
  children,
  title = 'Default title of page', // default value if title prop isn't provided
  description = 'Default description of the page', // default value if description prop isn't provided
  siteConfiguration = {
    url: 'default url',
  }
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
      <div className="sticky fixed top-0 h-20 z-50">
        <StoreInfoWithSticky items={siteConfig.mainNav} href={href}></StoreInfoWithSticky>
      </div>
      <main className="bg-gray-100">{children}</main>

    </div>
  );
}
