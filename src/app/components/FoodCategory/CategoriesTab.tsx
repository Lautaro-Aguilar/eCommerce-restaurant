'use client';
import React from 'react';
import { ICategory } from '@/app/types';
import { icons } from '@/icons';
import { Tab, Tabs } from '@nextui-org/react';

interface CategoriesTabProps {
  categories: ICategory[];
  changeSelectedCategory: (category: string) => void;
}

const CategoriesTab = ({
  categories,
  changeSelectedCategory,
}: CategoriesTabProps) => {
  return (
    <div className='flex w-full justify-center items-center'>
      <Tabs
        aria-label='categories'
        color='warning'
        variant='solid'
        onSelectionChange={(e) => {
          const selectedTab = e.toString();
          changeSelectedCategory(selectedTab);
        }}
      >
        {categories.map((categorie: ICategory) => (
          <Tab
            key={categorie.id}
            title={
              <div className='flex items-center space-x-2'>
                {icons[categorie.icon]}
                <span>
                  {categorie.name.charAt(0).toUpperCase() +
                    categorie.name.slice(1)}
                </span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

export default CategoriesTab;
