import { Flex } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SliderItem } from './SliderItem';
import { ContinentsProps } from '../../pages';

export function Slider({ continents }: ContinentsProps): JSX.Element {
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
        {continents.map(continent => (
          <SwiperSlide key={continent.slug}>
            <SliderItem
              image={continent.image}
              title={continent.title}
              summary={continent.subtitle}
              slug={continent.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
