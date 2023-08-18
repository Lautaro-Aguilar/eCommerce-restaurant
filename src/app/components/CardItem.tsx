import React from 'react';
import {
  Card,
  CardFooter,
  Image,
  Button,
  CardHeader,
  CardBody,
} from '@nextui-org/react';
import { PlusCircle } from '@phosphor-icons/react';

export default function CardItem() {
  return (
    <Card
      isPressable
      isHoverable
      className='shadow-[0_0px_60px_-5px_rgba(253,140,0,.3)]'
    >
      <CardHeader className='flex-col items-center'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl'
          src='/cardImage.jpg'
        />
      </CardHeader>
      <CardBody className='overflow-visible pt-0 pb-5 '>
        <h3 className='text-2xl font-bold'>Chicken Burguer</h3>
        <p className='text-base my-1'>
          200 gr chicken + cheese Lettuce + tomato
        </p>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-semibold text-yellow-500'>
            $ 22.<span className='text-xl font-normal'>00</span>
          </p>
          <Button isIconOnly variant='light' color='warning' radius='full'>
            <PlusCircle size={44} weight='fill' className='text-yellow-400' />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
