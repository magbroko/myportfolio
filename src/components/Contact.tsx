import { useState, type FormEvent } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { FadeInView } from './FadeInView';
import { contactInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${contactInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Github, label: 'GitHub', value: 'magbroko', href: contactInfo.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'marvelous-agbroko', href: contactInfo.linkedIn },
  ];

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '8rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <FadeInView>
          <span className="section-number">04 — CONTACT</span>
        </FadeInView>

        {/* Editorial heading */}
        <FadeInView delay={0.1}>
          <div style={{ marginBottom: '1.5rem' }}>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                fontWeight: 300,
                color: 'var(--platinum)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Let's Build
            </div>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--gold)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Something Great
            </div>
          </div>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              letterSpacing: '0.02em',
              marginBottom: '4rem',
            }}
          >
            Open to frontend roles and freelance collaborations.
          </p>
        </FadeInView>

        {/* Contact links row */}
        <FadeInView delay={0.15}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '3rem',
              marginBottom: '5rem',
            }}
          >
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={`${label}: ${value}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                  cursor: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Icon size={16} />
                <div>
                  <div
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '0.15rem',
                      opacity: 0.6,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.82rem',
                    }}
                  >
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </FadeInView>

        {/* Contact form */}
        <FadeInView delay={0.2}>
          <div style={{ maxWidth: '560px' }}>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                color: 'var(--gold)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
            >
              Send a Message
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="gold-input"
                  aria-label="Your name"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="gold-input"
                  aria-label="Your email"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={5}
                  className="gold-input"
                  aria-label="Your message"
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn-ghost"
                  style={{ padding: '0.9rem 2.5rem' }}
                >
                  {submitted ? 'Opening mail client...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
