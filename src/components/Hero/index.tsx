import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionDiv = motion.div;
const MotionVideo = motion('video');

const Hero = () => {
  return (
    <Box
      w="full"
      h={{ base: '240px', md: '430px', lg: '650px' }}
      position="relative"
      overflow="hidden"
    >
      <MotionVideo
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
        width="full"
        height="full"
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="rgba(0,0,0,0.3)"
        zIndex={0}
      />

      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        zIndex={1}
        w="full"
      >
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: [0, 1, 1, 0], y: [30, 0, 0, -30] }}
          transition={{
            delay: 2,
            duration: 6,
            ease: 'easeOut',
            times: [0, 0.25, 0.75, 1],
          }}
        >
          <Text
            fontSize={{ base: 'xl', md: '3xl', lg: '5xl' }}
            fontWeight="bold"
            color="white"
            textShadow="0px 2px 12px rgba(0,0,0,0.6)"
          >
            See the unseen. From the sky.
          </Text>
        </MotionDiv>
      </Box>
    </Box>
  );
};

export default Hero;
