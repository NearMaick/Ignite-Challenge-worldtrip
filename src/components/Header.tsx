import { Flex, Grid, Icon, Image } from '@chakra-ui/react';

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
      <Image
        src="assets/logo.svg"
        alt="worldtrip logo"
        w={{ sm: '24', md: '36', lg: '48' }}
        justifySelf="center"
      />
    </Flex>
  );
}
