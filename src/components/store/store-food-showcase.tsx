import Image from 'next/image';
import FoodOne from '../../../public/store/stFoodOne.png';
import Burger from '../../../public/store/burger.png';

export default function StoreFoodShowcase() {
  return (
    <div className="bg-gray-200 py-12 lg:py-24">
      <div className="container flex flex-col w-full gap-16">
        <div className="w-full flex flex-col lg:flex-row w-full gap-10">
          <div className="flex flex-col gap-6 w-full lg:w-1/2 px-2 lg:px-0 lg:pl-16 drop-shadow-lg">
            <h2 className="text-2xl lg:text-3xl text-stNeutral font-great-vibes capitalize">Your favorite local eatery</h2>
            <h3 className="text-4xl lg:text-6xl capitalize font-bold text-stSecondary">We started a shop for one reason </h3>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, rerum doloremque. Sequi nesciunt molestiae
              ducimus at perferendis doloribus similique amet quisquam? Iste suscipit nulla reprehenderit!
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center relative drop-shadow-lg">
            <Image src={FoodOne} alt="TODO"></Image>
            <div className="absolute bottom-[10%] left-[5%] md:left-[20%] lg:left-[15%] flex flex-col text-white gap-1">
              <div className="h-12 w-12">
                <Image src={Burger} alt="TODO"></Image>
              </div>
              <div className="text-3xl font-medium">Title of the food here</div>
              <div className="w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, iure?</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-full flex flex-col lg:flex-row w-full gap-10">
          <div className="w-full lg:w-1/2 flex justify-center relative drop-shadow-lg">
            <Image src={FoodOne} alt="TODO"></Image>
            <div className="absolute bottom-[10%] left-[5%] md:left-[20%] lg:left-[15%] flex flex-col text-white gap-1">
              <div className="h-12 w-12">
                <Image src={Burger} alt="TODO"></Image>
              </div>
              <div className="text-3xl font-medium">Title of the food here</div>
              <div className="w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, iure?</div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center relative drop-shadow-lg">
            <Image src={FoodOne} alt="TODO"></Image>
            <div className="absolute bottom-[10%] left-[5%] md:left-[20%] lg:left-[15%] flex flex-col text-white gap-1">
              <div className="h-12 w-12">
                <Image src={Burger} alt="TODO"></Image>
              </div>
              <div className="text-3xl font-medium">Title of the food here</div>
              <div className="w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, iure?</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-full flex flex-col lg:flex-row w-full gap-10">
          <div className="w-full lg:w-1/2 flex justify-center relative drop-shadow-lg">
            <Image src={FoodOne} alt="TODO"></Image>
            <div className="absolute bottom-[10%] left-[5%] md:left-[20%] lg:left-[15%] flex flex-col text-white gap-1">
              <div className="h-12 w-12">
                <Image src={Burger} alt="TODO"></Image>
              </div>
              <div className="text-3xl font-medium">Title of the food here</div>
              <div className="w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, iure?</div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center relative drop-shadow-lg">
            <Image src={FoodOne} alt="TODO"></Image>
            <div className="absolute bottom-[10%] left-[5%] md:left-[20%] lg:left-[15%] flex flex-col text-white gap-1">
              <div className="h-12 w-12">
                <Image src={Burger} alt="TODO"></Image>
              </div>
              <div className="text-3xl font-medium">Title of the food here</div>
              <div className="w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, iure?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
