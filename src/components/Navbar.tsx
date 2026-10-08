import React from 'react';
import { Sun, Moon, Mail, Menu, X, Terminal } from 'lucide-react';
import { Icons } from './Icons';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      backgroundColor: theme === 'dark' ? 'rgba(11, 15, 25, 0.85)' : 'rgba(255, 255, 255, 0.88)',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'background-color 0.3s, border-color 0.3s',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0.85rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo / Brand */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'var(--gradient-brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)'
          }}>
            <Terminal size={20} strokeWidth={2.5} />
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
              Alex<span style={{ color: 'var(--accent-cyan)' }}>Rivera</span>
            </span>
            <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '-3px' }}>
              Lead Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '0.5rem', alignItems: 'center' }} className="desktop-nav">
          <style>{`
            @media (min-width: 768px) {
              .desktop-nav { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  padding: '0.5rem 0.85rem',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  borderRadius: '8px',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  backgroundColor: isActive ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-main)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (Socials + Theme toggle + Contact CTA) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'none', alignItems: 'center', gap: '0.4rem' }} className="desktop-socials">
            <style>{`
              @media (min-width: 900px) {
                .desktop-socials { display: flex !important; }
              }
            `}</style>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{
                padding: '0.45rem',
                borderRadius: '8px',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Icons.Github />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{
                padding: '0.45rem',
                borderRadius: '8px',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Icons.Linkedin />
            </a>
          </div>

          {/* Theme switcher button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: '9px',
              padding: '0.48rem',
              cursor: 'pointer',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s, border-color 0.2s'
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 1rem',
              fontSize: '0.88rem',
              fontWeight: 600,
              borderRadius: '9px',
              background: 'var(--gradient-brand)',
              color: '#fff',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.25)',
              transition: 'transform 0.2s, opacity 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <Mail size={15} />
            <span>Hire Me</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0.4rem',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          padding: '1.2rem 1.5rem 1.8rem',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: theme === 'dark' ? '#0b0f19' : '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.5rem 0',
                color: activeSection === link.href.substring(1) ? 'var(--accent-cyan)' : 'var(--text-main)',
                borderBottom: '1px solid var(--border-subtle)',
                textDecoration: 'none'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
              LinkedIn
            </a>
            <a href="mailto:alex.rivera.dev@example.com" style={{ color: 'var(--accent-cyan)' }}>
              alex.rivera.dev@example.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
