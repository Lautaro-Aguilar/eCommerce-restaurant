'use client';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import FoodCategory from './components/FoodCategory';
import { client } from '../../sanity/lib/client';
import { groq } from 'next-sanity';
import { ICategory } from './types';

const getAllCategoriesQueries: string = `
*[_type == "category"]{
  name,
  slug,
  image
}
`;

const getCategoriesAsync = () => {
  return client.fetch(groq`${getAllCategoriesQueries}`);
};

export default async function Home() {
  const categories: ICategory[] = await getCategoriesAsync();
  return (
    <>
      <Banner />
      <main>
        <AboutUs />
        <FoodCategory categories={categories} />

        <section className='max-w-screen-xl mx-auto px-5 py-5'>
          <div className='flex flex-col items-center justify-center text-center'>
            <p className='font-heading text-[40px] text-yellow-500 -mb-2'>
              Testimonials
            </p>
            <h2 className='text-5xl font-semibold'>
              What our <span className='text-yellow-500'>clients</span> are
              saying
            </h2>
          </div>
          <Carousel />
        </section>
      </main>
    </>
  );
}
