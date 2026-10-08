import React from 'react';
import { Code2, Cpu, Target, Coffee } from 'lucide-react';

export const About: React.FC = () => {

  const highlights = [
    {
      icon: <Code2 size={24} color="#06b6d4" />,
      title: "Obsessed with Craft",
      desc: "Clean abstractions, strict TypeScript, and readable, self-documenting codebases built to stand the test of time."
    },
    {
      icon: <Target size={24} color="#6366f1" />,
      title: "Product-Minded",
      desc: "Code exists to deliver business value and intuitive user experiences. I work cross-functionally with product and design."
    },
    {
      icon: <Cpu size={24} color="#a855f7" />,
      title: "Systems Thinker",
      desc: "Comfortable navigating distributed queues, caching hierarchies, database migrations, and edge computing layers."
    },
    {
      icon: <Coffee size={24} color="#10b981" />,
      title: "Team Multiplier",
      desc: "Active mentor, advocate for clear technical design documents (RFCs), and passionate about building healthy dev cultures."
    }
  ];

  return (
    <section
      id="about"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3.5rem',
        alignItems: 'center'
      }}>
        {/* Left Side: Avatar / Graphic representation */}
        <div style={{ position: 'relative' }}>
          <div
            className="glass-panel"
            style={{
              padding: '1.25rem',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Alex Rivera"
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                borderRadius: '16px'
              }}
            />

            {/* Float badge */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              padding: '1rem 1.25rem',
              borderRadius: '14px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>
                  Current Focus
                </p>
                <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>
                  Next-Gen AI Systems & High-Perf Web
                </p>
              </div>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 10px #10b981'
              }} />
            </div>
          </div>
        </div>

        {/* Right Side: Philosophy & Bio narrative */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <p style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Background & Principles
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-main)',
              margin: '0 0 1rem 0'
            }}>
              Bridging robust backend engineering with human-first UI delight.
            </h2>
          </div>

          <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
            Over the past 8+ years, I’ve navigated early-stage seed startups through to high-volume hyper-growth enterprise scale. My sweet spot lies at the junction of <strong>modern frontend engineering (React, TypeScript, CSS architecture)</strong> and <strong>distributed backend systems (Go, Node, PostgreSQL, Kafka)</strong>.
          </p>

          <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
            I don’t just write features; I engineer systems designed for maintainability, developer ergonomics, and rock-solid uptime. Whether untangling legacy architectures or bootstrapping an AI-driven product from zero to one, I pride myself on shipping fast without compromising on resilience.
          </p>

          {/* Core values grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {highlights.map((h, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ marginBottom: '0.25rem' }}>{h.icon}</div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>{h.title}</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
