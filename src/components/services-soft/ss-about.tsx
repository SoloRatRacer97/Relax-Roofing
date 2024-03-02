import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import AboutImage from '../../../public/ss/sshighlight.png';
import { Link as ScrollLink } from 'react-scroll';

export default function SSAbout() {
  return (
    <div className="bg-gray-200 py-12 lg:py-24 aboutSection">
      <div className="container flex flex-col lg:flex-row items-center justify-between px-12 gap-10">
        <div className="w-full lg:w-1/2 flex  gap-6 flex-col items-start">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Your Premier Power Washing <span className="text-ssPrimary">Company</span>
          </h2>
          <h3 className="text-xl font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, hic!
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, rerum doloremque. Sequi nesciunt molestiae
            ducimus at perferendis doloribus similique amet quisquam? Iste suscipit nulla reprehenderit!
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, rerum doloremque. Sequi nesciunt molestiae
            ducimus at perferendis doloribus similique amet quisquam? Iste suscipit nulla reprehenderit!
          </p>
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
                variant: 'ssNeutral',
                size: 'lg',
              })} text-lg uppercase front-thin`}
            >
              Contact Us Today
            </Button>
          </ScrollLink>
        </div>
        <Image className="object-center object-cover pointer-events-none" src={AboutImage} alt="Home Page Hero Image" />
      </div>
    </div>
  );
}
