'use client';
import { Rating } from '@/app/components/Rating';
import { IProduct } from '@/app/types';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import React from 'react';

interface ProductCardProps {
  product: IProduct[];
}

const CardItem = ({ product }: ProductCardProps) => {
  console.log(product);
  return (
    <Card className='w-72 bg-transparent'>
      <CardHeader className='flex-col items-start p-0 '>
        <Image
          alt='Card background'
          className='object-cover'
          src={product[0].mainImage}
          isZoomed
        />
      </CardHeader>
      <CardBody className='overflow-visible px-5 py-1'>
        <div className='flex flex-col gap-0.5 justify-center'>
          <h4 className='font-bold text-xl'>{product[0].name}</h4>
          <div className='flex items-center justify-between'>
            <p className='text-lg uppercase font-bold text-yellow-500'>{`$${product[0].price}`}</p>
            <Rating rating={product[0].rating} />
          </div>
          <div className='flex flex-col justify-center gap-1'>
            <Button
              variant='flat'
              radius='none'
              fullWidth
              color='warning'
              className='font-bold uppercase'
            >
              Add to Cart
            </Button>
            <Button
              fullWidth
              color='warning'
              radius='none'
              variant='flat'
              className='font-bold uppercase'
            >
              Details
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardItem;
