import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import AboutImage from '../../../public/sp/sp-about.png';
import { Link as ScrollLink } from 'react-scroll';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';

export default function SPAbout() {
  return (
    <div className="bg-white py-12 lg:py-24 aboutSection">
      <div className="container flex flex-col lg:flex-row items-center justify-between px-12 gap-28">
        {/* TOOD: Make this with the logo for the desckorators and a photo of decking from Des */}
        <Image className="hidden xl:flex object-center object-cover pointer-events-none" src={AboutImage} alt="Desmond and Sons Construction" />
        <div className="w-full xl:w-1/2 flex  gap-6 flex-col items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-spNeutral capitalize">
            Desmond and Sons: Excellence in Decking and Fencing
          </h2>
          <p className="text-lg">
            At Desmond and Sons Construction, we specialize in providing top-notch decking and fencing contractor services. Our commitment to customer satisfaction has made us the most trusted name in town for these services.
          </p>
          <Accordion type="single" collapsible className="w-full pl-6 lg:pl-0" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="data-[state=open]:text-spPrimary text-2xl text-start">
                Decking Contractor Services
              </AccordionTrigger>
              <AccordionContent className="[&[data-state=open]>svg]:text-spPrimary text-md pr-12">
                Our decking services are designed to meet your unique needs, ensuring durability and beauty for your outdoor space. With precision and care, we bring your vision to life.
              </AccordionContent>
            </AccordionItem>
            <div className="w-[90%] h-[2px] bg-gray-500"></div>
            <AccordionItem value="item-2">
              <AccordionTrigger className="data-[state=open]:text-spPrimary text-2xl text-start">
                Fencing Contractor Services
              </AccordionTrigger>
              <AccordionContent className="[&[data-state=open]>svg]:text-spPrimary text-md pr-12">
                Our expert team provides secure, aesthetically pleasing fencing solutions. Whether for privacy, security, or style, we deliver results that exceed expectations.
              </AccordionContent>
            </AccordionItem>
            <div className="w-[90%] h-[2px] bg-gray-500"></div>
            <AccordionItem value="item-3">
              <AccordionTrigger className="data-[state=open]:text-spPrimary text-2xl text-start">
                Customer Satisfaction & Reliability
              </AccordionTrigger>
              <AccordionContent className="[&[data-state=open]>svg]:text-spPrimary text-md pr-12">
                We pride ourselves on punctuality, exceptional craftsmanship, and a passion for what we do. Our dedication to stand behind every job ensures unparalleled service and satisfaction.
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
