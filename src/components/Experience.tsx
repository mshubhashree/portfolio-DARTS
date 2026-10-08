import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <p style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--accent-cyan)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem'
        }}>
          Career Trajectory
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: 'var(--text-main)',
          marginBottom: '1rem'
        }}>
          Leadership in engineering and product innovation.
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '640px' }}>
          Proven track record driving core platform architectures, scaling teams, and shipping dependable systems.
        </p>
      </div>

      {/* Timeline List */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              position: 'relative',
              borderLeft: index === 0 ? '4px solid var(--accent-cyan)' : '1px solid var(--border-subtle)'
            }}
          >
            {/* Header info */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1rem'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                    {exp.role}
                  </h3>
                  {index === 0 && (
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(6, 182, 212, 0.15)',
                      color: 'var(--accent-cyan)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(6, 182, 212, 0.3)'
                    }}>
                      Current
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent-indigo)' }}>
                  {exp.company}
                </div>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                fontSize: '0.85rem',
                color: 'var(--text-dim)'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={15} /> {exp.period}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={15} /> {exp.location}
                </span>
              </div>
            </div>

            {/* Role Summary */}
            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              {exp.summary}
            </p>

            {/* Key Achievements */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Key Impact Highlights:
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.achievements.map((ach, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <CheckCircle size={16} color="#06b6d4" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Associated Skills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', paddingTop: '0.5rem' }}>
              {exp.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
