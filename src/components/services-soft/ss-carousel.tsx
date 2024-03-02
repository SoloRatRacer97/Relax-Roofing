import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '../../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel';
import Image, { StaticImageData } from 'next/image';
import HeroImage from '../../../public/ss/slider-placeholder.png';

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const listofPictures: Array<StaticImageData> = [];

  listofPictures.push(HeroImage, HeroImage, HeroImage, HeroImage);

  return (
    <div className='py-12'>
      <div className="flex flex-col items-center justify-center h-full lg:y-16 container w-full gap-8 prtfolioSection">
      <h2 className="text-4xl lg:text-6xl font-bold capitalize text-center lg:w-[60%]">
        check out some of our <span className="text-ssPrimary">past work</span>
      </h2>
      <h3 className="text-xl tracking-wide text-center w-full lg:w-[70%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium repudiandae, autem quam neque fuga
        quidem optio quasi at fugiat ipsa veritatis nobis modi necessitatibus!
      </h3>
      <Carousel
        // plugins={[plugin.current]}
        className="lg:w-[800px] lg:h-[500px] flex flex-col "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className=" border-none">
          {Array.from({ length: listofPictures.length }).map((_, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      <Image
                        className="object-center object-cover pointer-events-none"
                        src={listofPictures[index]}
                        alt=""
                      />
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
    </div>
  );
}
