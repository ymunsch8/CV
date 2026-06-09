import * as React from 'react';

/**
 * An icon + label pair for email, phone, location, and social profiles.
 * Uses Phosphor glyphs (load `@phosphor-icons/web`).
 *
 * @startingPoint section="Core" subtitle="Contact link — inline or bordered block" viewport="700x150"
 */
export interface ContactLinkProps extends React.HTMLAttributes<HTMLElement> {
  /** Phosphor glyph name, e.g. "envelope-simple", "map-pin", "github-logo". */
  icon: string;
  /** Small-caps label shown in the block variant, e.g. "Email". */
  label?: React.ReactNode;
  /** The visible value, e.g. "eleanor@verso.press". */
  value?: React.ReactNode;
  href?: string;
  /** @default "inline" */
  variant?: 'inline' | 'block';
}

export function ContactLink(props: ContactLinkProps): JSX.Element;
