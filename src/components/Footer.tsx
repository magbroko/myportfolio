export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--divider)',
        padding: 'clamp(1rem, 4vw, 2rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.08em',
          }}
        >
          © 2026 Marvelous Agbroko
        </span>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.08em',
          }}
        >
          Designed &amp; Built with precision
        </span>
      </div>
    </footer>
  );
}
