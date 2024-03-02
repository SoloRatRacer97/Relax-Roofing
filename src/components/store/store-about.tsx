import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import AboutImage from '../../../public/store/foot-highlight.png';
import { Link as ScrollLink } from 'react-scroll';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Check } from 'lucide-react';

export default function StoreAbout() {
  return (
    <div className="bg-stBackground/50 py-12 lg:py-24 aboutSection">
      <div className="container flex flex-col lg:flex-row items-center justify-between px-12 gap-28">
        <div className="w-full lg:w-1/2 flex  gap-4 lg:gap-6 flex-col items-start drop-shadow-lg">
          <h2 className="text-2xl lg:text-3xl text-stNeutral font-great-vibes capitalize">Your favorite local eatery</h2>
          <h3 className="text-4xl lg:text-6xl capitalize font-bold text-stSecondary">We started a shop for one reason </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, rerum doloremque. Sequi nesciunt molestiae
            ducimus at perferendis doloribus similique amet quisquam? Iste suscipit nulla reprehenderit!
          </p>
          <div className="flex w-full items-center gap-4">
            <div className="w-10 h-10">
              <Check size={40} className="text-stAccent"></Check>
            </div>
            <div className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, necessitatibus.
            </div>
          </div>
          <div className="flex w-full items-center gap-4">
            <div className="w-10 h-10">
              <Check size={40} className="text-stAccent"></Check>
            </div>
            <div className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, necessitatibus.
            </div>
          </div>
          <ScrollLink
            activeClass="active"
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-90}
            duration={1400}
            className="hidden hover:underline cursor-pointer font-bold text-cws-dark xl:block"
          >
            <Button
              className={`${buttonVariants({
                variant: 'stDefault',
                size: 'lg',
              })} text-lg uppercase rounded-full front-thin`}
            >
              Contact Us Today
            </Button>
          </ScrollLink>
        </div>
        <Image className="object-center object-cover pointer-events-none drop-shadow-2xl" src={AboutImage} alt="Home Page Hero Image" />
      </div>
    </div>
  );
}
