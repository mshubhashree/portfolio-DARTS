import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section
      id="testimonials"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <p style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--accent-cyan)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem'
        }}>
          Endorsements
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: 'var(--text-main)',
          marginBottom: '1rem'
        }}>
          What engineering leaders say.
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto' }}>
          Collaborators, CTOs, and product directors on partnering through high-stakes product launches.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <Quote size={28} color="rgba(99, 102, 241, 0.3)" />
              </div>

              <p style={{
                fontSize: '0.98rem',
                color: 'var(--text-main)',
                lineHeight: 1.6,
                fontStyle: 'italic',
                margin: 0
              }}>
                "{t.quote}"
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <img
                src={t.avatar}
                alt={t.name}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--accent-indigo)'
                }}
              />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                  {t.name}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                  {t.role} • <span style={{ color: 'var(--accent-cyan)' }}>{t.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
