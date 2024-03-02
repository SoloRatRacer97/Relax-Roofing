import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import storeReview from '../../../public/store/review-image.png';
import Stars from '../../../public/store/stars.png';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';

export default function StoreReviewSection() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div className="bg-stBackground py-24 reviewsSection">
      <div className="container flex flex-col items-center lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 relative">
          <Image className="w-full h-[550px] md:h-[400px] lg:h-[550px]" src={storeReview} alt="TODO"></Image>
          <div className="absolute flex flex-col items-center top-[8%] lg:top-[17%] lg:top-[8%] xl:top-[17%] w-full ext-white">
            <Carousel setApi={setApi} className="w-full lg:w-[90%]">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex flex-col gap-6 items-center justify-center p-6">
                        <div className="flex">
                          <Image src={Stars} alt="TODO"></Image>
                        </div>
                        <div className="w-full text-xl text-white text-center">
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio reiciendis
                          eligendi nihil eveniet ab placeat voluptate dolorum eaque omnis nisi voluptas ipsam,
                          voluptatum odio! Impedit, porro aperiam quaerat omnis libero dolorum a obcaecati, sed, quasi
                          accusantium non tenetur vitae."
                        </div>
                        <div className="text-2xl text-white font-medium">first and last name</div>
                        <div className="text-xl text-white">title of person</div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </div>
        </div>
        <div className="w-full lg:w-[45%] flex flex-col items-center text-center gap-6 drop-shadow-lg">
          <h2 className="text-3xl text-stSecondary font-great-vibes capitalize">Your favorite local eatery</h2>
          <h3 className="text-4xl xl:text-6xl capitalize font-bold text-stNeutral">See what our happy customers are saying</h3>
          <p className="text-xl">
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
                variant: 'stDefault',
                size: 'lg',
              })} text-lg uppercase rounded-full front-thin`}
            >
              Contact Us Today
            </Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
