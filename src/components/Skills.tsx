import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Layout, Server, Sparkles, Cpu, Layers, ShieldCheck, Database, GitBranch } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={22} color="#06b6d4" />;
      case 'Server':
        return <Server size={22} color="#6366f1" />;
      case 'Sparkles':
        return <Sparkles size={22} color="#a855f7" />;
      default:
        return <Cpu size={22} color="#10b981" />;
    }
  };

  const expertiseHighlights = [
    {
      icon: <Layers size={20} color="#06b6d4" />,
      title: "Clean Architecture",
      desc: "Domain-driven design, modular monoliths, and micro-frontend boundaries that scale gracefully."
    },
    {
      icon: <Database size={20} color="#6366f1" />,
      title: "Resilient Data Layers",
      desc: "Optimistic replication, transactional locks, Redis distributed caching, and zero-loss queues."
    },
    {
      icon: <ShieldCheck size={20} color="#10b981" />,
      title: "Security & Zero Trust",
      desc: "Rigorous OWASP hardening, mTLS microservice auth, secret rotation, and strict RBAC authorization."
    },
    {
      icon: <GitBranch size={20} color="#f59e0b" />,
      title: "DevOps & CI/CD Cadence",
      desc: "Automated GitHub Actions runners, multi-stage Docker builds, and zero-downtime canary rollouts."
    }
  ];

  return (
    <section
      id="skills"
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
          Competencies & Toolkit
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: 'var(--text-main)',
          marginBottom: '1rem'
        }}>
          Deep expertise across the modern full-stack spectrum.
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '640px' }}>
          From sub-second frontend rendering pipelines down to distributed database partitioning and container orchestration.
        </p>
      </div>

      {/* High-level Pillars */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.25rem',
        marginBottom: '3rem'
      }}>
        {expertiseHighlights.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {item.icon}
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Skills breakdown columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '2rem'
      }}>
        {skills.map((category) => (
          <div
            key={category.title}
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {getCategoryIcon(category.icon)}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                {category.title}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {category.skills.map((skill) => (
                <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {skill.name}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress track */}
                  <div style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'var(--gradient-brand)',
                      borderRadius: '3px'
                    }} />
                  </div>

                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    {skill.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
