import { Flex, Grid, Icon, Image } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header(): JSX.Element {
  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={{ sm: '16', lg: '24' }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxWidth="1160px"
        alignItems="center"
        justifyContent="center"
        alignSelf="start"
        templateColumns="repeat(3, 1fr)"
      >
        <Icon as={RiArrowLeftSLine} />
        <Image
          src="/assets/logo.svg"
          alt="worldtrip logo"
          w={{ sm: '24', md: '36', lg: '48' }}
          justifySelf="center"
        />
      </Grid>
    </Flex>
  );
}
