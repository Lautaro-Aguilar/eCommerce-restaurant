'use client';
import { Button } from '@nextui-org/react';
import { CheckIcon } from '../../CheckIcon';
import React from 'react';
import { ICategory } from '@/app/types';

interface CategoriesProps {
  categories: ICategory[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  return (
    <>
      {categories.map((categorie) => (
        <Button
          key={categorie.slug.current}
          startContent={
            selectedCategory === categorie.id ? (
              <CheckIcon color='#eab308' />
            ) : null
          }
          color='warning'
          variant='flat'
          radius='lg'
          className='hover:cursor-pointer'
          onClick={() => setSelectedCategory(categorie.id)}
        >
          {categorie.name.charAt(0).toUpperCase() + categorie.name.slice(1)}
        </Button>
      ))}
    </>
  );
};

export default Categories;
