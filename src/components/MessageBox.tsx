import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Send,
  Lock,
  Unlock,
  Trash2,
  CheckCircle2,
  User,
  Shield,
  Clock,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import {
  type VisitorMessage,
  getStoredMessages,
  saveMessage,
  deleteMessage,
  clearAllMessages,
  resetDefaultMessages,
  isAdminLoggedIn,
  setAdminLoggedIn,
  ADMIN_PIN
} from '../data/messageStore';

export const MessageBox: React.FC = () => {
  const [messages, setMessages] = useState<VisitorMessage[]>([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');
  const [successNotice, setSuccessNotice] = useState(false);

  // Admin state
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  useEffect(() => {
    setMessages(getStoredMessages());
    setIsAdmin(isAdminLoggedIn());
  }, []);

  const handlePostMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    saveMessage({
      senderName: name.trim(),
      senderRole: role.trim() || undefined,
      content: content.trim(),
      isPublic: true
    });

    setMessages(getStoredMessages());
    setName('');
    setRole('');
    setContent('');
    setSuccessNotice(true);
    setTimeout(() => setSuccessNotice(false), 3500);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === ADMIN_PIN) {
      setAdminLoggedIn(true);
      setIsAdmin(true);
      setShowPinModal(false);
      setPinInput('');
      setPinError('');
    } else {
      setPinError('Incorrect passcode. Default passcode is: ' + ADMIN_PIN);
    }
  };

  const handleAdminLogout = () => {
    setAdminLoggedIn(false);
    setIsAdmin(false);
  };

  const handleDelete = (id: string) => {
    deleteMessage(id);
    setMessages(getStoredMessages());
  };

  const handleClearAll = () => {
    if (confirm('Clear all messages from the board?')) {
      clearAllMessages();
      setMessages([]);
    }
  };

  const handleResetDefaults = () => {
    resetDefaultMessages();
    setMessages(getStoredMessages());
  };

  return (
    <section
      id="messages"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Section Header */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: '1.5rem',
        marginBottom: '2.5rem'
      }}>
        <div>
          <p style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--accent-cyan)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <MessageSquare size={16} /> Community & Visitor Board
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--text-main)',
            marginBottom: '0.6rem'
          }}>
            Drop a message into the box.
          </h2>
          <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', maxWidth: '640px', margin: 0 }}>
            Leave feedback, quick questions, or say hello. Anyone can drop a message, and site administrators can manage the inbox.
          </p>
        </div>

        {/* Admin status pill / button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isAdmin ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '0.82rem',
                color: '#10b981',
                fontWeight: 600
              }}>
                <Shield size={14} /> Admin Mode Active
              </span>
              <button
                onClick={handleAdminLogout}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-muted)',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                <Lock size={13} /> Exit Admin
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowPinModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 1rem',
                borderRadius: '9px',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-violet)';
                e.currentTarget.style.color = 'var(--text-main)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              <Lock size={15} color="#8b5cf6" />
              <span>Admin Access</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Left Drop Box Form / Right Live Feed */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '2rem'
      }}>
        {/* Drop Box Input Form */}
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <Sparkles size={18} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
              Drop Your Note
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Say hello, share feedback on my work, or request an intro.
          </p>

          {successNotice && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10b981',
              fontSize: '0.88rem',
              fontWeight: 600,
              marginBottom: '1.25rem'
            }}>
              <CheckCircle2 size={18} />
              <span>Message dropped into the box successfully!</span>
            </div>
          )}

          <form onSubmit={handlePostMessage} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                Your Name *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Reed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                Role or Organization (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Designer @ Acme Corp, Founder, Student"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.7rem 0.9rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                Message *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Write your note, feedback, or greeting..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.7rem 0.9rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.4rem',
                borderRadius: '9px',
                background: 'var(--gradient-brand)',
                color: '#fff',
                fontSize: '0.92rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.25)',
                marginTop: '0.25rem',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <Send size={16} />
              <span>Drop Message</span>
            </button>
          </form>
        </div>

        {/* Live Messages List / Admin Inbox */}
        <div className="glass-panel" style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '620px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.25rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                {isAdmin ? 'Admin Inbox (Full Access)' : 'Message Feed'}
              </h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                {messages.length} message{messages.length === 1 ? '' : 's'} recorded
              </span>
            </div>

            {isAdmin && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={handleResetDefaults}
                  title="Reset to sample messages"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={12} /> Reset
                </button>
                <button
                  onClick={handleClearAll}
                  title="Clear all messages"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    cursor: 'pointer'
                  }}
                >
                  <Trash2 size={12} /> Clear
                </button>
              </div>
            )}
          </div>

          {/* Scrollable container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            overflowY: 'auto',
            paddingRight: '0.4rem',
            flex: 1
          }}>
            {messages.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                color: 'var(--text-dim)'
              }}>
                <MessageSquare size={36} style={{ opacity: 0.3, marginBottom: '0.5rem' }} />
                <p style={{ margin: 0, fontSize: '0.92rem' }}>No messages dropped yet.</p>
                <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.82rem' }}>Be the first one to drop a message in the box!</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    padding: '1.1rem 1.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '0.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2))',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)'
                      }}>
                        <User size={16} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                          {msg.senderName}
                        </h4>
                        {msg.senderRole && (
                          <span style={{ fontSize: '0.78rem', color: 'var(--accent-indigo)', fontWeight: 500 }}>
                            {msg.senderRole}
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.74rem',
                        color: 'var(--text-dim)'
                      }}>
                        <Clock size={12} /> {msg.timestamp}
                      </span>

                      {/* Admin delete button */}
                      {isAdmin && (
                        <button
                          onClick={() => handleDelete(msg.id)}
                          title="Delete message (Admin only)"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#ef4444',
                            cursor: 'pointer',
                            padding: '0.2rem',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                      )}
                    </div>
                  </div>

                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    margin: 0,
                    whiteSpace: 'pre-wrap'
                  }}>
                    {msg.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Admin Passcode Modal */}
      {showPinModal && (
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
          onClick={() => setShowPinModal(false)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '420px',
              width: '100%',
              backgroundColor: 'var(--bg-secondary)',
              padding: '2rem',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-violet)'
              }}>
                <Shield size={20} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                Admin Authentication
              </h3>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Enter the admin passcode to unlock message inbox controls (deleting messages, clearing board).
            </p>

            <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                  Admin Passcode
                </label>
                <input
                  type="password"
                  autoFocus
                  placeholder="Enter passcode (default: admin123)"
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError('');
                  }}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: pinError ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {pinError && (
                  <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.35rem', display: 'block' }}>
                    {pinError}
                  </span>
                )}
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.4rem', display: 'block' }}>
                  Tip: Default passcode is <code>admin123</code>
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setShowPinModal(false)}
                  style={{
                    flex: 1,
                    padding: '0.7rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    background: 'transparent',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: '0.7rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'var(--gradient-brand)',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Unlock size={15} /> Unlock Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
