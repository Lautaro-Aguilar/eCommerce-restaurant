'use client';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { ICategory, IProduct } from '../../types';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { client } from '../../../../sanity/lib/client';
import Categories from './CategoriesTab';
import CardSwiper from './CardSwiper';

interface FoodCategoryProps {
  categories: ICategory[];
}

const FoodCategory = ({ categories }: FoodCategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState(
    '3823e1f6-baac-4d3b-94eb-bda988332c08'
  );
  const changeSelectedCategory = (category: string) =>
    setSelectedCategory(category);
  const [products, setProducts] = useState<IProduct[]>([]);

  const itemsPerPage = 5;
  const [startItem, setStartItem] = useState(0);
  const totalItems = 10;

  useEffect(() => {
    async function fetchProducts() {
      const queriedProducts = await client.fetch(
        `*[_type == "product" && references($id)]{
          name,
          "slug": slug.current,
          price,
          description,
          "mainImage": mainImage.asset->url,
          gallery,
          rating
        }`,
        { id: selectedCategory }
      );

      setProducts(queriedProducts);
    }
    fetchProducts();
  }, [selectedCategory]);

  return (
    <section
      id='menu'
      className='bg-black max-w-screen-xl mx-auto text-center px-5 py-5'
    >
      <div>
        <p className='font-heading text-[40px] text-yellow-500 -mb-2'>
          Food Category
        </p>
        <h2 className='text-5xl font-semibold'>
          <span className='text-yellow-500'>Ch</span>oose Food Item
        </h2>
      </div>
      <Categories
        categories={categories}
        changeSelectedCategory={changeSelectedCategory}
      />
      <CardSwiper products={products} />

      <div className='pagination-controls sm:hidden'>
        <button
          onClick={() => setStartItem(startItem - itemsPerPage)}
          disabled={startItem === 0}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => setStartItem(startItem + itemsPerPage)}
          disabled={startItem + itemsPerPage >= totalItems}
        >
          <ArrowRight />
        </button>
      </div>

      <Button variant='ghost' radius='lg' color='warning' className=''>
        See More
      </Button>
    </section>
  );
};

export default FoodCategory;
