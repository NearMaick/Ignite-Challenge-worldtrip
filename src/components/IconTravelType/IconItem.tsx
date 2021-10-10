import { Flex, Image, Text } from '@chakra-ui/react';

type IconProps = {
  icon?: string;
  title?: string;
};

export function IconItem({ icon, title }: IconProps): JSX.Element {
  return (
    <Flex>
      <Image src={`assets/icons/${icon}.svg`} />
      <Text>{title}</Text>
    </Flex>
  );
}
