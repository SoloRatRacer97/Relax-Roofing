// Speed notes on images

// Couldn't get tailwind background image to work, sticking with Next Image
// Fastest combo found is to use the 1920 X 1080 image, convert to WebP, and use the next/image component with priority and layout fill
// Next Image is the fastest way to load images, but it's not the easiest to work with

// Also note that Vercel's dev domain does not serve content nearly as fast as a custom domain, so when testing don't stress too much about load times that may appear slow

import { siteConfig } from '@/config/site';
import HeroImage from '../../../public/sp/sp-hero.png';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';

export default function SPHero() {
  const router = useRouter();
  const href = router.pathname;

  return (
    <div className="relative mt-4 lg:mt-8 z-0 h-[700px]">
      <div className="radialContainer"></div>
      <Image
        priority={true}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        src={HeroImage}
        alt="Home Page Hero Image"
      />
      <div className="relative z-10 py-40 lg:py-8 container flex flex-col items-start justify-center gap-4">
        <div className="flex mt-10 lg:mt-28 flex-col text-white items-start justify-center gap-2">
          <div>
            <h1 className="text-4xl text-cws-dark mt-8 md:mt-0 font-medium text-cws-dark text-center lg:text-start  w-full lg:w-[60%] capitalize leading-tight md:text-5xl lg:text-[75px] tracking-wider text-white drop-shadow-2xl">
              Best Decking Contractor in Tri Cities
            </h1>
          </div>
        </div>
        <div className="flex font-medium flex-col text-center">
          <h2 className="flex text-md w-full lg:w-[50%] text-center lg:text-start font-medium items-center text-xl md:text-xl tracking-wider text-white">
            Desmond and Sons Construction: Premier Decking and Fencing Contractor in Tri Cities, Committed to Quality
            and Customer Satisfaction.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full">
          <ScrollLink
            activeClass="active"
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-90}
            duration={1400}
            className="hover:underline cursor-pointer font-bold text-cws-dark xl:block"
          >
            <Button
              className={`${buttonVariants({
                variant: 'spSecondary',
                size: 'xlg',
              })} text-xl w-56 rounded-sm uppercase front-thin`}
            >
              Get a quote
            </Button>
          </ScrollLink>
          <div className="text-white text-2xl underline uppercase">Call us {siteConfig.phone}</div>
        </div>
      </div>
    </div>
  );
}
