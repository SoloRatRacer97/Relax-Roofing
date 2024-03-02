import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import Gears from '../../../public/consultant/cons-gears.png';
import Stairs from '../../../public/consultant/cons-stairs.png';
import Group from '../../../public/consultant/cons-people.png';
import Hands from '../../../public/consultant/cons-hands.png';
import { Link as ScrollLink } from 'react-scroll';

export default function ConsServices() {
  return (
    <div className="bg-consNeutral servicesSection">
      <div className="container flex flex-col py-12 gap-4 lg:gap-12">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 items-center text-center lg:text-start lg:items-end pt-12 lg:pt-0">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4">
            <h3 className="border border-consPrimary text-xl lg:text-2xl text-consPrimary px-2">
              Lorem ipsum dolor sit amet.
            </h3>

            <h2 className="text-4xl font-bold text-center md:text-start leading-tight md:text-6xl tracking-wider text-consAccent w-full capitalize drop-shadow-2xl">
              Local Accounting Solutions
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 items-center lg:items-start">
            <h2 className="flex text-xl text-black leading-tight tracking-wider drop-shadow-2xl w-full capitalize">
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
                    variant: 'consSecondary',
                    size: 'xsm',
                  })} text-black h-12 px-6 text-white rounded-sm text-xl shadow-2xl`}
                >
                  Visit Us Today
                </Button>
              </ScrollLink>
            </div>
            <div className="drop-shadow-xl">
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
                  Visit Us Today
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="w-full py-12 flex flex-wrap items-center gap-12 px-10 justify-center">
          <div className="w-full lg:w-[22%] h-96 gap-2 bg-white lg:-mt-12 flex flex-col p-6 border-2 drop-shadow-2xl border-consAccent rounded-md">
            <div className="bg-gray-200 h-16 w-16 flex items-center justify-center">
              <Image src={Gears} alt="TODO"></Image>
            </div>
            <div className="text-2xl font-bold text-consAccent">Title goes here</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae tempora deserunt provident
              molestias, beatae enim tempore ducimus atque praesentium veniam.
            </div>
          </div>
          <div className="w-full lg:w-[22%] h-96 gap-2 bg-white lg:mt-12 flex flex-col p-6 border-2 drop-shadow-2xl border-consAccent rounded-md">
            <div className="bg-gray-200 h-16 w-16 flex items-center justify-center">
              <Image src={Stairs} alt="TODO"></Image>
            </div>
            <div className="text-2xl font-bold text-consAccent">Title goes here</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae tempora deserunt provident
              molestias, beatae enim tempore ducimus atque praesentium veniam.
            </div>
          </div>
          <div className="w-full lg:w-[22%] h-96 gap-2 bg-white lg:-mt-12 flex flex-col p-6 border-2 drop-shadow-2xl border-consAccent rounded-md">
            <div className="bg-gray-200 h-16 w-16 flex items-center justify-center">
              <Image src={Group} alt="TODO"></Image>
            </div>
            <div className="text-2xl font-bold text-consAccent">Title goes here</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae tempora deserunt provident
              molestias, beatae enim tempore ducimus atque praesentium veniam.
            </div>
          </div>
          <div className="w-full lg:w-[22%] h-96 gap-2 bg-white lg:mt-12 flex flex-col p-6 border-2 drop-shadow-2xl border-consAccent rounded-md">
            <div className="bg-gray-200 h-16 w-16 flex items-center justify-center">
              <Image src={Hands} alt="TODO"></Image>
            </div>
            <div className="text-2xl font-bold text-consAccent">Title goes here</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae tempora deserunt provident
              molestias, beatae enim tempore ducimus atque praesentium veniam.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
