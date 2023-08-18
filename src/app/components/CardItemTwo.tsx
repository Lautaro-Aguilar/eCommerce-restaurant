import React from 'react';

const CardItemTwo = () => {
  return (
    <article className='grid grid-cols-12 gap-1 items-start h-14 rounded-lg'>
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
    </article>
  );
};

export default CardItemTwo;
