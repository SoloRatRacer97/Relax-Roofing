import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import Image, { StaticImageData } from 'next/image';
import HeroImage from '../../../public/ss/sshighlight.png';
import { Card, CardContent } from '../../components/ui/card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,

  type CarouselApi,
} from '../../components/ui/carousel';

export default function SSReviewSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const listofPictures: Array<StaticImageData> = [];

  listofPictures.push(HeroImage, HeroImage, HeroImage, HeroImage);

  return (
    <div className="bg-gray-200 py-12 lg:py-24 reviewsSection">
      <div className="container flex flex-col gap-20 lg;gap-40 px-20 lg:flex-row items-center justify-center">
        <div className="hidden lg:flex w-full lg:w-1/2 bg-black">
          <Image className="pointer-events-none" src={HeroImage} alt="Home Page Hero Image" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="text-4xl lg:text-5xl font-bold capitalize">
            Hear from our happy <span className="text-ssPrimary">Customers</span>
          </div>
          <div className=''>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex flex-col border rounded-md border-gray-200 gap-6 items-center justify-center p-6">
                        <div>
                          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab inventore cum fugit doloribus
                          distinctio voluptate voluptatem quam error aut officiis blanditiis optio libero, vel
                          omnis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab inventore cum fugit
                          doloribus distinctio voluptate voluptatem quam error aut officiis blanditiis optio libero, vel
                          omnis!"
                        </div>
                        <div className="flex ml-auto flex-col">
                          <div className="text-xl font-bold">first and last name</div>
                          <div className="">title of person</div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
            {/* <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
