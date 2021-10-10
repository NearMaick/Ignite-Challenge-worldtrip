import { Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Banner />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={{ sm: '8', lg: '16' }}
        fontSize={{ sm: 'lg', md: '3xl', lg: '4xl' }}
      >
        Vamos nessa? <br />
        então escolha seu continente
      </Heading>
    </Flex>
  );
};

export default Home;
