import React from 'react';
import { Stethoscope } from "lucide-react";
import { healthIssues, healthSchedule, emergencySigns } from "../../data/chihuahuaData";

export const HealthSection: React.FC = () => {
  return (
    <section id="sante" className="section" style={{ background: '#fcfafa' }}>
      <div className="container">
        <h2 className="section-title fade-in">
          Santé et Problèmes Courants
        </h2>

        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {healthIssues.map((issue, index) => (
            <div key={index} className={`card fade-in delay-${(index % 2) + 1}`}>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#111827',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.25rem'
                }}>
                  <span style={{ fontSize: '1.5em' }}>{issue.icon}</span>
                  {issue.nom}
                </h3>
                <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>{issue.description}</p>
                <div style={{
                  background: 'var(--color-rose-50)',
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  border: '1px solid var(--color-rose-100)'
                }}>
                  <h4 style={{ fontWeight: '800', color: 'var(--color-rose-700)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Prévention :
                  </h4>
                  <p style={{ color: 'var(--color-rose-600)', fontSize: '1rem', fontWeight: '500' }}>
                    {issue.prevention}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card fade-in" style={{ marginBottom: '4rem', border: '2px solid var(--color-rose-100)' }}>
          <div style={{ padding: '3rem' }}>
            <h3 style={{
              fontSize: '2rem',
              color: '#111827',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              <Stethoscope size={32} style={{ color: 'var(--color-rose-600)' }} />
              Signes d'urgence vétérinaire
            </h3>
            <div className="grid-2">
              <div style={{ background: '#fff1f2', padding: '2.5rem', borderRadius: '1.5rem' }}>
                <h4 style={{ fontWeight: '900', marginBottom: '1.5rem', color: '#be123c', fontSize: '1.25rem', textTransform: 'uppercase' }}>
                  Urgences absolues :
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#9f1239' }}>
                  {emergencySigns.urgent.map((sign, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontWeight: '600' }}>
                      <span style={{ fontSize: '1.2rem' }}>⚠️</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#fff7ed', padding: '2.5rem', borderRadius: '1.5rem' }}>
                <h4 style={{ fontWeight: '900', marginBottom: '1.5rem', color: '#9a3412', fontSize: '1.25rem', textTransform: 'uppercase' }}>
                  Surveillance nécessaire :
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#c2410c' }}>
                  {emergencySigns.monitoring.map((sign, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontWeight: '600' }}>
                      <span style={{ fontSize: '1.2rem' }}>⚡</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card fade-in" style={{ background: 'white' }}>
          <div style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '2rem', color: '#111827', fontWeight: '800', marginBottom: '3rem', textAlign: 'center' }}>
              Calendrier de santé
            </h3>
            <div className="grid-3">
              {healthSchedule.map((schedule, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{schedule.icon}</div>
                  <h4 style={{
                    fontWeight: '800',
                    marginBottom: '1.5rem',
                    color: '#111827',
                    fontSize: '1.25rem'
                  }}>
                    {schedule.ageGroup}
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '1rem', color: '#4b5563' }}>
                    {schedule.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ fontWeight: '500' }}>{item}</li>
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