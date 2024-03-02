// Speed notes on images

// Couldn't get tailwind background image to work, sticking with Next Image
// Fastest combo found is to use the 1920 X 1080 image, convert to WebP, and use the next/image component with priority and layout fill
// Next Image is the fastest way to load images, but it's not the easiest to work with

// Also note that Vercel's dev domain does not serve content nearly as fast as a custom domain, so when testing don't stress too much about load times that may appear slow

import HeroImage from '../../../public/ss/sshero.png';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';

export default function SSHero() {
  const router = useRouter();
  const href = router.pathname;

  return (
    <div className="relative mt-4 lg:mt-8 z-0 h-[600px]">
      <div className="radialContainer"></div>
      <Image
        priority={true}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        src={HeroImage}
        alt="Home Page Hero Image"
      />
      <div className="relative z-10 py-40 lg:py-24 container flex flex-col items-center justify-center">
        <div className="flex mt-20 flex-col text-white items-center justify-center gap-2">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="h-2 w-8 lg:w-16 bg-gray-200"></div>
            <h2 className="text-3xl w-full text-center font-medium capitalize text-gray-200">
              your local power washing Experts
            </h2>
            <div className="h-2 w-8 lg: w-16 bg-gray-200"></div>
          </div>
          <div>
            <h1 className="text-4xl text-cws-dark mt-8 md:mt-0 font-extrabold text-cws-dark text-center uppercase leading-tight md:text-5xl lg:text-[65px] tracking-wider text-white drop-shadow-2xl">
              tri cities power washing
            </h1>
          </div>
          {/* <div className="flex items-center lg:gap-4">
                      <div className="h-2 w-8 lg:w-16 bg-gray-200"></div>
            <h2 className="text-3xl w-[60%] text-center font-medium capitalize text-gray-200">your local power washing Experts</h2>
            <div className="h-2 w-8 lg: w-16 bg-gray-200"></div>
          </div>
          */}
        </div>
        <div className="flex font-medium flex-col text-center mb-10">
          <h3 className="flex text-md text-center items-center tracking-wide leading-tight text-xl md:text-xl font-bold text-cws-dark tracking-wide text-white mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ducimus.
          </h3>
        </div>
        <div className="md:flex text-center justify-around md:flex-row md:text-start grid-cols-2">
          <ScrollLink
            activeClass="active"
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-90}
            duration={1400}
            className="hidden hover:underline cursor-pointer font-bold text-cws-dark self-center xl:block"
          >
            <Button
              className={`${buttonVariants({
                variant: 'ssNeutral',
                size: 'xlg',
              })} text-xl uppercase front-thin`}
            >
              Get a quote
            </Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
