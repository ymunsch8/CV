import * as React from 'react';

/**
 * One entry in a CV timeline: role, organisation, dates, location, an
 * optional summary line, achievement bullets, and tags. Stacks in a list
 * under a SectionHeader; a hairline rule separates entries.
 *
 * @startingPoint section="CV" subtitle="Timeline / résumé experience entry" viewport="700x320"
 */
export interface ExperienceProps extends React.HTMLAttributes<HTMLElement> {
  role: React.ReactNode;
  org?: React.ReactNode;
  /** If set, the org becomes an accent link. */
  orgHref?: string;
  /** e.g. "2014 – Present". Renders with old-style figures. */
  dates?: React.ReactNode;
  location?: React.ReactNode;
  /** Italic standfirst line above the bullets. */
  summary?: React.ReactNode;
  /** Achievement lines, each prefixed with an em-dash mark. */
  bullets?: React.ReactNode[];
  /** Optional small-caps pill tags. */
  tags?: React.ReactNode[];
}

export function Experience(props: ExperienceProps): JSX.Element;
