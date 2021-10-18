import { Flex, Heading } from '@chakra-ui/react';

import { continents } from '../../assets/continents';
import { ContinentProps } from '../../types/ContinentProps';

const europe = continents.find(continent => continent.slug === 'europe');

export function ContinentBanner({ continent }: ContinentProps): JSX.Element {
  return (
    <Flex
      w="100%"
      h={{ sm: '150px', md: '300px', lg: '500px' }}
      justify={{ sm: 'center', lg: 'flex-start' }}
      paddingX={{ sm: '0', lg: '36' }}
      paddingTop={{ sm: '0', lg: '80' }}
      bgImage={europe?.url}
      bgPosition="center"
      bgSize="cover"
      align="center"
    >
      <Heading
        textAlign={{ sm: 'center', lg: 'left' }}
        fontSize={{ sm: '3xl', md: '4xl', lg: '5xl' }}
        color="gray.300"
      >
        {continent.title}
      </Heading>
    </Flex>
  );
}
