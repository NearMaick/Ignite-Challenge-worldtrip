import { Flex, Box, Text, Grid, Heading } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continents/[slug]';

export function ContinentContent({ continent }: ContinentProps): JSX.Element {
  return (
    <Grid
      templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '1.2fr 1fr' }}
      gap={{ sm: 10, md: 16, lg: 20 }}
      marginY={{ sm: '8', lg: '20' }}
    >
      <Box>
        <Text
          color="gray.700"
          textAlign="justify"
          fontSize={{ sm: 'xl', lg: '2xl' }}
        >
          {continent.description}
        </Text>
      </Box>

      <Flex alignItems="center" justifyContent="space-between">
        <Flex
          flexDirection="column"
          alignItems={{ sm: 'flex-start', lg: 'center' }}
        >
          <Heading color="yellow.400">{continent.countries}</Heading>
          <Text color="gray.700">Países</Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems={{ sm: 'flex-start', lg: 'center' }}
        >
          <Heading color="yellow.400">{continent.languages}</Heading>
          <Text color="gray.700">Lìnguas</Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems={{ sm: 'flex-start', lg: 'center' }}
        >
          <Heading color="yellow.400">{continent.cities}</Heading>
          <Text color="gray.700">Cidades +100</Text>
        </Flex>
      </Flex>
    </Grid>
  );
}
