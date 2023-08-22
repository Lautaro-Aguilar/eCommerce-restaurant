import React from 'react';

const Banner = () => {
  return (
    <header className='flex flex-col h-screen'>
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
  );
};

export default Banner;
