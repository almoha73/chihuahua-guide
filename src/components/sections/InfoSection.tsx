import React from 'react';
import { MapPin, Brain, Star } from "lucide-react";
import { chihuahuaInfo, interestingFacts } from "../../data/chihuahuaData";

export const InfoSection: React.FC = () => {
  return (
    <section id="info" className="section" style={{ background: '#fcfafa' }}>
      <div className="container">
        <h2 className="section-title fade-in">
          Tout sur les Chihuahuas
        </h2>

        <div className="grid-2" style={{ marginBottom: '3rem' }}>
          <div className="card fade-in delay-1">
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', backgroundColor: 'var(--color-rose-600)', backgroundImage: 'linear-gradient(to right, var(--color-rose-600), var(--color-pink-500))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={28} style={{ color: 'var(--color-rose-600)' }} />
                Fiche d'identité
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontWeight: '700', color: '#374151', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Origine</h4>
                  <p style={{ color: '#6b7280', fontWeight: '500' }}>{chihuahuaInfo.origine}</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: '700', color: '#374151', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Poids</h4>
                  <p style={{ color: '#6b7280', fontWeight: '500' }}>{chihuahuaInfo.poids}</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: '700', color: '#374151', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Taille</h4>
                  <p style={{ color: '#6b7280', fontWeight: '500' }}>{chihuahuaInfo.taille}</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: '700', color: '#374151', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Espérance</h4>
                  <p style={{ color: '#6b7280', fontWeight: '500' }}>{chihuahuaInfo.esperanceVie}</p>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                <h4 style={{ fontWeight: '700', color: '#374151', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Tempérament</h4>
                <p style={{ color: '#6b7280', fontWeight: '500' }}>{chihuahuaInfo.temperament}</p>
              </div>
            </div>
          </div>

          <div className="card fade-in delay-2">
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', backgroundColor: 'var(--color-rose-600)', backgroundImage: 'linear-gradient(to right, var(--color-rose-600), var(--color-pink-500))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Brain size={28} style={{ color: 'var(--color-rose-600)' }} />
                Personnalité
              </h3>
              <div style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '1.05rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  Les Chihuahuas sont célèbres pour leur **grande personnalité** dans un petit corps. Malgré leur taille minuscule,
                  ils sont confiants, audacieux et agissent souvent avec une assurance surprenante.
                </p>
                <p>
                  Ils forment des liens extrêmement forts avec leurs propriétaires et font preuve d'une intelligence vive qui
                  facilite leur éducation, pourvu qu'elle soit faite avec douceur et constance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card fade-in delay-3" style={{ marginBottom: '3rem' }}>
          <div style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', backgroundColor: 'var(--color-rose-600)', backgroundImage: 'linear-gradient(to right, var(--color-rose-600), var(--color-pink-500))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Star size={28} style={{ color: 'var(--color-rose-600)' }} />
              Faits intéressants
            </h3>
            <div className="grid-2">
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4b5563' }}>
                {interestingFacts.slice(0, 4).map((fact, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--color-rose-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Star size={18} style={{ color: 'var(--color-rose-600)', flexShrink: 0 }} />
                    </div>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4b5563' }}>
                {interestingFacts.slice(4).map((fact, index) => (
                  <li key={index + 4} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--color-rose-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Star size={18} style={{ color: 'var(--color-rose-600)', flexShrink: 0 }} />
                    </div>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="card fade-in">
          <div style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', backgroundColor: 'var(--color-rose-600)', backgroundImage: 'linear-gradient(to right, var(--color-rose-600), var(--color-pink-500))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1.5rem' }}>
              Histoire et origines
            </h3>
            <div style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Le Chihuahua tire son nom de l'État de Chihuahua au Mexique, où les premiers spécimens ont été découverts
                au milieu du XIXe siècle. Cependant, ses origines remontent à l'ère précolombienne.
              </p>
              <p>
                Descendant probable du **Techichi**, chien sacré des Toltèques, il était considéré comme un guide spirituel
                par les Aztèques. La race telle qu'on la connaît aujourd'hui a été officiellement reconnue au début du XXe siècle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};