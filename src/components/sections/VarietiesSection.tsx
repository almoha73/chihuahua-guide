import React from 'react';
import { Star } from 'lucide-react';
import { varieties, coatTypes } from "../../data/chihuahuaData";

export const VarietiesSection: React.FC = () => {
  return (
    <section id="varietes" className="section" style={{ background: '#fcfafa' }}>
      <div className="container">
        <h2 className="section-title fade-in">
          Variétés de Chihuahuas
        </h2>

        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2.5rem', textAlign: 'center', color: '#111827' }}>
            Types de tête
          </h3>
          <div className="grid-2">
            {varieties.map((variety, index) => (
              <div key={index} className={`card fade-in delay-${index + 1}`}>
                <div style={{ padding: '2.5rem' }}>
                  <h4 style={{ fontSize: '1.5rem', backgroundImage: 'linear-gradient(to right, var(--color-rose-600), var(--color-pink-500))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800', marginBottom: '1rem' }}>
                    {variety.type}
                  </h4>
                  <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
                    {variety.description}
                  </p>
                  <div style={{ marginBottom: '1.5rem', background: 'var(--color-rose-50)', padding: '1.5rem', borderRadius: '1rem' }}>
                    <h5 style={{ fontWeight: '700', marginBottom: '1rem', color: '#111827', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Caractéristiques principales</h5>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {variety.caractéristiques.map((carac, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563', fontWeight: '500' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-rose-500)' }}></div>
                          {carac}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p style={{ fontSize: '1rem', color: '#111827' }}>
                    <span style={{ fontWeight: '700' }}>Popularité :</span> <span style={{ color: '#4b5563' }}>{variety.popularité}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2.5rem', textAlign: 'center', color: '#111827' }}>
            Types de poil
          </h3>
          <div className="grid-2">
            {coatTypes.map((coat, index) => (
              <div key={index} className={`card fade-in delay-${index + 1}`}>
                <div style={{ padding: '2.5rem' }}>
                  <h4 style={{ fontSize: '1.5rem', backgroundImage: 'linear-gradient(to right, var(--color-rose-600), var(--color-pink-500))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800', marginBottom: '1rem' }}>
                    {coat.type}
                  </h4>
                  <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
                    {coat.description}
                  </p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Entretien :</h5>
                    <p style={{ color: '#4b5563', lineHeight: '1.6' }}>{coat.entretien}</p>
                  </div>
                  <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '1rem' }}>
                    <h5 style={{ fontWeight: '700', marginBottom: '1rem', color: '#111827', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Avantages</h5>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {coat.avantages.map((avantage, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563', fontWeight: '500' }}>
                          <Star size={16} fill="var(--color-rose-100)" style={{ color: 'var(--color-rose-400)', flexShrink: 0 }} />
                          {avantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};