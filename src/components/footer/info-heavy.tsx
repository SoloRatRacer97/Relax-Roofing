import Logo from '../../../public/logo/filler-logo.png';
import { Copyright } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { siteConfig } from '@/config/site';
import facebook from '../../../public/icons/facebook.png';
import instagram from "../../../public/icons/instagram.svg"
import linkedin from "../../../public/icons/linkedin.svg"

export default function AllOutFooterSection() {
  const router = useRouter();
  const href = router.pathname;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="bg-ssNeutralDark h-full flex flex-col items-center text-white w-full md:px-0 pt-10">
        <div className="h-fit container flex flex-row gap-8 lg:gap-4 flex-wrap justify-between pb-6">
          <div className="w-full lg:w-[25%]">
            <Image
              width={300}
              className="bg-white rounded-xl lg:block object-center object-cover pointer-events-none"
              src={Logo}
              // TODO logo desctiption
              alt="Business name logo :D"
            />
          </div>
          <div className="w-full lg:w-[18%] flex flex-col items-start gap-2">
            <div className="text-3xl font-medium underline">Contact Us</div>
            <div>{siteConfig.phone}</div>
            <div>{siteConfig.email}</div>
            <div className=''>{siteConfig.address}</div>
          </div>
          <div className="w-full lg:w-[18%] flex flex-col items-start gap-2">
            <div className="text-3xl font-medium underline">Our Services</div>
            {siteConfig.services?.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div className="flex flex-col lg:items-center w-full lg:w-[18%] h-20 ">
            <div className="text-3xl font-medium underline">Social Media</div>
            <div className="flex gap-4 mt-2">
              <div className="h-16 w-16">
                <Link href={siteConfig.links.facebook}>
                  <Image className='' src={facebook} alt="Facebook Icon"></Image>
                </Link>
              </div>
              <div className="h-16 w-16">
                <Link href={siteConfig.links.facebook}>
                  <Image className='' src={instagram} alt="Facebook Icon"></Image>
                </Link>
              </div>
              <div className="h-16 w-16">
                <Link href={siteConfig.links.facebook}>
                  <Image className='' src={linkedin} alt="Facebook Icon"></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex h-[1px] bg-gray-200 px-2 w-full container"></div>
        <div className="text-black w-full xl:px-56 text-white py-2">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 justify-start capitalize items-start px-2 lg:items-center">
            <div className="flex items-center my-2">
              <Copyright size={20} color="white" className="mr-2"></Copyright> {siteConfig.name} {currentYear}, All
              rights reserved
            </div>
            <Link className='hover:underline' href={"/privacy-policy"}>Privacy Policy</Link>
            <div>
              website design by: <Link className='hover:underline' href={'/design-credit'}>Cascade Web Solutions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
