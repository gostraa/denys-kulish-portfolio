import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  return (
    <Box
      w="full"
      h={{ base: '240px', md: '430px', lg: '650px' }}
      position="relative"
      overflow="hidden"
    >
      <Box
        objectFit="cover"
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        left="0"
      >
        <video src="/video/hero.mp4" autoPlay loop muted playsInline></video>
      </Box>

      <Box
        w="full"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        zIndex={1}
      >
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5, ease: 'easeOut' }}
        >
          <Text
            fontSize={{ base: 'sm', md: '3xl', lg: '5xl' }}
            fontWeight="bold"
            color="white"
            textShadow="0px 2px 12px rgba(0,0,0,0.6)"
          >
            See the unseen. From the sky.
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
