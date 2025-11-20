'use client';

import { useState, useEffect } from 'react';

import {
  Box,
  Portal,
  Spinner,
  Center,
  Button,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { GalleryFile } from '@/types';
import Image from 'next/image';
import LazyVideo from '../LazyVideo';

type GalleryProps = {
  data: GalleryFile[];
  type: 'video' | 'image';
};

const responsiveGridOptions = {
  base: '1fr',
  sm: 'repeat(2,  1fr)',
  md: 'repeat(3,  220px)',
  lg: 'repeat(3, 300px)',
  xl: 'repeat(4, 1fr)',
};

const Gallery = ({ data, type }: GalleryProps) => {
  const [currentFile, setCurrentFile] = useState<GalleryFile | null>(null);
  const [mounted, setMounted] = useState(false);
  const [page, setPage] = useState(1);

  const perPage = 9;
  const visibleData = data.slice(0, page * perPage);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  if (!mounted) {
    return (
      <Center h="70vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Flex direction="column" align="center" gap={10} p={4} pb={6}>
      <Grid templateColumns={responsiveGridOptions} maxW="1440px" gap={6}>
        {visibleData.map((file, idx) => (
          <GridItem
            key={idx}
            w="full"
            display="flex"
            alignItems="center"
            cursor="pointer"
            borderRadius="md"
            position="relative"
            onClick={() => setCurrentFile(file)}
          >
            {type === 'video' ? (
              <LazyVideo src={file.preview || file.src} />
            ) : (
              <Image src={file.src} alt={file.title} width={600} height={400} />
            )}
          </GridItem>
        ))}
      </Grid>

      {page * perPage < data.length && (
        <Center>
          <Button
            onClick={handleLoadMore}
            w={{ base: '180px', lg: '220px' }}
            height={{ base: '40px', lg: '50px' }}
          >
            Load More
          </Button>
        </Center>
      )}

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
            onClick={() => setCurrentFile(null)}
          >
            {type === 'video' ? (
              <video
                muted
                src={currentFile.src}
                controls
                autoPlay
                playsInline
                style={{
                  maxWidth: '90%',
                  maxHeight: '80%',
                  borderRadius: '8px',
                }}
              />
            ) : (
              <Image
                src={currentFile.src}
                alt="portfolio image"
                width={1000}
                height={800}
                style={{ width: '85%', display: 'block', borderRadius: '8px' }}
              />
            )}
          </Box>
        </Portal>
      )}
    </Flex>
  );
};

export default Gallery;
