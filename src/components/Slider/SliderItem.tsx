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
      <Link href={`/continents/${slug}`}>
        <a>
          <Heading
            fontSize={{ sm: '3xl', md: '4xl', lg: '5xl' }}
            color="gray.100"
          >
            {title}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={{ sm: '0.8rem', md: '1xl', lg: '2xl' }}
            mt={{ sm: '2', lg: '4' }}
          >
            {summary}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
