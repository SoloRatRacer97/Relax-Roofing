import HeroImage from '../../../public/ss/ssfixed.png';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';

export default function SSFixedImageCallToAction() {
  const router = useRouter();
  const href = router.pathname;

  return (
    <div className="relative h-fit">
      <div
        className="flex flex-col justify-center items-center text-center text-5xl gap-6 text-black "
        style={{
          position: 'relative',
          height: '60vh',
          width: '100%',
          clipPath: 'inset(0 0 0 0)',
        }}
      >
        <div className="z-20 text-white tracking-wide lg:text-7xl text-5xl font-bold">Contact Us today</div>
        <div className="z-20 text-xl text-white capitalize tracking-widest font-light">
          and find out why we are the areas best power washing provider
        </div>
        <ScrollLink
          activeClass="active"
          to="contactSection"
          spy={true}
          smooth={true}
          offset={-90}
          duration={900}
          className="z-20 hover:underline cursor-pointer font-bold text-cws-dark self-center xl:block"
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
        <div
          style={{
            position: 'fixed',
            height: '100%',
            width: '100%',
            left: '0',
            top: '0',
          }}
        >
          <Image src={HeroImage} layout="fill" objectFit="cover" sizes="50vw" alt="test!" />
        </div>
      </div>
    </div>
  );
}
