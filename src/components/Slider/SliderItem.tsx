import { Flex, Heading, Text } from '@chakra-ui/react';

type SliderItemProps = {
  image: string;
  title: string;
  description: string;
};

export function SliderItem({
  image,
  title,
  description,
}: SliderItemProps): JSX.Element {
  return (
    <Flex bgImage={image}>
      <a href="#none">
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </a>
    </Flex>
  );
}
