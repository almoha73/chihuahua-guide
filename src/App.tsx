import React from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Lightbox } from './components/common/Lightbox';
import { HeroSection } from './components/sections/HeroSection';
import { InfoSection } from './components/sections/InfoSection';
import { VarietiesSection } from './components/sections/VarietiesSection';
import { PhotoGallerySection } from './components/sections/PhotoGallerySection';
import { CareSection } from './components/sections/CareSection';
import { HealthSection } from './components/sections/HealthSection';
import { useNavigation } from './hooks/useNavigation';
import { usePhotoGallery } from './hooks/usePhotoGallery';

const App: React.FC = () => {
  const { activeSection, scrollToSection } = useNavigation('info');
  const {
    selectedPhoto,
    onPhotoSelect,
    closePhoto,
    nextPhoto,
    prevPhoto
  } = usePhotoGallery();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff' }}>
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <main>
        <HeroSection onNavigate={scrollToSection} />
        <InfoSection />
        <VarietiesSection />
        <PhotoGallerySection
          onPhotoSelect={onPhotoSelect}
        />
        <CareSection />
        <HealthSection />
      </main>

      <Footer onNavigate={scrollToSection} />

      <Lightbox
        photo={selectedPhoto}
        onClose={closePhoto}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </div>
  );
};

export default App;