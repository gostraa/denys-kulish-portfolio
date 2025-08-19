import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const navLinks = [
  { href: '/videos', label: 'Videos' },
  { href: '/photos', label: 'Photos' },
  { href: '/contact', label: 'Contact' },
];

const NavMenu = ({ pathname }: { pathname: string }) => {
  const getWeight = (isActive: boolean) => {
    return isActive ? 'bold' : 'normal';
  };

  return (
    <Flex listStyleType="none" w="full" gap={4} justifyContent="center" mb={4}>
      {navLinks.map((link: { href: string; label: string }) => {
        const isActive = pathname === link.href || pathname.includes(link.href);
        return (
          <Link href={link.href} key={link.href}>
            <Text
              h="full"
              fontSize={{ base: 'md', md: 'xl' }}
              fontWeight={getWeight(isActive)}
              transition="0.2s"
              position="relative"
              _hover={{
                fontWeight: 'bold',
              }}
            >
              {link.label}
            </Text>
          </Link>
        );
      })}
    </Flex>
  );
};

export default NavMenu;
