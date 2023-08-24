import React from 'react';
import { IProduct } from '../types';

interface CardItemProps {
  product: IProduct;
}

const ProductCard = ({ product }: CardItemProps) => {
  console.log(product);
  return (
    <a
      href={`/products/${product.slug}`}
      className='flex rounded-lg shadow bg-gray-800 hover:bg-gray-700 md:flex-row md:max-w-xl md:h-24'
    >
      <img
        className='object-cover object-center w-16 rounded-l-lg h-full md:h-auto md:w-20 md:rounded-none md:rounded-l-lg'
        src={product.mainImage}
        alt=''
      />
      <div className='flex justify-between w-full'>
        <div className='flex flex-col justify-center py-2 pl-2 leading-normal text-left'>
          <h5 className='text-base font-bold tracking-tight text-gray-900 dark:text-white'>
            {product.name}
          </h5>
          <p className='font-light text-sm text-gray-700 dark:text-gray-400 w-11/12'>
            {product.description}
          </p>
        </div>
        <div className='bg-yellow-600 bg-opacity-40 flex items-center justify-center rounded-r-lg md:w-16'>
          <p className='font-semibold text-yellow-500'>${product.price}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
