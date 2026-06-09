import * as React from 'react';

/**
 * A framed note set apart from running text. `note` is a bordered panel with
 * a small-caps title; `quote` is a pull-quote with a hanging mark; `aside` is
 * a quiet sunken panel for marginalia.
 *
 * @startingPoint section="Core" subtitle="Callout — note, pull-quote, or aside" viewport="700x220"
 */
export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "note" */
  variant?: 'note' | 'quote' | 'aside';
  /** Small-caps title (note / aside variants). */
  title?: React.ReactNode;
  /** Attribution line for the quote variant. */
  cite?: React.ReactNode;
  /** Phosphor glyph name shown beside the title. */
  icon?: string;
  children?: React.ReactNode;
}

export function Callout(props: CalloutProps): JSX.Element;
