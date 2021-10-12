import { Flex, Heading, Text } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SliderItem } from './SliderItem';

export function Slider(): JSX.Element {
  return (
    <Flex>
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
            description="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            image="url(https://i.ibb.co/VMLVnXz/john-towner-UO02g-AW3c0c-unsplash.jpg)"
            title="América do Sul"
            description="O continente mais tropical"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
