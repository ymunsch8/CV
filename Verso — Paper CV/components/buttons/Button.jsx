import React from 'react';

/**
 * Button — Verso's pressed-ink action. Small-caps serif label, near-flat
 * surface, warm press feedback. Renders an <a> when `href` is provided,
 * otherwise a <button>. Icons are Phosphor glyph names (e.g. "download-simple").
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  type = 'button',
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '7px 14px', fontSize: '0.72rem', gap: '7px', icon: '0.95rem' },
    md: { padding: '10px 20px', fontSize: '0.8125rem', gap: '9px', icon: '1.05rem' },
    lg: { padding: '14px 28px', fontSize: '0.9rem', gap: '11px', icon: '1.2rem' },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1.5px solid var(--accent)',
      boxShadow: 'var(--shadow-raise)',
    },
    secondary: {
      background: 'var(--surface-raised)',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--rule-strong)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      border: '1.5px solid transparent',
      boxShadow: 'none',
    },
  };
  const v = variants[variant] || variants.primary;

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    fontFamily: 'var(--font-label)',
    fontSize: s.fontSize,
    fontWeight: 600,
    fontVariant: 'small-caps',
    letterSpacing: '0.14em',
    lineHeight: 1,
    textDecoration: 'none',
    borderRadius: 'var(--radius-1)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-paper), background var(--dur) var(--ease-paper), color var(--dur) var(--ease-paper), border-color var(--dur) var(--ease-paper)',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    ...v,
    ...style,
  };

  const onEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-deep)';
    if (variant === 'secondary') { e.currentTarget.style.background = 'var(--surface-page)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }
    if (variant === 'ghost') e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 8%, transparent)';
  };
  const onLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.background = v.background;
    e.currentTarget.style.borderColor = v.border.split(' ').slice(2).join(' ');
    e.currentTarget.style.color = v.color;
  };
  const onDown = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1.5px)'; };
  const onUp = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(0)'; };

  const inner = (
    <>
      {icon && <i className={`ph-bold ph-${icon}`} style={{ fontSize: s.icon, lineHeight: 0 }} aria-hidden="true" />}
      {children && <span>{children}</span>}
      {iconRight && <i className={`ph-bold ph-${iconRight}`} style={{ fontSize: s.icon, lineHeight: 0 }} aria-hidden="true" />}
    </>
  );

  const handlers = { onMouseEnter: onEnter, onMouseLeave: onLeave, onMouseDown: onDown, onMouseUp: onUp, onClick: disabled ? undefined : onClick };

  if (href && !disabled) {
    return <a href={href} style={base} {...handlers} {...rest}>{inner}</a>;
  }
  return <button type={type} style={base} disabled={disabled} {...handlers} {...rest}>{inner}</button>;
}
