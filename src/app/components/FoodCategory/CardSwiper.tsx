import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard';
import { IProduct } from '@/app/types';

interface CardSwiperProps {
  products: IProduct[];
}

const CardSwiper = ({ products }: CardSwiperProps) => {
  return (
    <div>
      <Swiper
        effect='coverflow'
        modules={[EffectCoverflow, Pagination]}
        grabCursor
        centeredSlides
        loop
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
