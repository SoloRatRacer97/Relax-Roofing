// Structure of the home page. Never pick more than 8/9
// Home/hero
// About
// Services
// Updates/coming soon/changes
// Fixed image/large image background with a customer promise
// Contact Form
// Newsletter Sign Up
// Case Studies
// Location Info
// Blog or Insights
// Q&A
// Customer Reviews

import { useRouter } from 'next/router';
import Layout from '../components/layout-regular';
import SimpleHero from '../components/home-hero/simple';

export default function HomePage() {
  const router = useRouter();

  return (
    <Layout title="Single Page Sign Up" description="This is the description of the page :D">
      <SimpleHero></SimpleHero>
      {/* <FixedImageCallToAction></FixedImageCallToAction>
      <HomeContactForm></HomeContactForm>
      <div className="h-[2000px]"></div> */}
    </Layout>
  );
}
