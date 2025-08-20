'use client';
import Hero from '@/components/Hero';
import { Flex, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Hero />
      <Text
        mt={{ base: 4, md: 8 }}
        mx={{ base: 4, md: 8 }}
        px={{ base: 4, md: 6 }}
        fontSize={{ base: 'md', md: 'lg' }}
        textAlign="center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deleniti
        delectus sapiente dicta eligendi, labore omnis harum modi qui,
        repellendus maxime accusamus voluptas atque sunt vel error expedita
        facere laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Culpa deleniti delectus sapiente dicta eligendi, labore omnis harum modi
        qui, repellendus maxime accusamus voluptas atque sunt vel error expedita
        facere laborum!
      </Text>
    </Flex>
  );
}
