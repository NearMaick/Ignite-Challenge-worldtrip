import { Grid, Text, Heading, Image } from '@chakra-ui/react';
import { City } from './City';

const cities = [
  'Frankfurt',
  'Londres',
  'Dublin',
  'Lisboa',
  'Paris',
  'Amsterdã',
];

export function ContinentCities(): JSX.Element {
  return (
    <>
      <Heading marginBottom="10" fontSize={{ sm: '2xl', lg: '4xl' }}>
        Cidades +100
      </Heading>
      <Grid>
        {cities.map(city => (
          <City key={city} city={city} />
        ))}
      </Grid>
    </>
  );
}
