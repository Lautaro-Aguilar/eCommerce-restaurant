import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {
  EffectCoverflow,
  Pagination,
  EffectFade,
  Navigation,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard';
import { IProduct } from '@/app/types';

interface CardSwiperProps {
  products: IProduct[];
}

const CardSwiper = ({ products }: CardSwiperProps) => {
  return (
    <div className='py-5'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className='mySwiper'
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
