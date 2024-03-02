import HeroImage from '../../../public/consultant/cons-hero.png';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';

export default function ConsFixedImageCallToAction() {
  const router = useRouter();
  const href = router.pathname;

  return (
    <div className="relative h-fit">
      <div
        className="flex flex-col justify-center items-center text-center text-5xl gap-6 text-black "
        style={{
          position: 'relative',
          height: '40vh',
          width: '100%',
          clipPath: 'inset(0 0 0 0)',
        }}
      >
        <div className="z-20 text-white tracking-wide lg:text-7xl text-3xl font-bold">Contact Us today</div>
        <div className="z-20 text-lg text-white capitalize tracking-widest font-light">
          and find out why we are the areas best power washing provider
        </div>
        <ScrollLink
          activeClass="active"
          to="contactSection"
          spy={true}
          smooth={true}
          offset={50}
          duration={2100}
          className="hidden lg:flex z-20 hover:underline cursor-pointer font-bold text-cws-dark self-center"
        >
          <Button
            className={`${buttonVariants({
              variant: 'consSecondary',
              size: 'xsm',
            })} text-black h-12 px-6 text-white rounded-sm text-xl shadow-2xl`}
          >
            Get in Touch
          </Button>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="contactSection"
          spy={true}
          smooth={true}
          offset={100}
          duration={800}
          className="flex lg:hidden z-20 hover:underline cursor-pointer font-bold text-cws-dark self-center"
        >
          <Button
            className={`${buttonVariants({
              variant: 'consSecondary',
              size: 'xsm',
            })} text-black h-12 px-6 text-white rounded-sm text-xl shadow-2xl`}
          >
            Get in Touch
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
