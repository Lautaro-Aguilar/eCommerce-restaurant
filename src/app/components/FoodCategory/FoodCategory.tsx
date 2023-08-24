'use client';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { ICategory, IProduct } from '../../types';
import ProductCard from '../ProductCard';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { client } from '../../../../sanity/lib/client';
import Categories from './Categories';

interface FoodCategoryProps {
  categories: ICategory[];
}

const FoodCategory = ({ categories }: FoodCategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState(
    '3823e1f6-baac-4d3b-94eb-bda988332c08'
  );
  const [products, setProducts] = useState<IProduct[]>([]);

  const itemsPerPage = 5;
  const [startItem, setStartItem] = useState(0);
  const totalItems = 10; // N

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
      className='bg-black max-w-screen-xl mx-auto text-center px-5 py-5 overflow-y-auto'
    >
      <div>
        <p className='font-heading text-[40px] text-yellow-500 -mb-2'>
          Food Category
        </p>
        <h2 className='text-5xl font-semibold'>
          <span className='text-yellow-500'>Ch</span>oose Food Item
        </h2>
      </div>
      <div className='flex justify-evenly py-5'>
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div
        id='Menu'
        className='grid grid-cols-1 py-2 gap-y-10 place-items-center lg:grid-cols-7 lg:grid-rows-1 lg:gap-y-0 lg:justify-items-stretch'
      >
        <div className='lg:col-span-2'>
          <img src='/pizza.png' alt='Imagen principal' />
        </div>
        <div className='grid grid-cols-1 gap-5 row-span-3 justify-items-stretch lg:grid-cols-2 lg:col-span-5'>
          {products
            ? products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            : null}
        </div>
      </div>

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
