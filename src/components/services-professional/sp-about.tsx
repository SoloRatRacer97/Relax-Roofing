import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import AboutImage from '../../../public/sp/sp-about.png';
import { Link as ScrollLink } from 'react-scroll';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';

export default function SPAbout() {
  return (
    <div className="bg-white py-12 lg:py-24 aboutSection">
      <div className="container flex flex-col lg:flex-row items-center justify-between px-12 gap-28">
        <Image className="hidden xl:flex object-center object-cover pointer-events-none" src={AboutImage} alt="Home Page Hero Image" />
        <div className="w-full xl:w-1/2 flex  gap-6 flex-col items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-spNeutral capitalize">
           We're the fastest growing Roofing company in the area
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, rerum doloremque. Sequi nesciunt molestiae
            ducimus at perferendis doloribus similique amet quisquam? Iste suscipit nulla reprehenderit!
          </p>
          <Accordion type="single" collapsible className="w-full pl-6 lg:pl-0" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="data-[state=open]:text-spPrimary text-2xl text-start">
                The first business feature here
              </AccordionTrigger>
              <AccordionContent className="[&[data-state=open]>svg]:text-spPrimary text-md pr-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam tempore, magnam rem ea facilis
                cupiditate soluta voluptatum quae fugit et suscipit, harum, quam accusamus in iure? Autem cupiditate
                nisi delectus est ea quidem libero.
              </AccordionContent>
            </AccordionItem>
            <div className="w-[90%] h-[2px] bg-gray-500"></div>
            <AccordionItem value="item-2">
              <AccordionTrigger className="data-[state=open]:text-spPrimary text-2xl text-start">
                The first business feature here
              </AccordionTrigger>
              <AccordionContent className="[&[data-state=open]>svg]:text-spPrimary text-md pr-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam tempore, magnam rem ea facilis
                cupiditate soluta voluptatum quae fugit et suscipit, harum, quam accusamus in iure? Autem cupiditate
                nisi delectus est ea quidem libero.
              </AccordionContent>
            </AccordionItem>
            <div className="w-[90%] h-[2px] bg-gray-500"></div>
            <AccordionItem value="item-3">
            <AccordionTrigger className="data-[state=open]:text-spPrimary text-2xl text-start">
                The first business feature here
              </AccordionTrigger>
              <AccordionContent className="[&[data-state=open]>svg]:text-spPrimary text-md pr-12">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam tempore, magnam rem ea facilis
                cupiditate soluta voluptatum quae fugit et suscipit, harum, quam accusamus in iure? Autem cupiditate
                nisi delectus est ea quidem libero.
              </AccordionContent>
            </AccordionItem>
            <div className="w-[90%] h-[2px] bg-gray-500"></div>
          </Accordion>
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
                variant: 'spSecondary',
                size: 'lg',
              })} text-lg uppercase rounded-sm front-thin`}
            >
              Contact Us Today
            </Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
