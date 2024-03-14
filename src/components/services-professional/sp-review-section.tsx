import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image, { StaticImageData } from 'next/image';
import HeroImage from '../../../public/sp/review.png';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../ui/carousel';
import { Link as ScrollLink } from 'react-scroll';
import { Button, buttonVariants } from '../ui/button';

// Define a type for the review
type Review = {
  testimonial: string;
  name: string;
  title: string;
};

// Sample array of reviews
const reviews: Review[] = [
  {
    testimonial:
      'My personal experience with Desmond & Sons is that they are honest and keep their word. If you are looking for a company that you can depend on and have no doubt that they will be putting 100% into all their work, look no further. Desmond & Sons will listen to your needs and desires and you will be very happy with the end result.',
    name: 'Debbie Heurion',
    title: 'Residential Customer',
  },
  {
    testimonial:
      'Came when he said he would be here, discussed options for my project and made suggestions I didn’t even think of.  Very professional and he reminds me of my dad’s detail and perfectionism with building and woodworking.',
    name: 'Patty Dailey',
    title: 'Residential Customer',
  },
  {
    testimonial:
      'Desmond with Desmond and Sons Construction is a fantastic new business owner in the area. I recently met with Desmond to discuss his online profiles, and he showed up on time, was happy to see me, and was excited to learn more about how Google interacts with businesses online. He was able to tell me a bit about his business, and it`s obvious that he is extremely passionate about his work. He clearly stands behind his work and crew, and only wants the best for his clients. Desmond and Sons is definitely one of the greatest rising stars in the area for general contractor services, and I can wholeheartedly recommend that you give him a call if you are in need of any contractor work in the area. Can’t wait to do more work with you in the future, Desmond!',
    name: 'Todd Anderson',
    title: 'Business Owner',
  },
  {
    testimonial:
      'Des With Desmond & Sons was so easy to work with and always followed up when he said he would. Excellent craftsmanship',
    name: 'Tana Heurion',
    title: 'Residential Customer',
  },
  {
    testimonial:
      'If your looking for top quality work and someone who fallows through with every task look no further.',
    name: 'Boost and octane',
    title: 'Residential Customer',
  },
  // Add more reviews here...
];

export default function SPReviewSection() {
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
      <div className="container flex flex-col gap-40 px-20 lg:flex-row items-start justify-center">
        <div className="w-full xl:w-1/2 flex flex-col gap-4">
          <div className="text-5xl font-bold capitalize text-rrNeutral">Hear from Our Satisfied Clients</div>
          <div className="text-xl font-thin">
            Find out why Relax Roofing is the top choice for roofing services in Mississippi. Our happy clients attest
            to the outstanding quality, reliability, and excellent customer service we deliver. Explore their
            testimonials to see the dedication and professionalism we bring to every roofing project.
          </div>
          <div className="">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex flex-col border rounded-md border-gray-200 gap-6 items-center justify-center p-6">
                        <div className="bg-spSecondary/20 p-4">{review.testimonial}</div>
                        <div className="flex ml-auto flex-col">
                          <div className="text-xl font-bold">{review.name}</div>
                          <div className="">{review.title}</div>
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
        <div className="hidden xl:flex w-full lg:w-1/2 gap-8 flex-col lg:mt-12">
          <Image className="pointer-events-none" src={HeroImage} alt="Home Page Hero Image" />
          <ScrollLink
            activeClass="active"
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-90}
            duration={1400}
            className="hidden hover:underline cursor-pointer font-bold text-cws-dark self-center xl:block"
          >
            <Button
              className={`${buttonVariants({
                variant: 'spDefault',
                size: 'lg',
              })} w-48 text-lg h-10 rounded-sm`}
            >
              Contact Us Today
            </Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
