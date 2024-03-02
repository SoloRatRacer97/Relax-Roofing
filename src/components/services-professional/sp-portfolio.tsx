import Image from 'next/image';
import PortOne from '../../../public/sp/port-1.png';
import PortTwo from '../../../public/sp/port-2.png';
import PortThree from '../../../public/sp/port-3.png';
import PortFour from '../../../public/sp/port-4.png';
import PortFive from '../../../public/sp/port-5.png';
import PortSix from '../../../public/sp/port-6.png';

export default function SPPortfolio() {
  return (
    <div className="bg-white prtfolioSection">
      <div className="container flex flex-col text-start items-center py-24 gap-6">
        <div className="text-4xl lg:text-6xl font-bold text-spNeutral self-start pl-8 pt-10 lg:pt-0">Title will go here</div>
        <p className="w-full lg:w-[70%] text-xl self-start pl-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit magni, delectus ullam laudantium ad
          exercitationem sit reprehenderit similique adipisci aliquam voluptatem est, molestias corrupti.
        </p>
        <div className="w-full flex flex-wrap gap-10 justify-center pb-10 lg:pt-0 justify-center">
          <div className="w-[90%] md:w-[45%] xl:w-[30%]  rop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortOne} alt="TODO"></Image>
          </div>
          <div className="w-[90%] md:w-[45%] xl:w-[30%]  rop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortTwo} alt="TODO"></Image>
          </div>
          <div className="w-[90%] md:w-[45%] xl:w-[30%]  rop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortThree} alt="TODO"></Image>
          </div>
          <div className="w-[90%] md:w-[45%] xl:w-[30%]  rop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortFour} alt="TODO"></Image>
          </div>
          <div className="w-[90%] md:w-[45%] xl:w-[30%]  rop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortFive} alt="TODO"></Image>
          </div>
          <div className="w-[90%] md:w-[45%] xl:w-[30%]  rop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortSix} alt="TODO"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
