import React from 'react';

/**
 * SectionHeader — the engraved divider that opens each CV section. A tracked
 * small-caps label, optional ordinal, and a hairline rule that fills the row.
 */
export function SectionHeader({
  label,
  ordinal,
  title,
  rule = true,
  style,
  ...rest
}) {
  return (
    <header style={{ marginBottom: 'var(--space-5)', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-4)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '10px', flex: 'none' }}>
          {ordinal != null && (
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.95rem',
              fontFeatureSettings: "'onum' 1",
              color: 'var(--accent)',
            }}>{ordinal}</span>
          )}
          <span style={{
            fontFamily: 'var(--font-label)',
            fontVariant: 'small-caps',
            fontWeight: 600,
            letterSpacing: 'var(--tracking-label)',
            fontSize: 'var(--fs-label)',
            color: 'var(--text-muted)',
          }}>{label}</span>
        </span>
        {rule && <span style={{ flex: 1, borderTop: '1px solid var(--rule)', transform: 'translateY(-2px)' }} />}
      </div>
      {title && (
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'var(--fs-h2)',
          lineHeight: 'var(--lh-snug)',
          color: 'var(--text-strong)',
          margin: 'var(--space-3) 0 0',
        }}>{title}</h2>
      )}
    </header>
  );
}
