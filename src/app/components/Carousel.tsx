import { CaretLeft, CaretRight, Star } from '@phosphor-icons/react';
import { useState } from 'react';

const testimonies = [
  {
    name: 'Juan Pérez',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
    avatar: '/testimonio1.jpg',
    job: 'Food Especialist',
    rating: 5,
  },
  {
    name: 'Ana González',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum omnis sed ea consequatur quo similique expedita fugiat aspernatur assumenda at sapiente earum, minus in autem voluptates dignissimos, porro placeat.',
    avatar: '/testimonio2.jpg',
    job: 'Food Especialist',
    rating: 4,
  },
  {
    name: 'Roberto Mendoza',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum omnis sed ea consequatur quo similique expedita fugiat aspernatur assumenda at sapiente earum, minus in autem voluptates dignissimos, porro placeat.',
    avatar: '/testimonio3.jpg',
    job: 'Chef',
    rating: 4,
  },
  {
    name: 'Carla Fernández',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum omnis sed ea consequatur quo similique expedita fugiat aspernatur assumenda at sapiente earum, minus in autem voluptates dignissimos, porro placeat.',
    avatar: '/testimonio4.jpg',
    job: 'Nutricionista',
    rating: 4,
  },
  {
    name: 'Miguel Vargas',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum omnis sed ea consequatur quo similique expedita fugiat aspernatur assumenda at sapiente earum, minus in autem voluptates dignissimos, porro placeat.',
    avatar: '/testimonio5.jpg',
    job: 'Food Blogger',
    rating: 5,
  },
  // ... otros testimonios
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : totalSlides - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  return (
    <div
      id='default-carousel'
      className='relative w-full py-5 lg:w-2/3 lg:mx-auto lg:mt-20'
    >
      <div className='relative overflow-hidden rounded-lg lg:h-80 lg:overflow-visible'>
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ? 'block' : 'hidden'
            } duration-700 ease-in-out p-4 bg-foreground-50 grid grid-cols-1 auto-rows-auto place-items-center h-full`}
          >
            <div className='h-52 w-full rounded-xl lg:-mt-16 lg:w-32 lg:h-32 lg:absolute lg:top-0 '>
              <img
                src={testimony.avatar}
                alt={`Avatar de ${testimony.name}`}
                className='h-full w-full rounded-xl object-cover object-center lg:rounded-full '
              />
            </div>
            <div className='py-2.5 w-full flex flex-col gap-1.5 items-center lg:px-12 lg:-mb-10'>
              <p className='text-center italic text-lg text-gray-200 min-h-40 max-h-40 overflow-y-auto lg:min-h-0 '>
                {testimony.message}
              </p>
              <div className='flex gap-2 justify-center items-center'>
                {[...Array(5)].map((_, starIndex) =>
                  starIndex < testimony.rating ? (
                    <Star key={starIndex} color='#FF9F0D' weight='fill' />
                  ) : (
                    <Star key={starIndex} color='#E0E0E0' weight='fill' />
                  )
                )}
              </div>
              <div className='flex flex-col items-center'>
                <p className='font-bold text-lg text-white'>{testimony.name}</p>
                <p className='font-light text-sm text-gray-300'>
                  {testimony.job}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute z-30 flex space-x-3 -translate-x-1/2 -bottom-5 left-1/2'>
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            type='button'
            // className='w-2 h-2 rounded-full bg-[#FF9F0D]'
            className={`w-2 h-2 rounded-full ${
              currentSlide === index
                ? 'bg-[#FF9F0D]'
                : 'bg-opacity-50 bg-gray-300'
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <button
        type='button'
        className='absolute top-0 -left-3.5 z-30  h-full cursor-pointer group focus:outline-none lg:-left-8'
        onClick={prevSlide}
      >
        <CaretLeft color='#FF9F0D' size={34} />
      </button>
      <button
        type='button'
        className='absolute top-0 -right-3.5 z-30 h-full cursor-pointer group focus:outline-none lg:-right-8'
        onClick={nextSlide}
      >
        <CaretRight color='#FF9F0D' size={34} />
      </button>
    </div>
  );
};

export default Carousel;
