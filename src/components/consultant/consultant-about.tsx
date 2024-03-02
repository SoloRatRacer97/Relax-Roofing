import Image from 'next/image';
import AboutImage from '../../../public/consultant/cons-about.png';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import { Link as ScrollLink } from 'react-scroll';

export default function ConsAbout() {
  return (
    <div className="bg-constBackground py-12 lg:py-24 aboutSection">
      <div className="container flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="hidden lg:flex w-full lg:w-1/2">
          <Image src={AboutImage} alt="TODO"></Image>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start gap-4">
          <h3 className="border border-consSecondary w-fit text-xl lg:text-2xl text-consSecondary px-2">
            Lorem ipsum dolor sit amet.
          </h3>
          <h2 className="text-4xl font-bold text-center md:text-start leading-tight md:text-6xl tracking-wider text-consAccent w-full capitalize drop-shadow-2xl">
            Local Accounting Solutions
          </h2>
          <h2 className="text-lg text-center lg:text-start leading-tight tracking-wider text-black drop-shadow-2xl w-full capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis tenetur illum, iusto, minus
            nostrum similique quod ducimus vitae et ipsam? Quis quod omnis natus fugiat ab voluptatibus asperiores nisi
            et quas aperiam soluta, ut impedit reiciendis nihil doloremque suscipit?
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
              duration={2100}
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
          </div>
        </div>
        <div className="flex lg:hidden w-full lg:w-1/2">
          <Image src={AboutImage} alt="TODO"></Image>
        </div>
      </div>
    </div>
  );
}
