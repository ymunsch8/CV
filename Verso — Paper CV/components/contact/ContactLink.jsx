import React from 'react';

/**
 * ContactLink — an icon + label pair for email, phone, location, and social
 * profiles. `inline` renders a quiet text link with a leading Phosphor glyph;
 * `block` renders a bordered row with a small-caps label over the value.
 */
export function ContactLink({
  icon,
  label,
  value,
  href,
  variant = 'inline',
  style,
  ...rest
}) {
  if (variant === 'block') {
    const Tag = href ? 'a' : 'div';
    return (
      <Tag
        href={href}
        style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
          padding: 'var(--space-3) var(--space-4)',
          border: '1px solid var(--rule)', borderRadius: 'var(--radius-1)',
          background: 'var(--surface-raised)', textDecoration: 'none',
          transition: 'border-color var(--dur) var(--ease-paper)',
          ...style,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; }}
        {...rest}
      >
        <i className={`ph-light ph-${icon}`} style={{ fontSize: '1.35rem', color: 'var(--accent)', lineHeight: 0 }} aria-hidden="true" />
        <span style={{ display: 'flex', flexDirection: 'column', gap: '1px', minWidth: 0 }}>
          {label && <span style={{ fontFamily: 'var(--font-label)', fontVariant: 'small-caps', letterSpacing: '0.14em', fontSize: '0.7rem', color: 'var(--text-faint)' }}>{label}</span>}
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--text-strong)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</span>
        </span>
      </Tag>
    );
  }

  return (
    <a
      href={href}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontFamily: 'var(--font-serif)', fontSize: '1rem',
        color: 'var(--text-body)', textDecoration: 'none',
        transition: 'color var(--dur) var(--ease-paper)',
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-body)'; }}
      {...rest}
    >
      <i className={`ph-light ph-${icon}`} style={{ fontSize: '1.15rem', color: 'var(--accent)', lineHeight: 0 }} aria-hidden="true" />
      <span>{value || label}</span>
    </a>
  );
}
