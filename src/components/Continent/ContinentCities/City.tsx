import { Grid, Text, Heading, Image } from '@chakra-ui/react';

type CityProps = {
  city: string;
};

export function City({ city }: CityProps): JSX.Element {
  return (
    <>
      <Text>{city}</Text>
      <Image src="/assets/flags/France.png" />
      <Image src="https://i.ibb.co/cxhzKLH/jonatan-lewczuk-MAN-af-LJt2-E-unsplash.jpg" />
      <Text>Reino Unido</Text>
    </>
  );
}
