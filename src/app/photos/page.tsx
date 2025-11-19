import Gallery from "@/components/Gallery";
import { photos } from "@/data/photos";
import React from 'react';

const PhotosPage = () => {
  return <Gallery data={photos} type="image"/>;
};

export default PhotosPage;
