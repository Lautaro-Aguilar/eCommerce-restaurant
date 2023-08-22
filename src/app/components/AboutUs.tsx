import { IconCheck } from '@tabler/icons-react';
import React from 'react';

const AboutUs = () => {
  return (
    <section
      id='about'
      className='max-w-screen-xl mx-auto grid px-5 grid-cols-1 auto-rows-auto  gap-10 text-center z-20 py-5 lg:grid-cols-2 lg:grid-rows-1'
    >
      <div className='flex flex-col gap-5 h-full overflow-auto lg:text-left'>
        <div className='relative'>
          <p className='font-heading text-[40px] text-yellow-500'>About us</p>
          <h2 className='text-5xl font-semibold'>
            <span className='text-yellow-500'>We</span> Create the best foody
            product
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
            <IconCheck className='max-w-5 max-h-5 min-w-max text-yellow-500' />{' '}
            {/* Icono */}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              eveniet saepe unde doloremque quo deleniti corporis
            </span>
          </li>
          <li className='flex items-center space-x-2 mt-2'>
            <IconCheck className='max-w-5 max-h-5 min-w-max  text-yellow-500' />{' '}
            {/* Icono */}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              aliquid, magni minima dolor possimus
            </span>
          </li>
          <li className='flex items-center space-x-2 mt-2'>
            <IconCheck className='max-w-5 max-h-5 min-w-max text-yellow-500' />{' '}
            {/* Icono */}
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing el</span>
          </li>
          <li className='flex items-center space-x-2 mt-2'>
            <IconCheck className='max-w-5 max-h-5 min-w-max text-yellow-500' />{' '}
            {/* Icono */}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              eveniet sapiente soluta, quibusdam
            </span>
          </li>
        </ul>
      </div>
      <div className=' grid-container grid grid-cols-1 grid-rows-2 gap-2 relative z-20 lg:max-h-[490px]'>
        <div className=''>
          <img
            alt='gallery'
            className='block h-full w-full rounded-md object-cover object-center'
            src='/imagenGaleria.jpg'
          />
        </div>
        <div className='grid grid-cols-2 grid-rows-1 gap-2'>
          <img
            alt='gallery'
            className='block h-full w-full rounded-md object-cover object-center'
            src='/imagenGaleria2.jpg'
          />
          <img
            alt='gallery'
            className='block h-full w-full rounded-md object-cover object-center'
            src='/imagenGaleria3.jpg'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
