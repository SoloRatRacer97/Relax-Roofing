import Image from 'next/image';
import serviceOne from '../../../public/ss/Vector.png';

export default function SSServiceesWeOffer() {
  return (
    <div className="bg-white py-12 lg:py-24 servicesSection">
      <div className="container flex flex-col items-center gap-16 justify-center ">
        <h2 className="text-4xl lg:text-6xl font-bold capitalize">
          What we offer our <span className="text-ssPrimary">Clients</span>
        </h2>
        <div className="flex flex-wrap justify-center w-full gap-8 lg:gap-14">
          <div className="w-full md:w-[45%] xl:w-[30%] flex gap-4">
            <div className="w-16 h-16 flex justify-center">
              <Image src={serviceOne} alt="TODO"></Image>
            </div>
            <div className="w-[85%] flex flex-col gap-2">
              <div className="font-bold text-2xl capitalize">Heading text here</div>
              <div className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis. Ipsam illum modi labore
                similique corrupti quis architecto, impedit delectus!
              </div>
            </div>
          </div>
          <div className="w-full md:w-[45%] xl:w-[30%] flex gap-4">
            <div className="w-16 h-16 flex justify-center">
              <Image src={serviceOne} alt="TODO"></Image>
            </div>
            <div className="w-[85%] flex flex-col gap-2">
              <div className="font-bold text-2xl capitalize">Heading text here</div>
              <div className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis. Ipsam illum modi labore
                similique corrupti quis architecto, impedit delectus!
              </div>
            </div>
          </div>
          <div className="w-full md:w-[45%] xl:w-[30%] flex gap-4">
            <div className="w-16 h-16 flex justify-center">
              <Image src={serviceOne} alt="TODO"></Image>
            </div>
            <div className="w-[85%] flex flex-col gap-2">
              <div className="font-bold text-2xl capitalize">Heading text here</div>
              <div className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis. Ipsam illum modi labore
                similique corrupti quis architecto, impedit delectus!
              </div>
            </div>
          </div>
          <div className="w-full md:w-[45%] xl:w-[30%] flex gap-4">
            <div className="w-16 h-16 flex justify-center">
              <Image src={serviceOne} alt="TODO"></Image>
            </div>
            <div className="w-[85%] flex flex-col gap-2">
              <div className="font-bold text-2xl capitalize">Heading text here</div>
              <div className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis. Ipsam illum modi labore
                similique corrupti quis architecto, impedit delectus!
              </div>
            </div>
          </div>
          <div className="w-full md:w-[45%] xl:w-[30%] flex gap-4">
            <div className="w-16 h-16 flex justify-center">
              <Image src={serviceOne} alt="TODO"></Image>
            </div>
            <div className="w-[85%] flex flex-col gap-2">
              <div className="font-bold text-2xl capitalize">Heading text here</div>
              <div className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis. Ipsam illum modi labore
                similique corrupti quis architecto, impedit delectus!
              </div>
            </div>
          </div>
          <div className="w-full md:w-[45%] xl:w-[30%] flex gap-4">
            <div className="w-16 h-16 flex justify-center">
              <Image src={serviceOne} alt="TODO"></Image>
            </div>
            <div className="w-[85%] flex flex-col gap-2">
              <div className="font-bold text-2xl capitalize">Heading text here</div>
              <div className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facilis. Ipsam illum modi labore
                similique corrupti quis architecto, impedit delectus!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
