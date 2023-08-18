import React from 'react';
import CardItem from './components/CardItem';
import { client } from '../../../sanity/lib/client';
import { groq } from 'next-sanity';
import { IProduct } from '../types';

const getAllProductsQueries: string = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
    }
`;

const getProductsAsync = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60;

export default async function ProductPage() {
  const products: IProduct[] = await getProductsAsync();
  return (
    <>
      <header className='flex flex-col h-[20vh] mt-[65px]'>
        {/* HERO */}
        <div className='flex-1 flex items-center' id='home'>
          <div className='text-center mx-auto'>
            <h1 className='text-6xl font-semibold font-title'>Our Shop</h1>
            <p className='font-light text-3xl mt-5'>Best prices</p>
          </div>
        </div>
        <div className='min-w-full h-[20vh] mt-[65px] bg-[url("/imagen3.jpg")] bg-no-repeat bg-cover bg-center brightness-[0.4] absolute top-0 right-0 -z-10'></div>
      </header>

      <section className='max-w-screen-xl mx-auto px-5 py-5'>
        <CardItem product={products} />
      </section>
    </>
  );
}
