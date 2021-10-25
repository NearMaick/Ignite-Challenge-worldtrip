import { Flex, Heading, Text, Image } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  return (
    <Flex
      w="100%"
      h="72"
      bgImage="url('/assets/banner.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        justify={{ sm: 'center', lg: 'space-between' }}
        mx="auto"
        px={{ base: '4', sm: '10', md: '20', lg: '36' }}
      >
        <Flex flexDir="column" justify="center">
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={{ sm: '3xl', lg: '4xl' }}
          >
            Cinco continentes, <br />
            infinitas possibilidades
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={{ sm: '0.8rem', md: 'xl' }}
            maxWidth={{ base: '100%', lg: '550px' }}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou!
          </Text>
        </Flex>
        <Image
          src="assets/airplane.svg"
          alt="airplane"
          w={{ base: '300px', lg: '430px' }}
          display={{ base: 'none', lg: 'block' }}
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
