import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Sparkles, Copy, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: '5rem 1.5rem 4rem',
        maxWidth: '1240px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Background ambient decorative glows */}
      <div
        className="glow-bubble"
        style={{
          width: '450px',
          height: '450px',
          background: 'rgba(99, 102, 241, 0.15)',
          top: '-50px',
          left: '10%'
        }}
      />
      <div
        className="glow-bubble"
        style={{
          width: '400px',
          height: '400px',
          background: 'rgba(6, 182, 212, 0.12)',
          top: '80px',
          right: '5%'
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        {/* Availability Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', alignSelf: 'flex-start' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.95rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            fontSize: '0.85rem',
            fontWeight: 500,
            color: '#10b981'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981'
            }} />
            {profile.status}
          </div>
        </div>

        {/* Main Header / Intro */}
        <div style={{ maxWidth: '880px' }}>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'var(--accent-cyan)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Sparkles size={18} /> Hello, I'm {profile.name}
          </p>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--text-main)',
            margin: '0 0 1.25rem 0'
          }}>
            Engineering <span className="text-gradient">modern scale</span> with surgical UI elegance.
          </h1>
          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            maxWidth: '750px',
            margin: 0
          }}>
            {profile.tagline} {profile.shortBio}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.85rem 1.65rem',
              borderRadius: '12px',
              background: 'var(--gradient-brand)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1rem',
              boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.3)';
            }}
          >
            <span>Explore Work</span>
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.85rem 1.5rem',
              borderRadius: '12px',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-main)',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'background-color 0.2s, border-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            <span>Get in Touch</span>
          </a>

          {/* Email quick copy */}
          <button
            onClick={copyEmail}
            title="Click to copy email address"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.25rem',
              borderRadius: '12px',
              border: '1px dashed var(--border-subtle)',
              backgroundColor: 'transparent',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-indigo)';
              e.currentTarget.style.color = 'var(--text-main)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
            <span>{copied ? 'Copied to clipboard!' : profile.email}</span>
          </button>
        </div>

        {/* Highlight Stats Row */}
        <div
          className="glass-panel"
          style={{
            marginTop: '1.5rem',
            padding: '1.75rem 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <span style={{
                fontSize: '2.4rem',
                fontWeight: 800,
                color: 'var(--text-main)',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}>
                <span className="text-gradient">{stat.value}</span>
              </span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
