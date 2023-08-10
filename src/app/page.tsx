'use client';
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { useTheme } from 'next-themes';
import {
  IconSearch,
  IconShoppingBag,
  IconUser,
  IconCheck,
} from '@tabler/icons-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const handleMenuOpenChange = (isOpen: boolean | undefined) => {
    if (isOpen !== undefined) {
      setIsMenuOpen(isOpen);
    }
  };

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  console.log(theme);
  return (
    <>
      <header className='flex flex-col h-screen'>
        <nav>
          <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={handleMenuOpenChange}
            maxWidth='full'
            className='fixed top-0'
          >
            <NavbarContent className='sm:hidden' justify='start'>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              />
            </NavbarContent>
            <NavbarBrand>
              <h1 className='text-2xl font-title uppercase'>
                sin<span className='text-yellow-500'>Tacc</span>
              </h1>
            </NavbarBrand>
            <NavbarContent className='hidden sm:flex gap-4 ' justify='center'>
              <NavbarItem>
                <Link color='foreground' href='#home'>
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href='#'>About us</Link>
              </NavbarItem>
              <NavbarItem>
                <Link color='foreground' href='#'>
                  Menu
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color='foreground' href='#'>
                  Contact
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
              <NavbarItem className=''>
                <IconSearch />
              </NavbarItem>
              <NavbarItem>
                <IconUser />
              </NavbarItem>
              <NavbarItem>
                <IconShoppingBag />
              </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className='w-full'
                    color={
                      index === 2
                        ? 'warning'
                        : index === menuItems.length - 1
                        ? 'danger'
                        : 'foreground'
                    }
                    href='#'
                    size='lg'
                  >
                    {item}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </nav>
        {/* HERO */}
        <div className='flex-1 flex items-center' id='home'>
          <div className='text-center mx-auto'>
            <h1 className='text-6xl font-semibold font-title'>
              Welcome to my site
            </h1>
            <p className='font-light text-3xl mt-5'>The land of opportunity</p>
          </div>
        </div>
        <div className='min-w-full min-h-full bg-[url("/imagen3.jpg")] bg-no-repeat bg-cover bg-center brightness-[0.4] absolute top-0 right-0 -z-10'></div>
      </header>

      <main>
        <section className='max-w-screen-2xl h-screen mx-auto grid grid-cols-1 grid-rows-2 gap-10 text-center px-5 py-20 lg:grid-cols-2 lg:grid-rows-1'>
          <div className='flex flex-col gap-5 h-full overflow-auto'>
            <div className='relative'>
              <p className='font-heading text-[40px] text-yellow-500 absolute -top-12 left-8'>
                About us
              </p>
              <h2 className='text-5xl font-semibold'>
                <span className='text-yellow-500'>We</span> Create the best
                foody product
              </h2>
            </div>
            <p>
              We are a passionate culinary venture in Gualeguaychú, Entre Ríos,
              Argentina. With over 3 years of dedication, we have been serving
              delicious gluten-free options to delight our customers. Our
              high-quality products are the outcome of our love for food and our
              commitment to excellence.
            </p>

            <ul className='text-left'>
              <li className='flex items-center space-x-2'>
                <IconCheck className='max-w-5 max-h-5 min-w-max text-green-500' />{' '}
                {/* Icono */}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  eveniet saepe unde doloremque quo deleniti corporis
                </span>
              </li>
              <li className='flex items-center space-x-2'>
                <IconCheck className='max-w-5 max-h-5 min-w-max  text-green-500' />{' '}
                {/* Icono */}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo aliquid, magni minima dolor possimus
                </span>
              </li>
              <li className='flex items-center space-x-2'>
                <IconCheck className='max-w-5 max-h-5 min-w-max text-green-500' />{' '}
                {/* Icono */}
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing el
                </span>
              </li>
              <li className='flex items-center space-x-2'>
                <IconCheck className='max-w-5 max-h-5 min-w-max text-green-500' />{' '}
                {/* Icono */}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam eveniet sapiente soluta, quibusdam
                </span>
              </li>
            </ul>
          </div>
          <div className='grid-container grid grid-cols-1 grid-rows-2 gap-4 sm:bg-red-500 md:bg-blue-400 lg:bg-yellow-500 '>
            <div className=''>
              <img
                alt='gallery'
                className='block h-full w-full rounded-lg object-cover object-center'
                src='/imagen.jpg'
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <img
                alt='gallery'
                className='block h-full w-full rounded-lg object-cover object-center'
                src='/imagen2.jpg'
              />
              <img
                alt='gallery'
                className='block h-full w-full rounded-lg object-cover object-center'
                src='/bannerImage.avif'
              />
            </div>
          </div>
        </section>

        <section className='bg-slate-400 min-h-screen min-w-screen'></section>
      </main>
    </>
  );
}
