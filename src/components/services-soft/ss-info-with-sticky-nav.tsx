import Logo from '../../../public/logo/filler-logo.png';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Icons } from '../ui/icons';
import { NavigationMenu, NavigationMenuLink } from '../ui/navigation-menu';
import { Button, buttonVariants } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Link as ScrollLink } from 'react-scroll';
import { FaHamburger } from 'react-icons/fa';
import { Menu } from 'lucide-react';

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
              'block select-none space-y-1 IOS-black rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white focus:bg-white',
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

export function SSInfoWithSticky({ items, href }: MainNavProps) {
  const [sticky, setSticky] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log('We ran it');
    setMenuOpen((menuOpen) => !menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1280) {
        setSticky(window.pageYOffset > 40);
        setShowButtons(false);
      }

      if (window.pageYOffset > 700) {
        setShowButtons(true);
        // console.log('We should be showing buttons');
      }

      if (window.pageYOffset < 700) {
        setShowButtons(false);
        // console.log('We should NOT be showing buttons');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = useRouter();

  return (
    <header
      className={`${'shadow-xl top-0 flex flex-col-1 flex-wrap justify-center h-24 md:h-32 lg:h-28 md:pt-0 items-center text-2xl transition duration-500 bg-white '}`}
    >
      <div className="container flex flex-row justify-between items-center z-20">
        <Link href="/" className="items-center flex space-x-2 text-sm sm:text-2xl" aria-label="TODO">
          <Image
            width={200}
            className="hidden lg:block object-center object-cover pointer-events-none"
            src={Logo}
            alt="TODO"
          />
        </Link>
        {/* Or, if they dont have a logo, just do some text here for their name */}
        <NavigationMenu className="hidden md:flex justify-center items-center mx-10">
          <div className="hidden gap-3 md:flex">
            <ScrollLink
              activeClass="active"
              to="aboutSection"
              spy={true}
              smooth={true}
              offset={-90}
              duration={1400}
              className="hidden cursor-pointer font-bold text-cws-dark self-center xl:block"
            >
              <div
                className={cn(
                  'flex items-center font-normal px-1.5 text-xl capitalize hover:text-ssPrimary duration-200'
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
              offset={-90}
              duration={1400}
              className="hidden cursor-pointer font-bold text-cws-dark self-center xl:block"
            >
              <div
                className={cn(
                  'flex items-center font-normal px-1.5 text-xl capitalize hover:text-ssPrimary duration-200'
                )}
              >
                Our Services
              </div>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="prtfolioSection"
              spy={true}
              smooth={true}
              offset={-140}
              duration={1400}
              className="hidden cursor-pointer font-bold text-cws-dark self-center xl:block"
            >
              <div
                className={cn(
                  'flex items-center font-normal px-1.5 text-xl capitalize hover:text-ssPrimary duration-200'
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
              className="hidden cursor-pointer font-bold text-cws-dark self-center xl:block"
            >
              <div
                className={cn(
                  'flex items-center font-normal px-1.5 text-xl capitalize hover:text-ssPrimary duration-200'
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
              offset={-90}
              duration={1400}
              className="hidden cursor-pointer font-bold text-cws-dark self-center xl:block"
            >
              <div
                className={cn(
                  'flex items-center font-normal px-1.5 text-xl capitalize hover:text-ssPrimary duration-200'
                )}
              >
                Contact Us
              </div>
            </ScrollLink>
          </div>
        </NavigationMenu>
        <div className="hidden lg:flex text-center -ml-2 ">
          <ScrollLink
            activeClass="active"
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-90}
            duration={1400}
            className="hidden hover:underline cursor-pointer font-bold text-cws-dark self-center xl:block"
          >
            <Button
              className={`${buttonVariants({
                variant: 'stNeutral',
                size: 'lg',
              })} w-40 text-lg h-10 rounded-full`}
            >
              Contact Us
            </Button>
          </ScrollLink>
        </div>
        <div className="w-full h-fit flex lg:hidden text-center items-center justify-between">
          <div className="relative flex ml-8 mt-1">
            <Menu size={30} onClick={handleMenuToggle}></Menu>
            {menuOpen && (
              <div className="absolute h-fit w-40 bg-stBackground rounded-sm drop-shadow-xl top-10 w-56 flex flex-col p-2 gap-2">
                <Image
                  width={120}
                  className="object-center object-cover pointer-events-none"
                  src={Logo}
                  alt="Sir SudsLogo"
                />
                <div className="h-[1px] bg-black w-[80%]"></div>
                <div>
                  <div className="gap-3">
                    <ScrollLink
                      onClick={handleMenuToggle}
                      activeClass="active"
                      to="aboutSection"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={1400}
                      className="cursor-pointer font-bold text-cws-dark self-center"
                    >
                      <div
                        className={cn(
                          'flex items-center font-normal px-1.5 text-xl capitalize hover:text-spPrimary duration-200'
                        )}
                      >
                        About Us
                      </div>
                    </ScrollLink>
                    <ScrollLink
                      onClick={handleMenuToggle}
                      activeClass="active"
                      to="servicesSection"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={1400}
                      className="cursor-pointer font-bold text-cws-dark self-center"
                    >
                      <div
                        className={cn(
                          'flex items-center font-normal px-1.5 text-xl capitalize hover:text-spPrimary duration-200'
                        )}
                      >
                        Our Services
                      </div>
                    </ScrollLink>
                    <ScrollLink
                      onClick={handleMenuToggle}
                      activeClass="active"
                      to="prtfolioSection"
                      spy={true}
                      smooth={true}
                      offset={-140}
                      duration={1400}
                      className="cursor-pointer font-bold text-cws-dark self-center"
                    >
                      <div
                        className={cn(
                          'flex items-center font-normal px-1.5 text-xl capitalize hover:text-spPrimary duration-200'
                        )}
                      >
                        Reviews
                      </div>
                    </ScrollLink>

                    <ScrollLink
                      onClick={handleMenuToggle}
                      activeClass="active"
                      to="contactSection"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={1400}
                      className="cursor-pointer font-bold text-cws-dark self-center"
                    >
                      <div
                        // TODO: make this scroll down
                        className={cn(
                          'flex items-center font-normal px-1.5 text-xl capitalize hover:text-spPrimary duration-200'
                        )}
                      >
                        Contact Us
                      </div>
                    </ScrollLink>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/" className="items-center flex space-x-2 text-sm sm:text-2xl" aria-label="Navigation button">
            <Image
              width={140}
              className="object-center object-cover pointer-events-none"
              src={Logo}
              alt="Sir SudsLogo"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
