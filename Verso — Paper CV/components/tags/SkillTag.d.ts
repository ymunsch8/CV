import * as React from 'react';

/**
 * A small typographic chip for skills, tools, and disciplines. Pill shape,
 * hairline ink border, serif small-caps. Optional proficiency `level` 1–5.
 *
 * @startingPoint section="Core" subtitle="Skill chip with optional proficiency marks" viewport="700x150"
 */
export interface SkillTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "outline" */
  variant?: 'outline' | 'solid' | 'ghost';
  /** Ink the chip with the active accent instead of neutral ink. */
  accent?: boolean;
  /** Proficiency 1–5 — renders filled marks after the label. */
  level?: 1 | 2 | 3 | 4 | 5;
}

export function SkillTag(props: SkillTagProps): JSX.Element;
