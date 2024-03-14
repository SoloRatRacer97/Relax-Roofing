import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import AboutImage from '../../../public/sp/sp-about.png';
import { Link as ScrollLink } from 'react-scroll';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';

export default function SPAbout() {
  return (
    <div className="bg-white py-12 lg:py-24 aboutSection">
      <div className="container flex flex-col lg:flex-row items-center justify-between px-12 gap-28">
        <Image
          className="hidden xl:flex object-center object-cover pointer-events-none"
          src={AboutImage}
          alt="Desmond and Sons Construction"
        />
        <div className="w-full xl:w-1/2 flex  gap-6 flex-col items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-relaxRoofingNeutral capitalize">
            Relax Roofing: Expertise in Residential Roofing
          </h2>
          <p className="text-lg">
            At Relax Roofing, we are dedicated to delivering exceptional residential roofing services. Our commitment to
            quality and customer satisfaction makes us a leading choice for roofing solutions.
          </p>
          <Accordion type="single" collapsible className="w-full pl-6 lg:pl-0" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="data-[state=open]:text-relaxRoofingPrimary text-2xl text-start">
                Residential Roofing Services
              </AccordionTrigger>
              <AccordionContent className="[&[data-state=open]>svg]:text-relaxRoofingPrimary text-md pr-12">
                Our roofing services cater to all residential needs, from installation to repairs. We use high-quality
                materials and provide craftsmanship that guarantees durability and elegance for your home.
              </AccordionContent>
            </AccordionItem>
            <div className="w-[90%] h-[2px] bg-gray-500"></div>
            <AccordionItem value="item-2">
              <AccordionTrigger className="data-[state=open]:text-relaxRoofingPrimary text-2xl text-start">
                Roof Maintenance and Repairs
              </AccordionTrigger>
              <AccordionContent className="[&[data-state=open]>svg]:text-relaxRoofingPrimary text-md pr-12">
                We offer comprehensive maintenance and repair services to ensure your roof remains in top condition,
                protecting your home and enhancing its value.
              </AccordionContent>
            </AccordionItem>
            <div className="w-[90%] h-[2px] bg-gray-500"></div>
            <AccordionItem value="item-3">
              <AccordionTrigger className="data-[state=open]:text-relaxRoofingPrimary text-2xl text-start">
                Customer Satisfaction & Professionalism
              </AccordionTrigger>
              <AccordionContent className="[&[data-state=open]>svg]:text-relaxRoofingPrimary text-md pr-12">
                Our team values professionalism, timeliness, and precise workmanship. We are committed to exceeding your
                expectations and stand behind every roofing project we undertake.
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
                variant: 'spDefault',
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
