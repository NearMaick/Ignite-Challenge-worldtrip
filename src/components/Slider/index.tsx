import { Flex } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SliderItem } from './SliderItem';

export function Slider(): JSX.Element {
  return (
    <Flex w="100%" maxW="1240px" mx="auto" h={{ sm: '250px', lg: '450px' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        initialSlide={0}
      >
        <SwiperSlide>
          <SliderItem
            image="url(https://i.ibb.co/y4FHKcx/hu-chen-60-XLo-Ogwkf-A-unsplash.jpg)"
            title="Europa"
            summary="O continente mais antigo"
            slug="none"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            image="url(https://i.ibb.co/VMLVnXz/john-towner-UO02g-AW3c0c-unsplash.jpg)"
            title="América do Sul"
            summary="O continente mais tropical"
            slug="none"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
