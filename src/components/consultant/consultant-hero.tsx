import HeroImage from '../../../public/consultant/cons-hero.png';
import heroCheck from '../../../public/icons/facebook.svg';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { siteConfig } from '@/config/site';
import { Link as ScrollLink } from 'react-scroll';

export default function ConsHero() {
  const router = useRouter();
  const href = router.pathname;

  return (
    <div className="h-[600px] md:h-[780px] sm:h-screen/50 xl:h-[800px] relative lg:-mt-24 ">
      <div className="w-full pt-10">
        <Image
          src={HeroImage}
          alt="Background image of Sir Sud's Laundromat showing the old dryers before it was renovated"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          className=""
        />
        <div className="relative container px-24 flex w-full">
          <div className="py-2 lg:py-40 flex items-center justify-start gap-24">
            <div className="flex w-fit xl:w-[700px] flex-col items-center lg:items-start justify-center gap-4">
              <h3 className="border border-white text-xl lg:text-2xl text-white px-2">Lorem ipsum dolor sit amet.</h3>
              <h1 className="text-4xl font-bold text-center md:text-start leading-tight md:text-7xl tracking-wider text-white w-full capitalize drop-shadow-2xl">
                Local Accounting Solutions
              </h1>
              <h2 className="flex text-lg font-light text-center lg:text-start leading-tight tracking-wider text-white drop-shadow-2xl w-full lg:w-[80%] capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga qui officia neque explicabo fugit
                tempore nobis exercitationem tempora veniam!
              </h2>
              <div className="drop-shadow-xl">
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
                      variant: 'consDefault',
                      size: 'xsm',
                    })} text-black h-12 px-6 text-white rounded-sm text-xl shadow-2xl`}
                  >
                    Visit Us Today
                  </Button>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="contactSection"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={2100}
                  className="flex lg:hidden z-20 hover:underline cursor-pointer font-bold text-cws-dark self-center"
                >
                  <Button
                    className={`${buttonVariants({
                      variant: 'consDefault',
                      size: 'xsm',
                    })} text-black h-12 px-6 text-white rounded-sm text-xl shadow-2xl`}
                  >
                    Visit Us Today
                  </Button>
                </ScrollLink>
              </div>
              <div className="w-[70%] bg-white h-1"></div>
              <div className="flex flex-col lg:flex-row w-full lg:gap-12 lg:items-start items-center justify-center lg:justify-start text-center lg:text-start">
                <div className="flex lg:flex-col items-center lg:items-start justify-center w-full lg:w-fit gap-1">
                  <div className="text-xl lg:text-3xl lg:font-light text-white capitalize">Call us today:</div>
                  <div className="text-lg font-thin lg:font-normal text-white">{siteConfig.phone}</div>
                </div>
                <div className="flex flex-col w-[60%]">
                  {/* <div className='text-3xl font-light text-white capitalize'>Visit us at</div> */}
                  <div className="text-lg lg:text-2xl lg:font-light text-white w-full lg:w-[70%]">{siteConfig.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
