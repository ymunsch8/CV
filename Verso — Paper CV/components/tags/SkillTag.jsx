import React from 'react';

/**
 * SkillTag — a small typographic chip for skills, tools, and disciplines.
 * Pill shape, hairline ink border, serif small-caps. Optional `level` (1–5)
 * renders filled marks like a proficiency rating from a printed catalogue.
 */
export function SkillTag({
  children,
  variant = 'outline',
  accent = false,
  level,
  style,
  ...rest
}) {
  const variants = {
    outline: {
      background: 'transparent',
      color: accent ? 'var(--accent)' : 'var(--text-body)',
      border: `1px solid ${accent ? 'var(--accent)' : 'var(--rule)'}`,
    },
    solid: {
      background: accent ? 'var(--accent)' : 'var(--ink-700)',
      color: 'var(--paper-0)',
      border: '1px solid transparent',
    },
    ghost: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      border: '1px solid transparent',
    },
  };
  const v = variants[variant] || variants.outline;

  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '4px 12px 5px',
    fontFamily: 'var(--font-label)',
    fontSize: '0.8125rem',
    fontWeight: 500,
    fontVariant: 'small-caps',
    letterSpacing: '0.06em',
    lineHeight: 1.1,
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap',
    ...v,
    ...style,
  };

  const dotColor = variant === 'solid' ? 'var(--paper-0)' : (accent ? 'var(--accent)' : 'var(--ink-500)');

  return (
    <span style={wrap} {...rest}>
      <span>{children}</span>
      {level != null && (
        <span style={{ display: 'inline-flex', gap: '3px' }} aria-label={`level ${level} of 5`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: n <= level ? dotColor : 'transparent',
                border: `1px solid ${dotColor}`,
                opacity: n <= level ? 1 : 0.4,
              }}
            />
          ))}
        </span>
      )}
    </span>
  );
}
