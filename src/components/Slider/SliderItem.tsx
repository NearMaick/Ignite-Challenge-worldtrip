import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

type SliderItemProps = {
  image: string;
  title: string;
  summary: string;
  slug: string;
};

export function SliderItem({
  image,
  title,
  summary,
  slug,
}: SliderItemProps): JSX.Element {
  return (
    <Flex
      w={{ sm: '70%', md: '90%' }}
      h="100%"
      margin="0 auto"
      align="center"
      justify="center"
      bgImage={image}
      bgPosition="100% 30%"
      bgSize="cover"
      textAlign="center"
    >
      <Link href={`/continent/${slug}`}>
        <a>
          <Heading>{title}</Heading>
          <Text>{summary}</Text>
        </a>
      </Link>
    </Flex>
  );
}
