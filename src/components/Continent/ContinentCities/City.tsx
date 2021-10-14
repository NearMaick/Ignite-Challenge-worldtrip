import { Box, Flex, Text, Heading, Image } from '@chakra-ui/react';

type CityProps = {
  city: string;
};

export function City({ city }: CityProps): JSX.Element {
  return (
    <Box borderRadius="4" overflow="hidden">
      <Image
        src="https://i.ibb.co/cxhzKLH/jonatan-lewczuk-MAN-af-LJt2-E-unsplash.jpg"
        alt="France"
        height="170px"
        width="100%"
      />
      <Flex
        padding="6"
        justifyContent="space-between"
        alignItems="center"
        background="white"
        border="1px"
        borderTop="0"
        borderColor="yellow.300"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="semibold">
            {city}
          </Heading>
          <Text marginTop="3" color="gray.500" fontWeight="semibold">
            Reino Unido
          </Text>
        </Flex>
        <Image
          src="/assets/flags/France.png"
          width="30px"
          height="30px"
          borderRadius="50%"
        />
      </Flex>
    </Box>
  );
}
