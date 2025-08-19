import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const navLinks = [
  { href: '/videos', label: 'Videos' },
  { href: '/photos', label: 'Photos' },
  { href: '/contact', label: 'Contact' },
];

const NavMenu = ({
  pathname,
  isMobile = false,
}: {
  pathname: string;
  isMobile: boolean;
}) => {
  console.log('pathname', pathname);

  const getWeight = (isActive: boolean) => {
    return isActive ? 'bold' : 'normal';
  };

  return (
    <nav>
      <Flex
        listStyleType="none"
        gap={4}
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems={isMobile ? 'flex-start' : 'center'}
      >
        {navLinks.map((link: { href: string; label: string }) => {
          const isActive =
            pathname === link.href || pathname.includes(link.href);
          return (
            <Link href={link.href} key={link.href}>
              <Text
                h="full"
                fontSize={{ base: 'sm', sm: 'md' }}
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
    </nav>
  );
};

export default NavMenu;
