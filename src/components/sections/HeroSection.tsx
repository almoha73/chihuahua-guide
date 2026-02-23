import React from 'react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="hero">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="fade-in">Tout sur les Chihuahuas</h2>
        <p className="fade-in delay-1">
          Votre guide complet sur ces compagnons minuscules mais extraordinaires
        </p>
        <p className="fade-in delay-2" style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
          Découvrez l'univers fascinant de la plus petite race de chien au monde
        </p>
        <div className="fade-in delay-3">
          <button
            className="btn-primary"
            onClick={() => onNavigate('info')}
            style={{
              fontSize: '1.125rem',
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            Explorer le guide
          </button>
        </div>
      </div>
    </section>
  );
};