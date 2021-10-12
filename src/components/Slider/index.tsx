import { Flex } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SliderItem } from './SliderItem';

import { continents } from '../../assets/continents';

type Continent = {
  url: string;
  title: string;
  summary: string;
  slug: string;
};

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
        {continents.map((continent: Continent, index) => (
          <SwiperSlide key={index}>
            <SliderItem
              image={continent.url}
              title={continent.title}
              summary={continent.summary}
              slug={continent.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
