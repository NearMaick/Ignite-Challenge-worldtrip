import { Flex } from '@chakra-ui/react';
import { ContinentBanner } from '../../components/Continent/ContinentBanner';
import { ContinentCities } from '../../components/Continent/ContinentCities';
import { ContinentContent } from '../../components/Continent/ContinentContent';
import { Header } from '../../components/Header';

export default function Continent(): JSX.Element {
  return (
    <Flex flexDirection="column">
      <Header />
      <ContinentBanner />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <ContinentContent />
        <ContinentCities />
      </Flex>
    </Flex>
  );
}
