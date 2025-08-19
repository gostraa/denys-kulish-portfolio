'use client';

import { useState, useEffect } from 'react';
//@ts-expect-error todo: fix types
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Box, Portal, IconButton, Spinner, Center } from '@chakra-ui/react';
import CloseIcon from '../icons/CloseIcon';
import { GalleryFile } from '@/types';

type GalleryProps = {
  data: GalleryFile[];
};

const Gallery = ({ data }: GalleryProps) => {
  const [currentFile, setCurrentFile] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Center h="70vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box p={4}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}
        gutterBreakpoints={{ 350: '12px', 750: '16px', 900: '24px' }}
      >
        <Masonry gutter="16px">
          {data.map((file, idx) => (
            <Box
              key={idx}
              cursor="pointer"
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
              position="relative"
              onClick={() => setCurrentFile(file.src)}
              _hover={{ transform: 'scale(1.02)', transition: '0.2s' }}
            >
              <video
                src={file.src}
                muted
                loop
                playsInline
                autoPlay
                style={{ width: '100%', display: 'block', borderRadius: '8px' }}
              />
            </Box>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {currentFile && (
        <Portal>
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.88)"
            backdropFilter="blur(8px)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={9999}
          >
            <IconButton
              aria-label="Close"
              position="absolute"
              top={4}
              right={4}
              colorScheme="whiteAlpha"
              onClick={() => setCurrentFile(null)}
            >
              <CloseIcon />
            </IconButton>
            <video
              src={currentFile}
              controls
              autoPlay
              playsInline
              style={{ maxWidth: '90%', maxHeight: '80%', borderRadius: '8px' }}
            />
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default Gallery;
