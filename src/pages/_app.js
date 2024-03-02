import NextApp from 'next/app';

import { SiteContext, useSiteContext } from '../hooks/use-site';
import { SearchProvider } from '../hooks/use-search';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react'
import { getSiteMetadata } from '../lib/site';
import { getRecentPosts } from '../lib/posts';
import { getCategories } from '../lib/categories';
import { getAllMenus } from '../lib/menus';
import { Inter as FontSans } from '@next/font/google';
import { Great_Vibes as FontGreatVibes } from '@next/font/google';
import '../styles/globals.css';
import dynamic from "next/dynamic";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontGreatVibes = FontGreatVibes({
  weight: '400',
  subsets: ['latin'],  // Add other subsets if needed
  variable: '--font-great-vibes',  // Use a different variable name to avoid conflicts
  display: 'swap',
});

const LazyRecaptcha3 = dynamic(() => import("../components/lazyRecaptcha3"));

function App({ Component, pageProps = {}, metadata, recentPosts, categories, menus }) {
  const site = useSiteContext({
    metadata,
    recentPosts,
    categories,
    menus,
  });

  const isClient = typeof window !== 'undefined';
  const [lazyInfoNeeded, setLazyInfoNeeded] = useState(false);

  const handleUserInteraction = () => {
    // this function can be called when a user interaction that needs reCAPTCHA happens
    setLazyInfoNeeded(true);
  };

  useEffect(() => {
    if(isClient) {
      // simulate a delay before loading ReCAPTCHA to defer it as long as possible
      setTimeout(handleUserInteraction, 3000);  // adjust the delay as needed
    }
  }, [isClient]);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <SiteContext.Provider value={site}>
        <style jsx global>{`
          :root {
            --font-sans: ${fontSans.style.fontFamily};
          }
        `}</style>
        <style jsx global>{`
          :root {
            --font-great-vibes: ${fontGreatVibes.style.fontFamily};
          }
        `}</style>
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
        {lazyInfoNeeded && <LazyRecaptcha3 />}
      </SiteContext.Provider>
    </ThemeProvider>
  );
}

App.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const { posts: recentPosts } = await getRecentPosts({
    count: 5,
    queryIncludes: 'index',
  });

  const { categories } = await getCategories({
    count: 5,
  });

  const { menus = [] } = await getAllMenus();

  return {
    ...appProps,
    metadata: await getSiteMetadata(),
    recentPosts,
    categories,
    menus,
  };
};

export default App;
