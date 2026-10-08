import React, { useState } from 'react';
import { PORTFOLIO_DATA, type Project } from '../data/portfolioData';
import { ExternalLink, Filter, Check, Eye } from 'lucide-react';
import { Icons } from './Icons';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const categories = ['All', 'Full Stack', 'Frontend', 'Mobile & AI', 'Cloud / DevOps'] as const;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--accent-cyan)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem'
        }}>
          Featured Work & Architecture
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: 'var(--text-main)',
          marginBottom: '1rem'
        }}>
          Engineered for performance, built for scale.
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '640px' }}>
          Explore key selected systems, from distributed cloud observability backends to interactive generative AI workbenches.
        </p>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginTop: '1.75rem',
          alignItems: 'center'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dim)', fontSize: '0.85rem', marginRight: '0.5rem' }}>
            <Filter size={15} /> Filter:
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1.05rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  backgroundColor: isActive ? 'rgba(6, 182, 212, 0.15)' : 'var(--bg-secondary)',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: '2rem'
      }}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            {/* Project Image Banner */}
            <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', backgroundColor: '#020617' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                color: '#38bdf8',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {project.category}
              </div>

              {project.metrics && (
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  color: '#34d399',
                  border: '1px solid rgba(52, 211, 153, 0.25)',
                  backdropFilter: 'blur(6px)'
                }}>
                  {project.metrics}
                </div>
              )}
            </div>

            {/* Project Body */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '0.4rem'
              }}>
                {project.title}
              </h3>
              
              <p style={{
                fontSize: '0.86rem',
                fontWeight: 600,
                color: 'var(--accent-violet)',
                marginBottom: '0.85rem'
              }}>
                {project.tagline}
              </p>

              <p style={{
                fontSize: '0.92rem',
                color: 'var(--text-muted)',
                lineHeight: 1.55,
                marginBottom: '1.25rem',
                flex: 1
              }}>
                {project.description}
              </p>

              {/* Feature Bullets preview */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {project.features.slice(0, 2).map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <Check size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom Actions */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-cyan)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Eye size={15} /> Architecture Details
                </button>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Source Code"
                    style={{
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
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Live Demo"
                    style={{
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog for Project Details */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '650px',
              width: '100%',
              backgroundColor: 'var(--bg-secondary)',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '1.5rem'
              }}
            >
              ×
            </button>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)',
              letterSpacing: '0.06em'
            }}>
              {selectedProject.category} Case Study
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.3rem 0 0.5rem 0', color: 'var(--text-main)' }}>
              {selectedProject.title}
            </h3>
            <p style={{ color: 'var(--accent-violet)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              {selectedProject.tagline}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              Key Technical Milestones:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
              {selectedProject.features.map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Check size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              Technologies Deployed:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
              {selectedProject.technologies.map((t) => (
                <span key={t} style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)'
                }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  background: 'var(--gradient-brand)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                <Icons.Github /> GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
