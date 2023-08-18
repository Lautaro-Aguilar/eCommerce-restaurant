import React, { useState } from 'react';
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
import { MagnifyingGlass, User } from '@phosphor-icons/react';
import { IconShoppingBag } from '@tabler/icons-react';

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

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpenChange = (isOpen: boolean | undefined) => {
    if (isOpen !== undefined) {
      setIsMenuOpen(isOpen);
    }
  };
  return (
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
            <Link href='#about'>About us</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#menu'>
              Menu
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#testimonials'>
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem className=''>
            <MagnifyingGlass />
          </NavbarItem>
          <NavbarItem>
            <User />
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
  );
};

export default NavBar;
