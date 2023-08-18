import React from 'react';
import ReactStars from 'react-stars';
import { IRating } from '../types';

interface RatingProps {
  rating: IRating;
}
export const Rating = ({ rating }: RatingProps) => {
  return (
    <div className='flex items-center'>
      <ReactStars
        count={5}
        value={rating?.rate}
        half={true}
        size={18}
        color2='#eab308'
        edit={false}
      />
      <p className='text-sm mt-0.5'>({rating?.count})</p>
    </div>
  );
};
