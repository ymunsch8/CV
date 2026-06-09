import React from 'react';

/**
 * Experience — one entry in a CV timeline: role, organisation, dates,
 * location, an optional summary line, achievement bullets, and tags.
 * Designed to stack in a list under a SectionHeader.
 */
export function Experience({
  role,
  org,
  orgHref,
  dates,
  location,
  summary,
  bullets = [],
  tags,
  style,
  ...rest
}) {
  return (
    <article style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      columnGap: 'var(--space-5)',
      rowGap: 'var(--space-2)',
      padding: 'var(--space-5) 0',
      borderTop: '1px solid var(--rule)',
      ...style,
    }} {...rest}>
      <div style={{ minWidth: 0 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'var(--fs-h3)',
          lineHeight: 1.15,
          color: 'var(--text-strong)',
          margin: 0,
        }}>{role}</h3>
        {org && (
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--text-body)', marginTop: '2px' }}>
            {orgHref
              ? <a href={orgHref} style={{ color: 'var(--accent)' }}>{org}</a>
              : <span style={{ fontStyle: 'italic' }}>{org}</span>}
          </div>
        )}
      </div>

      <div style={{ textAlign: 'right', flex: 'none', paddingTop: '4px' }}>
        {dates && <div style={{ fontFamily: 'var(--font-serif)', fontFeatureSettings: "'onum' 1", fontSize: 'var(--fs-fine)', letterSpacing: '0.02em', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{dates}</div>}
        {location && <div style={{ fontFamily: 'var(--font-label)', fontVariant: 'small-caps', letterSpacing: '0.12em', fontSize: '0.72rem', color: 'var(--text-faint)', marginTop: '3px' }}>{location}</div>}
      </div>

      {(summary || bullets.length > 0 || tags) && (
        <div style={{ gridColumn: '1 / -1', marginTop: 'var(--space-1)' }}>
          {summary && (
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.0625rem', lineHeight: 1.55, color: 'var(--text-body)', margin: '0 0 var(--space-3)', maxWidth: 'var(--measure)' }}>{summary}</p>
          )}
          {bullets.length > 0 && (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', maxWidth: 'var(--measure)' }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ position: 'relative', paddingLeft: 'var(--space-5)', fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-body)', lineHeight: 1.55, color: 'var(--text-body)' }}>
                  <span style={{ position: 'absolute', left: 'var(--space-2)', top: 0, color: 'var(--accent)' }} aria-hidden="true">&mdash;</span>
                  {b}
                </li>
              ))}
            </ul>
          )}
          {tags && tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
              {tags.map((t, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--font-label)', fontVariant: 'small-caps', fontSize: '0.78rem',
                  letterSpacing: '0.06em', color: 'var(--text-muted)',
                  padding: '3px 11px 4px', border: '1px solid var(--rule)', borderRadius: 'var(--radius-pill)',
                }}>{t}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
