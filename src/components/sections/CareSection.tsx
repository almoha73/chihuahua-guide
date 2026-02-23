import React from 'react';
import { careTips, costBreakdown } from "../../data/chihuahuaData";

export const CareSection: React.FC = () => {
  return (
    <section id="soins" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="section-title fade-in">
          Conseils de Soins
        </h2>

        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {careTips.map((category, index) => (
            <div key={index} className={`card fade-in delay-${(index % 2) + 1}`}>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: 'var(--color-rose-600)',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  <span style={{ fontSize: '1.5em' }}>{category.icon}</span>
                  {category.category}
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.5' }}>
                      <span style={{ color: 'var(--color-rose-500)', fontWeight: 'bold' }}>•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="card fade-in" style={{ marginBottom: '4rem', background: 'linear-gradient(135deg, #111827, #1f2937)', border: 'none' }}>
          <div style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '1.75rem', color: 'white', fontWeight: '800', marginBottom: '2.5rem', textAlign: 'center' }}>
              Résumé des soins quotidiens
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2rem',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-rose-500)', marginBottom: '0.5rem' }}>1h min</div>
                <div style={{ fontSize: '0.9rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Exercice quotidien</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-rose-500)', marginBottom: '0.5rem' }}>2-3</div>
                <div style={{ fontSize: '0.9rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Petits repas/jour</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-rose-500)', marginBottom: '0.5rem' }}>6-12</div>
                <div style={{ fontSize: '0.9rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Mois entre visites véto</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-rose-500)', marginBottom: '0.5rem' }}>Hebdo</div>
                <div style={{ fontSize: '0.9rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Toilettage</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card fade-in" style={{ border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '2rem', color: '#111827', fontWeight: '800', marginBottom: '2.5rem', textAlign: 'center' }}>
              Coûts d'entretien annuels
            </h3>
            <div className="grid-2">
              {costBreakdown.map((category, index) => (
                <div key={index} style={{ background: '#f9fafb', padding: '2rem', borderRadius: '1rem' }}>
                  <h4 style={{ fontWeight: '800', marginBottom: '1.5rem', color: '#111827', fontSize: '1.1rem', borderBottom: '2px solid var(--color-rose-100)', paddingBottom: '0.5rem', display: 'inline-block' }}>{category.category}</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4b5563' }}>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem' }}>
                        <span style={{ fontWeight: '500' }}>{item.name}</span>
                        <span style={{ fontWeight: '700', color: 'var(--color-rose-600)', background: 'var(--color-rose-50)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.9rem' }}>{item.cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};