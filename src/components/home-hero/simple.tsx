import reviewStart from '../../../public/star-yellow.webp';
import mobileMetrics from '../../../public/CWS Home Hero Images.png';
import Ryan from '../../../public/ryan-jackman-review.png';
import { buttonVariants } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Check, MapPin } from 'lucide-react';

export default function SimpleHero() {
  const router = useRouter();
  const href = router.pathname;

  return (
    <div className="bg-white">
      <div className="flex px-32 items-center my-8 md:mt-2 py-20">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 justify-center lg:justify-start text-lg">
            <div className="flex">
              <Image className="h-5 w-5" src={reviewStart} alt="Star" />
              <Image className="h-5 w-5" src={reviewStart} alt="Star" />
              <Image className="h-5 w-5" src={reviewStart} alt="Star" />
              <Image className="h-5 w-5" src={reviewStart} alt="Star" />
              <Image className="h-5 w-5" src={reviewStart} alt="Star" />
            </div>
            <h4 className="font-medium text-black">
              Rated <span className="font-extrabold">5/5</span> Stars on Google
            </h4>
          </div>
          <div className="flex flex-col items-center gap-4 lg:items-start">
            {/* <h3 className="text-xl font-bold text-cws-blue capitalize">Redefining business websites</h3> */}
            <h1 className="text-center text-4xl font-medium leading-tight text-cws-dark md:mt-0 lg:text-start md:text-5xl lg:text-6xl">
              Tri-Cities' Premier <span className="text-cws-blue font-extrabold">Web Design</span> <br></br>&{' '}
              <span className="text-cws-blue font-extrabold">Local SEO Experts</span>
            </h1>
            <h2 className="text-cws-lb font-bold text-xl text-center lg:text-start">
              We take your online presence above and beyond the competition
            </h2>
          </div>
          <h2 className="lg:hidden text-center font-medium flex text-lg text-cws-dark">
            <div>
              Industry leading <span className="font-extrabold">SEO services</span> and{' '}
              <span className="font-extrabold">website design</span> based in Tri Cities Washington
            </div>
          </h2>
          <div className="hidden lg:flex ml-4 md:ml-0 text-cws-dark my-2">
            <ul className="gap-1 flex flex-col">
              <li className="flex text-2xl font-bold items-center gap-4">
                <Check size={30} className="text-cws-blue-dark flex"></Check>{' '}
                <div className="text-lg font-medium">
                  <span className="font-extrabold">World class web design</span> for local businesses
                </div>
              </li>
              <li className="flex font-bold items-center gap-4">
                <Check size={30} className="text-cws-blue-dark flex"></Check>{' '}
                <div className="text-lg font-medium">
                  <span className="font-extrabold">30%</span> the cost of our competitors with{' '}
                  <span className="font-extrabold">twice the value</span>
                </div>
              </li>
              <li className="flex font-bold items-center gap-4">
                <Check size={30} className="text-cws-blue-dark flex"></Check>{' '}
                <div className="text-lg font-medium">
                  Industry leading <span className="font-extrabold">SEO</span> services offered locally in Washington
                  State
                </div>
              </li>
            </ul>
          </div>
          <div className="z-0 my-4 flex justify-center lg:max-w-[550px] text-center md:flex md:flex-row lg:justify-start">
            <Link
              target="_blank"
              rel="noreferrer"
              href={'/auth/signup'}
              className={`${buttonVariants({
                variant: 'default',
                size: 'lg',
              })} mx-2 w-fit lg:w-44 capitalize drop-shadow-xl md:mx-0 md:mr-10 md:w-60`}
            >
              Try us risk free
            </Link>
            <Link
              rel="noreferrer"
              href={'/contact-us'}
              className={`${buttonVariants({
                variant: 'pricingHighlight',
                size: 'lg',
              })} mx-2 w-40 border drop-shadow-xl md:mx-0 md:w-60`}
            >
              Message Us
            </Link>
          </div>
          <div className="z-0 h-full items-start flex gap-4 mt-2">
            <Image src={Ryan} alt="Image of Ryan Jackman, a client of Cascade Web Solutions" />
            <div className="flex flex-col gap-1">
              <div className="flex">
                <Image className="h-4 w-4" src={reviewStart} alt="Star" />
                <Image className="h-4 w-4" src={reviewStart} alt="Star" />
                <Image className="h-4 w-4" src={reviewStart} alt="Star" />
                <Image className="h-4 w-4" src={reviewStart} alt="Star" />
                <Image className="h-4 w-4" src={reviewStart} alt="Star" />
              </div>
              <p className="text-[14px] w-[80%] italic text-black">
                I love our new website, it is super professional and extremely fast, and he designed it to perform well
                in search rankings, SEO, etc. Can't say enough about how fast and professional he was, and am thankful
                to have such a great professional running my website for me.
              </p>
              <div className="flex flex-col lg:flex-row text-black">
                <p className="font-bold pr-3">Ryan Jackman</p>
                <div className="hidden lg:flex">
                  <MapPin className="text-cws-blue px-1"></MapPin>
                  <div>Richland, WA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden xl:block h-full w-[80%] z-0">
          <Image
            className="drop-shadow-3xl"
            src={mobileMetrics}
            alt="A website mockup that we made in house of a laundromat website that generated over $200,000 of value for this local business."
          ></Image>
        </div>
      </div>
    </div>
  );
}
