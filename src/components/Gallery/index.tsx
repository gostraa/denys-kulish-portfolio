'use client';

import { useState, useEffect, useRef } from 'react';
//@ts-expect-error todo: fix types
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import {
  Box,
  Portal,
  IconButton,
  Spinner,
  Center,
  Button,
} from '@chakra-ui/react';
import CloseIcon from '../icons/CloseIcon';
import { GalleryFile } from '@/types';

type GalleryProps = {
  data: GalleryFile[];
};

const LazyVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      muted
      loop
      playsInline
      autoPlay={isVisible}
      style={{ width: '100%', display: 'block', borderRadius: '8px' }}
    />
  );
};

const Gallery = ({ data }: GalleryProps) => {
  const [currentFile, setCurrentFile] = useState<string | null>(null);
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
    <Box p={4}>
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
              onClick={() => setCurrentFile(file.src)}
              _hover={{ transform: 'scale(1.02)', transition: '0.2s' }}
            >
              <LazyVideo src={file.src} />
            </Box>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {page * perPage < data.length && (
        <Center mt={4}>
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
