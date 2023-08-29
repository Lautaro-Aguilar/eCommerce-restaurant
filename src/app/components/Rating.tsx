import React from 'react';
import ReactStars from 'react-stars';
import { IRating } from '../types';

interface RatingProps {
  rating: IRating;
  size?: number
}
export const Rating = ({ rating, size = 18 }: RatingProps) => {
  return (
    <div className='flex items-center'>
      <ReactStars
        count={5}
        value={rating?.rate}
        half={true}
        size={size}
        color2='#eab308'
        edit={false}
      />
      <p className='text-xs mt-0.5 ml-1 text-gray-400'>({rating?.count})</p>
    </div>
  );
};
