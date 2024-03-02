import Image from 'next/image';
import FoodHighlight from '../../../public/store/stHighlight.png';
import { Link as ScrollLink } from 'react-scroll';
import { Button, buttonVariants } from '../ui/button';

export default function StoreServices() {
  return (
    <div className="py-12 prtfolioSection">
      <div className="container flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-1/2 flex flex-col items-center gap-6 drop-shadow-lg">
          <div>
            <Image src={FoodHighlight} alt="TODO"></Image>
          </div>
          <h2 className="text-3xl lg:text-5xl text-stSecondary font-great-vibes capitalize">your favorite local eatery </h2>
          <div className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi totam dolore? Praesentium quis error rem!
            Recusandae quasi nulla harum?
          </div>
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
        <div className="w-full xl:w-1/2 flex flex-col items-center gap-10">
          <div className="w-[80%] p-2 lg:p-8 bg-stBackground h-fit lg:h-40 items-center border border-black flex flex-col md:flex-row gap-8 shadow-lg">
            <div className="w-20 h-20 bg-black"></div>
            <div className="w-[80%] flex flex-col">
              <h3 className="text-xl font-medium">$45 - First Menu Item Here</h3>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sed provident odit nisi pariatur
                similique assumenda consequatur, beatae unde tempore.
              </div>
            </div>
          </div>
          <div className="w-[80%] p-2 lg:p-8 bg-stBackground h-fit lg:h-40 items-center border border-black flex flex-col md:flex-row gap-8 shadow-lg">
          <div className="w-20 h-20 bg-black"></div>
            <div className="w-[80%] flex flex-col">
              <h3 className="text-xl font-medium">$45 - First Menu Item Here</h3>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sed provident odit nisi pariatur
                similique assumenda consequatur, beatae unde tempore.
              </div>
            </div>
          </div>
          <div className="w-[80%] p-2 lg:p-8 bg-stBackground h-fit lg:h-40 items-center border border-black flex flex-col md:flex-row gap-8 shadow-lg">
          <div className="w-20 h-20 bg-black"></div>
            <div className="w-[80%] flex flex-col">
              <h3 className="text-xl font-medium">$45 - First Menu Item Here</h3>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sed provident odit nisi pariatur
                similique assumenda consequatur, beatae unde tempore.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
