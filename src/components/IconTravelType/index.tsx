import { Flex, Box } from '@chakra-ui/react';
import { IconItem } from './IconItem';

export function IconTravelType(): JSX.Element {
  return (
    <>
      <Flex w="100%" maxWidth={1480} flexWrap="wrap" justifyContent="center">
        <IconItem icon="cocktail" title="vida noturna" />
        <IconItem icon="surf" title="praia" />
        <IconItem icon="building" title="moderno" />
        <IconItem icon="museum" title="clássico" />
        <IconItem icon="earth" title="e mais..." />
      </Flex>
      <Box
        bg="gray.700"
        h="2px"
        w={{ sm: '60px', lg: '90px' }}
        mx="auto"
        my={{ sm: '9', lg: '20' }}
      />
    </>
  );
}
