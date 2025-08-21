'use client';
import Hero from '@/components/Hero';
import { Flex, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Hero />
      <Text
        mt={{ base: 4, md: 8 }}
        mx={{ base: 0, md: 8 }}
        px={{ base: 0, md: 6 }}
        fontSize={{ base: 'sm', sm: 'md', md: 'xl' }}
        textAlign="center"
      >
        Professional videography for brands and events. <br /> Turning your
        ideas into powerful visual stories.
      </Text>
    </Flex>
  );
}
