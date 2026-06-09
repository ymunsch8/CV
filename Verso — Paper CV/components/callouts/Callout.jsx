import React from 'react';

/**
 * Callout — a framed note set apart from the running text. `note` is a
 * bordered panel with a small-caps title; `quote` is a pull-quote with a
 * hanging mark; `aside` is a quiet sunken panel for marginalia.
 */
export function Callout({
  variant = 'note',
  title,
  cite,
  icon,
  children,
  style,
  ...rest
}) {
  if (variant === 'quote') {
    return (
      <figure style={{ margin: 0, padding: 'var(--space-4) 0', ...style }} {...rest}>
        <blockquote style={{
          position: 'relative', margin: 0, paddingLeft: 'var(--space-6)',
          fontFamily: 'var(--font-display)', fontWeight: 500, fontStyle: 'italic',
          fontSize: '1.75rem', lineHeight: 1.3, color: 'var(--text-strong)',
        }}>
          <span style={{ position: 'absolute', left: 0, top: '-0.1em', fontSize: '3.5rem', lineHeight: 1, color: 'var(--accent)', fontFamily: 'var(--font-display)' }} aria-hidden="true">&ldquo;</span>
          {children}
        </blockquote>
        {cite && (
          <figcaption style={{ marginTop: 'var(--space-3)', paddingLeft: 'var(--space-6)', fontFamily: 'var(--font-label)', fontVariant: 'small-caps', letterSpacing: '0.12em', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            &mdash;&ensp;{cite}
          </figcaption>
        )}
      </figure>
    );
  }

  const isAside = variant === 'aside';
  return (
    <aside style={{
      padding: 'var(--space-5)',
      background: isAside ? 'var(--surface-sunken)' : 'var(--surface-raised)',
      border: isAside ? 'none' : '1px solid var(--rule)',
      borderLeft: isAside ? '3px solid var(--accent)' : '1px solid var(--rule)',
      borderRadius: 'var(--radius-1)',
      boxShadow: isAside ? 'none' : 'var(--shadow-raise)',
      ...style,
    }} {...rest}>
      {(title || icon) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-2)' }}>
          {icon && <i className={`ph-light ph-${icon}`} style={{ fontSize: '1.1rem', color: 'var(--accent)', lineHeight: 0 }} aria-hidden="true" />}
          {title && <span style={{ fontFamily: 'var(--font-label)', fontVariant: 'small-caps', fontWeight: 600, letterSpacing: 'var(--tracking-label)', fontSize: 'var(--fs-label)', color: 'var(--text-muted)' }}>{title}</span>}
        </div>
      )}
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-body)', lineHeight: 1.55, color: 'var(--text-body)' }}>
        {children}
      </div>
    </aside>
  );
}
