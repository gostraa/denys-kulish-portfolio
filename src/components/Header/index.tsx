'use client';
import {
  Box,
  Button,
  Drawer,
  Flex,
  Grid,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import NavMenu from '../NavMenu';
import { useEffect, useState } from 'react';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';
const MotionBox = motion.create(Box);
const Header = () => {
  const pathname = usePathname();
  const isTablet = useMediaQuery(['(min-width: 630px)'])[0];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);
  return (
    <>
      {isDrawerOpen ? (
        <Drawer.Root open={isDrawerOpen} placement="start">
          <Drawer.Content minW="100vw" minH="100vh" bg="dark.130">
            <Drawer.Header
              display="flex"
              justifyContent="end"
              alignItems="center"
              p="16px"
              bg="dark.130"
            >
              <Button
                minW="22px"
                h="22px"
                variant="plain"
                onClick={toggleDrawer}
                p={0}
              >
                <CloseIcon strokeWidth="1" color="white" />
              </Button>
            </Drawer.Header>

            <Drawer.Body p={{ base: 4, sm: 6 }}>
              <NavMenu pathname={pathname} isMobile></NavMenu>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      ) : (
        <Grid
          as="header"
          templateColumns="1fr auto 1fr"
          gap={4}
          p={4}
          alignItems="center"
        >
          {isTablet ? (
            <NavMenu pathname={pathname}></NavMenu>
          ) : (
            <Button
              minW="fit-content"
              h="fit-content"
              variant="plain"
              onClick={toggleDrawer}
              p={0}
              justifyContent="start"
            >
              <MotionBox
                display="flex"
                animate={{ rotate: isDrawerOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                w="24px"
                h="24px"
                color="white"
              >
                <MenuIcon />
              </MotionBox>
            </Button>
          )}

          <Flex justify="center">
            <Text fontSize="lg" fontWeight="bold">
              Denys Kulish
            </Text>
          </Flex>
        </Grid>
      )}
    </>
  );
};

export default Header;
