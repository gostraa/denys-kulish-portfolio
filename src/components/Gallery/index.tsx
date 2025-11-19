'use client';

import { useState, useEffect } from 'react';
//@ts-expect-error todo: fix types
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Box, Portal, Spinner, Center, Button } from '@chakra-ui/react';
import { GalleryFile } from '@/types';
import Image from 'next/image';
import LazyVideo from '../LazyVideo';

type GalleryProps = {
  data: GalleryFile[];
  type: 'video' | 'image';
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
    <Box p={4} pb={6}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}
        gutterBreakpoints={{ 350: '12px', 750: '16px', 900: '24px' }}
      >
        <Masonry gutter="16px">
          {visibleData.map((file, idx) => (
            <Box
              key={idx}
              cursor="pointer"
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
              position="relative"
              onClick={() => setCurrentFile(file)}
              _hover={{ transform: 'scale(1.02)', transition: '0.2s' }}
            >
              {type === 'video' ? (
                <LazyVideo src={file.preview || file.src} />
              ) : (
                <Image
                  src={file.src}
                  alt={file.title}
                  width={600}
                  height={400}
                  style={{
                    width: '100%',
                    display: 'block',
                    borderRadius: '8px',
                  }}
                />
              )}
            </Box>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {page * perPage < data.length && (
        <Center mt={6}>
          <Button onClick={handleLoadMore}>Load More</Button>
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
                style={{ width: '45%', display: 'block', borderRadius: '8px' }}
              />
            )}
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default Gallery;
