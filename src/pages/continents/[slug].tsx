import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex } from '@chakra-ui/react';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

import { ContinentBanner } from '../../components/Continent/ContinentBanner';
import { ContinentCities } from '../../components/Continent/ContinentCities';
import { ContinentContent } from '../../components/Continent/ContinentContent';
import { Header } from '../../components/Header';

import { ContinentProps } from '../../types/ContinentProps';

export default function Continent({ continent }: ContinentProps): JSX.Element {
  return (
    <Flex flexDirection="column">
      <Header />
      <ContinentBanner continent={continent} />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <ContinentContent continent={continent} />
        <ContinentCities continent={continent} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continents = await prismic.query([
    Prismic.Predicates.at('document.type', 'continents'),
  ]);

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug }: any = context.params;
  const response = await prismic.getByUID('continents', String(slug), {});

  const continent = {
    slug: response.uid,
    title: response.data.title[0].text,
    description: response.data.description[0].text,
    countries: String(response.data.countries),
    image: response.data.banner_image.url,
    languages: String(response.data.languages),
    cities: String(response.data.cities),
    cities100: response.data.cities100.map((city: any) => {
      return {
        city: city.city[0].text,
        country: city.country[0].text,
      };
    }),
  };

  return {
    props: {
      continent,
    },
    revalidate: 1800,
  };
};
