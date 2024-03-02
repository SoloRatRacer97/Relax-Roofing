import Image, { StaticImageData } from 'next/image';
import { Button, buttonVariants } from '@/src/components/ui/button';
import Link from 'next/link';
import { Url } from 'url';
import { Link as ScrollLink } from 'react-scroll';

interface CardType {
  title: String;
  image: StaticImageData;
  text: String;
  buttonTitle: String;
  // buttonUrl: Url;
}

const CardZoom = ({ info, aspectRatio }: { info: CardType; aspectRatio?: string }) => {
  const { image, buttonTitle, text, title } = info;
  return (
    <div
      className="relative grid grid-rows-2 group overflow-hidden max-h-[400px] h-96 w-full"
      //   style={{ aspectRatio: `${aspectRatio ? aspectRatio : '6/12'}` }}
    >
      <div></div>
      <Image
        src={image}
        alt="Bucket logo"
        fill={true}
        className="z-0 pointer-events-none object-center object-cover group-hover:scale-110 ease-in-out duration-700"
      />
      <div className="p-6 text-white flex text-left flex-col z-10 justify-end relative">
        <div>
          <h4 className="font-semibold text-3xl">{title}</h4>
          <p className="my-7 md:text-lg">{text}</p>
        </div>
        <div className="flex md:-mb-20 group-hover:mb-0 ease-in-out duration-700">
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
  );
};
export default CardZoom;
