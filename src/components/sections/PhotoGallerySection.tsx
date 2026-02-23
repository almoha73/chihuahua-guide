import React from 'react';
import { photoGallery, coatColors } from "../../data/chihuahuaData";

interface PhotoGallerySectionProps {
  onPhotoSelect: (index: number) => void;
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({
  onPhotoSelect
}) => {
  return (
    <section id="photos" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="section-title fade-in">
          Galerie Photos
        </h2>

        <div className="grid-3" style={{ marginBottom: '5rem' }}>
          {photoGallery.map((photo, index) => (
            <div
              key={photo.id}
              className={`card fade-in delay-${(index % 3) + 1}`}
              onClick={() => onPhotoSelect(index)}
              style={{
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: '100%',
                height: '18rem',
                overflow: 'hidden',
              }}>
                <img
                  src={photo.url}
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ textAlign: 'center', color: '#111827', fontWeight: '700', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                  {photo.caption}
                </p>
                <div style={{ textAlign: 'center' }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'var(--color-rose-50)',
                    color: 'var(--color-rose-600)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    textTransform: 'capitalize'
                  }}>
                    {photo.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }} className="fade-in">
          <div className="card" style={{
            background: 'linear-gradient(to bottom right, #ffffff, var(--color-rose-50))',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            <div style={{ padding: '3rem' }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '800',
                color: '#111827',
                marginBottom: '2rem'
              }}>
                Couleurs de robe acceptées
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '2rem',
                fontSize: '0.95rem'
              }}>
                {coatColors.map((color, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '50%',
                        margin: '0 auto 1rem',
                        background: color.name === 'Blanc' ? 'white' :
                          color.name === 'Fauve' ? '#d97706' :
                            color.name === 'Chocolat' ? '#92400e' :
                              color.name === 'Noir' ? '#1f2937' :
                                color.name === 'Bleu' ? '#60a5fa' :
                                  color.name === 'Rouge' ? '#dc2626' :
                                    color.name === 'Argent' ? '#9ca3af' :
                                      'linear-gradient(to right, #60a5fa, #6b7280)',
                        border: color.name === 'Blanc' ? '2px solid #e5e7eb' : 'none',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                      }}
                    />
                    <span style={{ fontWeight: '700', color: '#111827' }}>{color.name}</span>
                    {color.description && (
                      <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.5rem' }}>
                        {color.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};