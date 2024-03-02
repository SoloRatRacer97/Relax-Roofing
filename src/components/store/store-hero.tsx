// Speed notes on images

// Couldn't get tailwind background image to work, sticking with Next Image
// Fastest combo found is to use the 1920 X 1080 image, convert to WebP, and use the next/image component with priority and layout fill
// Next Image is the fastest way to load images, but it's not the easiest to work with

// Also note that Vercel's dev domain does not serve content nearly as fast as a custom domain, so when testing don't stress too much about load times that may appear slow

import HeroImage from '../../../public/store/stHero.png';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';

export default function StoreHero() {
  const router = useRouter();
  const href = router.pathname;

  return (
    <div className="relative mt-4 lg:mt-8 z-0 h-[450px] lg:h-[600px]">
      <div className="radialContainer bg-black/10"></div>
      <Image
        priority={true}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        src={HeroImage}
        alt="Home Page Hero Image"
      />
      <div className="relative z-10 py-40 md:py-12 container flex flex-col items-start justify-center gap-10">
        <div className="w-full flex mt-10 flex-col text-white text-center lg:text-start items-center lg:items-start justify-center gap-2l g:gap-4 drop-shadow-2xl">
          <h2 className="text-3xl font-great-vibes w-full capitalize -mb-6 lg:mb-0">your favorite local eatery </h2>
          <div>
            <h1 className="text-4xl text-cws-dark mt-8 md:mt-0 font-extrabold text-cws-dark text-center lg:text-start  w-full lg:w-[80%] xl:w-[60%] leading-tight md:text-5xl lg:text-[85px] tracking-wider text-white drop-shadow-2xl">
              2nd Street Bakery & Cafe
            </h1>
          </div>
          <h2 className='w-full lg:w-1/2 text-lg lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio amet sapiente atque hic ex cupiditate
            voluptatem officiis vitae officia maiores, nihil blanditiis illo facilis.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full drop-shadow-2xl">
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
                variant: 'stAccent',
                size: 'lg',
              })} text-xl w-48 rounded-full uppercase front-thin`}
            >
              Our Menu
            </Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
