import { Flex, Heading } from '@chakra-ui/react';

import { ContinentProps } from '../../types/ContinentProps';

export function ContinentBanner({ continent }: ContinentProps): JSX.Element {
  return (
    <Flex
      w="100%"
      h={{ sm: '150px', md: '300px', lg: '500px' }}
      justify={{ sm: 'center', lg: 'flex-start' }}
      paddingX={{ sm: '0', lg: '36' }}
      paddingTop={{ sm: '0', lg: '80' }}
      bgImage={continent.image}
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
