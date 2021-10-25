import { Flex, Heading } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { IconTravelType } from '../components/IconTravelType';
import { Slider } from '../components/Slider';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

export type ContinentsProps = {
  continents: {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
  }[];
};

export default function Home({ continents }: ContinentsProps): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <IconTravelType />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={{ sm: '8', lg: '16' }}
        fontSize={{ sm: 'lg', md: '3xl', lg: '4xl' }}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Slider continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'continents'),
  ]);

  // const response = await prismic.getByUID('continents', 'europe', {});

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title[0].text,
      subtitle: continent.data.subtitle[0].text,
      image: continent.data.banner_image.url,
    };
  });

  // console.log(JSON.stringify(continents, null, ' '));

  return {
    props: {
      continents,
    },
  };
};
