import Logo from '../../../public/logo/filler-logo.png';
import { Button, buttonVariants } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Icons } from '../ui/icons';
import { NavigationMenu, NavigationMenuLink } from '../ui/navigation-menu';
// import pricingNavbarImage from "../public/images/navbar-images/pricing-nav.png"
// import whatWeDoNavbarImage from "../public/images/navbar-images/what-we-do-nav.png"
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface MainNavProps {
  items?: NavItem[];
  href: string;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-3 text-sm leading-snug text-slate-500 dark:text-slate-400">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export function ConsBlockyWithQuoteNav({ items, href }: MainNavProps) {
  const [sticky, setSticky] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1280) {
        setSticky(window.pageYOffset > 0);
        setShowButtons(false);
      }

      if (window.pageYOffset > 700) {
        setShowButtons(true);
      }

      if (window.pageYOffset < 700) {
        setShowButtons(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = useRouter();

  return (
    <div className="container hidden lg:flex justify-center">
      <div
        className={`${'flex pt-4 justify-center h-16 md:h-32 lg:h-24 w-[95%] md:pt-0 items-center text-2xl transition duration-500 bg-white sm:rounded'}`}
      >
        <div className="container flex flex-row justify-between items-center z-20 -mt-6 lg:-mt-0">
          <Link href="/" className="items-center flex space-x-2 text-sm sm:text-2xl" aria-label="Sir Suds Logo">
            <Image
              width={160}
              className="hidden xl:block object-center object-cover pointer-events-none"
              src={Logo}
              alt="Sir Suds Logo"
            />
          </Link>
          <NavigationMenu className="hidden md:flex justify-center items-center xl:mx-10 gap-8">
            <ScrollLink
              activeClass="active"
              to="aboutSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={1400}
              className="hidden cursor-pointer font-bold text-consPrimary self-center xl:block"
            >
              <div
                className={cn(
                  'flex items-center font-normal px-1.5 text-xl capitalize hover:text-consSecondary duration-200'
                )}
              >
                About Us
              </div>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="servicesSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={1400}
              className="hidden cursor-pointer font-bold text-consPrimary self-center xl:block"
            >
              <div
                className={cn(
                  'flex items-center font-normal px-1.5 text-xl capitalize hover:text-consSecondary duration-200'
                )}
              >
                Services
              </div>
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="prtfolioSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={1400}
              className="hidden cursor-pointer font-bold text-consPrimary self-center xl:block"
            >
              <div
                className={cn(
                  'flex items-center font-normal px-1.5 text-xl capitalize hover:text-consSecondary duration-200'
                )}
              >
                Portfolio
              </div>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="reviewsSection"
              spy={true}
              smooth={true}
              offset={-90}
              duration={1400}
              className="hidden cursor-pointer font-bold text-consPrimary self-center xl:block"
            >
              <div
                className={cn(
                  'flex items-center font-normal px-1.5 text-xl capitalize hover:text-consSecondary duration-200'
                )}
              >
                Reviews
              </div>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="contactSection"
              spy={true}
              smooth={true}
              offset={50}
              duration={1400}
              className="hidden cursor-pointer font-bold text-consPrimary self-center xl:block"
            >
              <div
                // TODO: make this scroll down
                className={cn(
                  'flex items-center font-normal px-1.5 text-xl capitalize hover:text-consSecondary duration-200'
                )}
              >
                Contact Us
              </div>
            </ScrollLink>
          </NavigationMenu>
          <div className="xl:flex hidden text-center">
            <ScrollLink
              activeClass="active"
              to="contactSection"
              spy={true}
              smooth={true}
              offset={50}
              duration={1400}
              className="hidden hover:underline cursor-pointer font-bold text-cws-dark self-center xl:block"
            >
              <Button
                className={`${buttonVariants({
                  variant: 'consSecondary',
                  size: 'lg',
                })} w-40 text-lg rounded-sm h-10`}
              >
                Contact Us
              </Button>
            </ScrollLink>
          </div>
        </div>
        {/* <div
          className={`fixed flex top-0 h-24 w-full justify-center text-2xl transition duration-300 z-0 drop-shadow-lg px-5 bg-consAccent transition-all duration-300  ${
            showButtons ? 'opacity-100 z-50 visible delay-300' : 'opacity-0 z-0 invisible delay-0'
          }`}
        >
          <div className="container flex items-center justify-center w-full">
            <div className="flex justify-center items-center w-[80%]">
              <p className="text-3xl font-bold mt-1 text-white">Ready to connect with our team?</p>
              <div className="w-1/3 flex text-center items-center justify-center gap-6">
                <Button
                  className={`${buttonVariants({
                    variant: 'consSecondary',
                    size: 'lg',
                  })} w-36 text-xl capitalize rounded-sm w-44 xl:w-56 h-12 mt-2`}
                >
                  Visit Us Today
                </Button>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden items-start justify-center gap-24 sm:gap-80 md:gap-96 mt-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="" aria-label="Navigation button">
                <Button variant="ghost" className=" mt-3 text-base hover:bg-transparent focus:ring-0">
                  <Icons.menu className="h-10 w-10 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={24} className="w-[300px]">
                <DropdownMenuLabel>
                  <Link href="/" className="flex items-center" aria-label="Navigation button">
                    <Image
                      width={100}
                      className="object-center object-cover pointer-events-none"
                      src={Logo}
                      alt="Sir SudsLogo"
                    />
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {items?.map(
                  (item, index) =>
                    item.href && (
                      <DropdownMenuItem key={index} asChild>
                        <Link href={item.href}>{item.title}</Link>
                      </DropdownMenuItem>
                    )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href={'/our-location'}>
              <ScrollLink
                activeClass="active"
                to="contactSection"
                spy={true}
                smooth={true}
                offset={50}
                duration={2100}
                className="hidden lg:flex z-20 hover:underline cursor-pointer font-bold text-cws-dark self-center"
              >
                <Button
                  className={`${buttonVariants({
                    variant: 'consDefault',
                    size: 'xsm',
                  })} text-black h-12 px-6 text-white rounded-sm text-xl shadow-2xl`}
                >
                  Visit Us Today
                </Button>
              </ScrollLink>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
