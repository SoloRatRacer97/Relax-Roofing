import * as React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../../components/ui/carousel';

export default function ConsReviewSection() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div className="bg-consPrimary lg:py-24 py-12 reviewsSection">
      <div className="container flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:items-start items-center">
          <h3 className="border border-white text-xl lg:text-2xl text-white w-fit px-2">
            Lorem ipsum dolor sit amet.
          </h3>

          <h2 className="text-4xl font-bold text-center md:text-start leading-tight md:text-6xl text-white tracking-wider text-consAccent w-full capitalize drop-shadow-2xl">
            Local Accounting Solutions
          </h2>
          <h2 className="hidden md:flex text-xl text-white text-start leading-tight tracking-wider text-white drop-shadow-2xl w-full capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga qui officia neque explicabo fugit tempore
            nobis exercitationem tempora veniam!
          </h2>
        </div>
        <div className="w-full lg:w-1/2 lg:px-6">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col rounded-md border-gray-200 gap-6 items-center justify-center p-6">
                      <div className="bg-white rounded-sm p-4">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab inventore cum fugit doloribus
                        distinctio voluptate voluptatem quam error aut officiis blanditiis optio libero, vel omnis!Lorem
                        ipsum dolor, sit amet consectetur adipisicing elit. Ab inventore cum fugit doloribus distinctio
                        voluptate voluptatem quam error aut officiis blanditiis optio libero, vel omnis!"
                      </div>
                      <div className="flex ml-auto flex-col text-white">
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
        </div>
      </div>
    </div>
  );
}
