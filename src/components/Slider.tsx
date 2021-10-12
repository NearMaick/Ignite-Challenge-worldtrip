import { Flex, Heading, Text } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Slider(): JSX.Element {
  return (
    <Flex>
      <Swiper
        modules={[Navigation, Pagination]}
        // spaceBetween={0}
        // slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // initialSlide={0}
      >
        <SwiperSlide>
          <Flex
            bgImage={
              'url(https://i.ibb.co/y4FHKcx/hu-chen-60-XLo-Ogwkf-A-unsplash.jpg)'
            }
          >
            <a href="#none">
              <Heading>Europa</Heading>
              <Text>O continente mais antigo</Text>
            </a>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage={
              'url(https://i.ibb.co/VMLVnXz/john-towner-UO02g-AW3c0c-unsplash.jpg)'
            }
          >
            <a href="#none">
              <Heading>América do Sul</Heading>
              <Text>O continente mais tropical</Text>
            </a>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
