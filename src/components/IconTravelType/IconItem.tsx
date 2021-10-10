import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

type IconProps = {
  icon: string;
  title: string;
};

export function IconItem({ icon, title }: IconProps): JSX.Element {
  const isMobile = useBreakpointValue({
    sm: true,
    lg: false,
  });

  return (
    <Flex
      direction={{ sm: 'row', lg: 'column' }}
      alignItems="center"
      justifyContent="center"
      margin={{ sm: '1', lg: '10' }}
    >
      {isMobile ? (
        <Text color="yellow.400" fontSize="4xl" mr="4">
          •
        </Text>
      ) : (
        <Image src={`assets/icons/${icon}.svg`} h="80px" mb="6" />
      )}
      <Text
        fontWeight="600"
        color="gray.700"
        fontSize={{ sm: 'xl', md: '2xl' }}
      >
        {title}
      </Text>
    </Flex>
  );
}
