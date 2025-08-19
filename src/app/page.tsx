'use client';
import Hero from '@/components/Hero';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Hero />
      <Text maxW="70%" mt={8}>
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
