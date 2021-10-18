import { Flex, Heading } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { IconTravelType } from '../components/IconTravelType';
import { Slider } from '../components/Slider';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

const Home: NextPage = () => {
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

      <Slider />
    </Flex>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'continents'),
  ]);

  /* const response = await prismic.getByUID('continent', 'europe', {}); */

  // console.log(response);

  /* const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title[0].text,
      summary: continent.data.summary[0].text,
      image: continent.data.image.url,
    };
  }); */

  return {
    props: {},
  };
};
