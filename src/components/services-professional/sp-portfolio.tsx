import Image from 'next/image';
import PortOne from '../../../public/sp/port-1.png';
import PortTwo from '../../../public/sp/port-2.png';
import PortThree from '../../../public/sp/port-3.png';
import PortFour from '../../../public/sp/port-4.png';
import PortFive from '../../../public/sp/port-5.png';
import PortSix from '../../../public/sp/port-6.png';

export default function SPPortfolio() {
  return (
    <div className="bg-white portfolioSection">
      <div className="container flex flex-col text-start items-center py-24 gap-6">
        <div className="text-4xl lg:text-6xl font-bold text-spNeutral self-start pl-8 pt-10 lg:pt-0">Our Work Speaks for Itself</div>
        <p className="w-full lg:w-[70%] text-xl self-start pl-8">
          Explore our gallery of completed decking and fencing projects. Each image is a testament to our commitment to quality and customer satisfaction. From modern designs to classic styles, our portfolio showcases our versatility and craftsmanship in every detail.
        </p>
        <div className="w-full flex flex-wrap gap-10 justify-center pb-10 lg:pt-0 justify-center">
          <div className="w-[90%] md:w-[45%] xl:w-[30%] drop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortOne} alt="Desmond and Sons Decking Project"></Image>
          </div>
          <div className="w-[90%] md:w-[45%] xl:w-[30%] drop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortTwo} alt="Desmond and Sons Fencing Project"></Image>
          </div>
          <div className="w-[90%] md:w-[45%] xl:w-[30%] drop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortThree} alt="Desmond and Sons Outdoor Design"></Image>
          </div>
          <div className="w-[90%] md:w-[45%] xl:w-[30%] drop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortFour} alt="Desmond and Sons Custom Deck"></Image>
          </div>
          <div className="w-[90%] md:w-[45%] xl:w-[30%] drop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortFive} alt="Desmond and Sons Elegant Fencing"></Image>
          </div>
          <div className="w-[90%] md:w-[45%] xl:w-[30%] drop-shadow-xl">
            <Image className="w-full rounded-md drop-shadow-xl" src={PortSix} alt="Desmond and Sons Creative Outdoor Space"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
