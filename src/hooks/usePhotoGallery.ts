import { useState } from 'react';
import { photoGallery } from '../data/chihuahuaData';

export const usePhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const onPhotoSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const closePhoto = () => {
    setSelectedIndex(null);
  };

  const nextPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photoGallery.length);
    }
  };

  const prevPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photoGallery.length) % photoGallery.length);
    }
  };

  return {
    selectedIndex,
    selectedPhoto: selectedIndex !== null ? photoGallery[selectedIndex] : null,
    onPhotoSelect,
    closePhoto,
    nextPhoto,
    prevPhoto,
  };
};