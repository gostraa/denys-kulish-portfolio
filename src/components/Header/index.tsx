'use client';

import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <Flex as="header" justify="center" gap={4} p={4} alignItems="center">
      <Link href="/">
        <Text fontSize="lg" fontWeight="bold">
          Denys Kulish
        </Text>
      </Link>
    </Flex>
  );
};

export default Header;
