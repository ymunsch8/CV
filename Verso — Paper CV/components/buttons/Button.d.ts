import * as React from 'react';

/**
 * Verso's pressed-ink action button. Small-caps serif label, near-flat
 * surface, warm press feedback. Renders an <a> when `href` is set.
 *
 * @startingPoint section="Core" subtitle="Pressed-ink button — primary / secondary / ghost" viewport="700x160"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Visual weight. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Phosphor glyph name shown before the label, e.g. "download-simple". */
  icon?: string;
  /** Phosphor glyph name shown after the label. */
  iconRight?: string;
  /** Render as a link to this href. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button(props: ButtonProps): JSX.Element;
