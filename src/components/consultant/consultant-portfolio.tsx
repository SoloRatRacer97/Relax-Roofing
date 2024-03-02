import Image, { StaticImageData } from 'next/image';
import PortOne from '../../../public/consultant/cons-port-one.png';
import PortTwo from '../../../public/consultant/cons-port-two.png';
import CardZoom from '../card-zoom';

interface Card {
  title: String;
  image: StaticImageData;
  text: String;
  buttonTitle: String;
  // buttonUrl: Url;
}

export default function Portfolio() {
  const pastWork: Card[] = [
    {
      title: 'Commercial Painting',
      image: PortOne,
      text: 'soe kind of text here about the specifics of the service soe kind of text here about the specifics of the service',
      buttonTitle: 'Contact Us',
      // buttonUrl: '#',
    },
    {
      title: 'Commercial Painting',
      image: PortTwo,
      text: 'soe kind of text here about the specifics of the service soe kind of text here about the specifics of the service',
      buttonTitle: 'Contact Us',
      // buttonUrl: '#',
    },
  ];


  return (
    <div className="bg-white py-12 prtfolioSection">
      <div className="container flex flex-col gap-12">
        <div className="w-full flex flex-col items-center text-center lg:text-start lg:items-start gap-2 lg:gap-6">
          <h3 className="border border-consPrimary text-xl lg:text-2xl text-consPrimary px-2">
            Lorem ipsum dolor sit amet.
          </h3>

          <h2 className="text-4xl font-bold text-center md:text-start leading-tight md:text-6xl tracking-wider text-consAccent w-full capitalize drop-shadow-2xl">
            Local Accounting Solutions
          </h2>
        </div>
        <div className="flex gap-12 flex flex-col lg:flex-row">
        <div className="bg-white">
      <div className=" container py-6 md:py-12 max-md:text-center">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
          {pastWork.map((work) => (
            <CardZoom info={work} />
          ))}
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
