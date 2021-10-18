import { Grid, Text, Heading, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { City } from './City';

const cities = [
  'Frankfurt',
  'Londres',
  'Dublin',
  'Lisboa',
  'Paris',
  'Amsterdã',
];

export function ContinentCities({ continent }): JSX.Element {
  const cities = continent.cities100;
  return (
    <>
      <Heading marginBottom="10" fontSize={{ sm: '2xl', lg: '4xl' }}>
        Cidades +100
      </Heading>
      <Grid
        templateColumns={{
          sm: '1fr","1fr 1fr',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={{ sm: '20px', lg: '45px' }}
        alignItems="center"
        justifyContent="center"
      >
        {cities.map(city => (
          <City key={city.city} city={city.city} country={city.country} />
        ))}
      </Grid>
    </>
  );
}
