import React from 'react';
import { IProduct } from '../types';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { Rating } from './Rating';
import { Heart } from '@phosphor-icons/react';

interface CardItemProps {
  product: IProduct;
}

const ProductCard = ({ product }: CardItemProps) => {
  console.log(product);
  return (
    <Card className='p-0 max-w-xs'>
      <CardHeader className='overflow-visible p-0 w-ful'>
        <Image
          isZoomed
          alt='Card background'
          className='object-cover rounded-xl min-w-full rounded-b-none'
          src='/imagen4.jpg'
        />
      </CardHeader>
      <CardBody className='py-2 px-4 flex-col items-start justify-center'>
        <div className='flex items-center justify-between w-full'>
          <h4 className='font-bold uppercase text-xl'>{product.name}</h4>
          <Button isIconOnly radius='full' variant='light' color='warning'>
            <Heart size={22} />
          </Button>
        </div>
        <p className='text-base font-normal text-foreground-600 pb-1 -mt-2 min-h-[70px]'>
          {product.description}
        </p>
        <div className='flex flex-col gap-1 w-full'>
          <Button
            variant='flat'
            className='uppercase'
            color='warning'
            fullWidth
            radius='sm'
          >
            add to cart
          </Button>
          <Button
            variant='light'
            className='uppercase'
            color='warning'
            fullWidth
            radius='sm'
          >
            details
          </Button>
        </div>
      </CardBody>
    </Card>
    /*     <a
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
    </a> */
  );
};

export default ProductCard;
