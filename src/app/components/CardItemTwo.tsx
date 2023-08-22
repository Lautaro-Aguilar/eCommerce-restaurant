import { Card, CardBody } from '@nextui-org/react';
import React from 'react';

const CardItemTwo = () => {
  return (
    /*     <article className='grid grid-cols-12 gap-1 items-start h-auto rounded-lg'>
      <div className='col-span-2 overflow-hidden h-14 rounded-lg'>
        <img
          alt='Album cover'
          className='w-full rounded-lg object-cover object-center h-14'
          src='/cardImageTwo.jpg'
        />
      </div>

      <div className='flex flex-col col-span-10 h-14 text-left'>
        <h5 className='text-sm font-bold'>Lettuce Leaf</h5>
        <p className='text-xs text-foreground/80'>
          Lacus nisi, et ac dapibus velit in consequat.
        </p>
        <p className='font-semibold text-yellow-500'>12.5$</p>
      </div>
    </article> */
    <a
      href='#'
      className='flex rounded-lg shadow bg-gray-800 hover:bg-gray-700 md:flex-row md:max-w-xl md:h-24'
    >
      <img
        className='object-cover object-center w-16 rounded-l-lg h-full md:h-auto md:w-20 md:rounded-none md:rounded-l-lg'
        src='/imagenGaleria.jpg'
        alt=''
      />
      <div className='flex justify-between w-full'>
        <div className='flex flex-col justify-center py-2 pl-2 leading-normal text-left'>
          <h5 className='text-base font-bold tracking-tight text-gray-900 dark:text-white'>
            Grilled Steak Tacos
          </h5>
          <p className='font-light text-sm text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology
          </p>
        </div>
        <div className='bg-yellow-600 bg-opacity-40 flex items-center justify-center rounded-r-lg md:w-16'>
          <p className='font-semibold text-yellow-500'>$12.5</p>
        </div>
      </div>
    </a>
  );
};

export default CardItemTwo;
