import * as React from 'react';

/**
 * The engraved divider that opens each CV section — a tracked small-caps
 * label, optional ordinal, and a hairline rule filling the row.
 *
 * @startingPoint section="Core" subtitle="Small-caps section divider with rule" viewport="700x150"
 */
export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Small-caps eyebrow, e.g. "Experience". */
  label: React.ReactNode;
  /** Optional ordinal in the accent ink, e.g. "01" or "§". */
  ordinal?: React.ReactNode;
  /** Optional display title set below the label. */
  title?: React.ReactNode;
  /** Draw the hairline rule. @default true */
  rule?: boolean;
}

export function SectionHeader(props: SectionHeaderProps): JSX.Element;
