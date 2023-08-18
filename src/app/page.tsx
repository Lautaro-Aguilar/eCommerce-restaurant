'use client';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { IconCheck } from '@tabler/icons-react';
import { CheckIcon } from './CheckIcon';
import CardItemTwo from './components/CardItemTwo';
import Carousel from './components/Carousel';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

const categorias = ['breakfast', 'dinner'];

export default async function Home() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('salty');

  const itemsPerPage = 5;
  const [startItem, setStartItem] = useState(0);
  const totalItems = 10; // Número total de tarjetas
  return (
    <>
      <header className='flex flex-col h-screen'>
        {/* HERO */}
        <div className='flex-1 flex items-center' id='home'>
          <div className='text-center mx-auto'>
            <h1 className='text-6xl font-semibold font-title'>
              Welcome to my site
            </h1>
            <p className='font-light text-3xl mt-5'>The land of opportunity</p>
          </div>
        </div>
        <div className='min-w-full min-h-full bg-[url("/imagen3.jpg")] bg-no-repeat bg-cover bg-center brightness-[0.4] absolute top-0 right-0 -z-10'></div>
      </header>

      <main>
        <section
          id='about'
          className='max-w-screen-xl mx-auto grid px-5 grid-cols-1 auto-rows-auto  gap-10 text-center z-20 py-5 lg:grid-cols-2 lg:grid-rows-1'
        >
          <div className='flex flex-col gap-5 h-full overflow-auto lg:text-left'>
            <div className='relative'>
              <p className='font-heading text-[40px] text-yellow-500'>
                About us
              </p>
              <h2 className='text-5xl font-semibold'>
                <span className='text-yellow-500'>We</span> Create the best
                foody product
              </h2>
            </div>
            <p>
              We are a passionate culinary venture in Gualeguaychú, Entre Ríos,
              Argentina. With over 3 years of dedication, we have been serving
              delicious gluten-free options to delight our customers. Our
              high-quality products are the outcome of our love for food and our
              commitment to excellence.
            </p>

            <ul className='text-left'>
              <li className='flex items-center space-x-2'>
                <IconCheck className='max-w-5 max-h-5 min-w-max text-yellow-500' />{' '}
                {/* Icono */}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  eveniet saepe unde doloremque quo deleniti corporis
                </span>
              </li>
              <li className='flex items-center space-x-2 mt-2'>
                <IconCheck className='max-w-5 max-h-5 min-w-max  text-yellow-500' />{' '}
                {/* Icono */}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo aliquid, magni minima dolor possimus
                </span>
              </li>
              <li className='flex items-center space-x-2 mt-2'>
                <IconCheck className='max-w-5 max-h-5 min-w-max text-yellow-500' />{' '}
                {/* Icono */}
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing el
                </span>
              </li>
              <li className='flex items-center space-x-2 mt-2'>
                <IconCheck className='max-w-5 max-h-5 min-w-max text-yellow-500' />{' '}
                {/* Icono */}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam eveniet sapiente soluta, quibusdam
                </span>
              </li>
            </ul>
          </div>
          <div className=' grid-container grid grid-cols-1 grid-rows-2 gap-2 relative z-20 lg:max-h-[490px]'>
            <div className=''>
              <img
                alt='gallery'
                className='block h-full w-full rounded-md object-cover object-center'
                src='/imagenGaleria.jpg'
              />
            </div>
            <div className='grid grid-cols-2 grid-rows-1 gap-2'>
              <img
                alt='gallery'
                className='block h-full w-full rounded-md object-cover object-center'
                src='/imagenGaleria2.jpg'
              />
              <img
                alt='gallery'
                className='block h-full w-full rounded-md object-cover object-center'
                src='/imagenGaleria3.jpg'
              />
            </div>
          </div>
        </section>

        <section
          id='menu'
          className='bg-black max-w-screen-xl mx-auto text-center px-5 py-5 overflow-y-auto'
        >
          <div className=''>
            <p className='font-heading text-[40px] text-yellow-500 -mb-2'>
              Food Category
            </p>
            <h2 className='text-5xl font-semibold'>
              <span className='text-yellow-500'>Ch</span>oose Food Item
            </h2>
          </div>
          <div className='flex justify-evenly py-5'>
            {categorias.map((categoria, index) => (
              <Button
                key={index}
                startContent={
                  categoriaSeleccionada === categoria ? (
                    <CheckIcon color='#eab308' />
                  ) : null
                }
                color='warning'
                variant='flat'
                radius='lg'
                className='hover:cursor-pointer'
                onClick={() => setCategoriaSeleccionada(categoria)}
              >
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </Button>
            ))}
          </div>

          <div
            id='testimonials'
            className='grid grid-cols-1 auto-rows-auto items-start py-2 gap-y-10 lg:grid-cols-4 lg:grid-rows-1'
          >
            <div className='row-span-1 mx-auto'>
              <img src='/imagenMenu.png' alt='Imagen principal' />
            </div>
            <div className='grid grid-cols-1 gap-5 row-span-2 justify-items-stretch mx-auto lg:grid-cols-2 lg:col-span-3'>
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
