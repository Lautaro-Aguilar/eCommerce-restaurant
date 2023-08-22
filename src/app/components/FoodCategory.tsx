'use client';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { CheckIcon } from '../CheckIcon';
import { ICategory } from '../types';
import CardItemTwo from './CardItemTwo';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { client } from '../../../sanity/lib/client';

interface FoodCategoryProps {
  categories: ICategory[];
}

const FoodCategory = ({ categories }: FoodCategoryProps) => {
  console.log(categories);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('salty');
  const [productos, setProductos] = useState([]);

  const itemsPerPage = 5;
  const [startItem, setStartItem] = useState(0);
  const totalItems = 10; // N

  useEffect(() => {
    // Esta función realiza la consulta y actualiza el estado con los productos
    async function fetchProducts() {
      const queriedProducts = await client.fetch(
        `*[_type == "product" && category.slug.current == $slug]{
          name,
          slug,
          price,
          description,
          mainImage,
          gallery,
          rating
        }`,
        { slug: categoriaSeleccionada }
      );

      setProductos(queriedProducts);
    }

    // Llama a la función cada vez que cambie 'categoriaSeleccionada'
    fetchProducts();
  }, [categoriaSeleccionada]);

  console.log(productos);
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
        {categories.map((categorie) => (
          <Button
            key={categorie.slug.current}
            startContent={
              categoriaSeleccionada === categorie.slug.current ? (
                <CheckIcon color='#eab308' />
              ) : null
            }
            color='warning'
            variant='flat'
            radius='lg'
            className='hover:cursor-pointer'
            onClick={() => setCategoriaSeleccionada(categorie.slug.current)}
          >
            {categorie.name.charAt(0).toUpperCase() + categorie.name.slice(1)}
          </Button>
        ))}
      </div>

      <div
        id='testimonials'
        className='grid grid-cols-1 py-2 gap-y-10 place-items-center lg:grid-cols-7 lg:grid-rows-1 lg:gap-y-0 lg:justify-items-stretch'
      >
        <div className='lg:col-span-2'>
          <img src='/pizza.png' alt='Imagen principal' />
        </div>
        <div className='grid grid-cols-1 gap-5 row-span-3 justify-items-stretch lg:grid-cols-2 lg:col-span-5'>
          {Array.from({ length: itemsPerPage }).map((_, index) => {
            if (startItem + index < totalItems) {
              return <CardItemTwo key={index} />;
            }
            return null;
          })}
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
