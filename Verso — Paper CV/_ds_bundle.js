/* @ds-bundle: {"format":3,"namespace":"VersoPaperCV_8e5e2c","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Callout","sourcePath":"components/callouts/Callout.jsx"},{"name":"ContactLink","sourcePath":"components/contact/ContactLink.jsx"},{"name":"Experience","sourcePath":"components/experience/Experience.jsx"},{"name":"SectionHeader","sourcePath":"components/section/SectionHeader.jsx"},{"name":"SkillTag","sourcePath":"components/tags/SkillTag.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"a1e61ba66edf","components/callouts/Callout.jsx":"866e4d1de467","components/contact/ContactLink.jsx":"fc22331035e9","components/experience/Experience.jsx":"fbbb4f3b931b","components/section/SectionHeader.jsx":"b6e8bbf017fa","components/tags/SkillTag.jsx":"388cfd054516"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VersoPaperCV_8e5e2c = window.VersoPaperCV_8e5e2c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Verso's pressed-ink action. Small-caps serif label, near-flat
 * surface, warm press feedback. Renders an <a> when `href` is provided,
 * otherwise a <button>. Icons are Phosphor glyph names (e.g. "download-simple").
 */
function Button({
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
    sm: {
      padding: '7px 14px',
      fontSize: '0.72rem',
      gap: '7px',
      icon: '0.95rem'
    },
    md: {
      padding: '10px 20px',
      fontSize: '0.8125rem',
      gap: '9px',
      icon: '1.05rem'
    },
    lg: {
      padding: '14px 28px',
      fontSize: '0.9rem',
      gap: '11px',
      icon: '1.2rem'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1.5px solid var(--accent)',
      boxShadow: 'var(--shadow-raise)'
    },
    secondary: {
      background: 'var(--surface-raised)',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--rule-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      border: '1.5px solid transparent',
      boxShadow: 'none'
    }
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
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-deep)';
    if (variant === 'secondary') {
      e.currentTarget.style.background = 'var(--surface-page)';
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.color = 'var(--accent)';
    }
    if (variant === 'ghost') e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 8%, transparent)';
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = v.background;
    e.currentTarget.style.borderColor = v.border.split(' ').slice(2).join(' ');
    e.currentTarget.style.color = v.color;
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(1.5px)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(0)';
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ph-${icon}`,
    style: {
      fontSize: s.icon,
      lineHeight: 0
    },
    "aria-hidden": "true"
  }), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ph-${iconRight}`,
    style: {
      fontSize: s.icon,
      lineHeight: 0
    },
    "aria-hidden": "true"
  }));
  const handlers = {
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onClick: disabled ? undefined : onClick
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base
    }, handlers, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    disabled: disabled
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/callouts/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — a framed note set apart from the running text. `note` is a
 * bordered panel with a small-caps title; `quote` is a pull-quote with a
 * hanging mark; `aside` is a quiet sunken panel for marginalia.
 */
function Callout({
  variant = 'note',
  title,
  cite,
  icon,
  children,
  style,
  ...rest
}) {
  if (variant === 'quote') {
    return /*#__PURE__*/React.createElement("figure", _extends({
      style: {
        margin: 0,
        padding: 'var(--space-4) 0',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("blockquote", {
      style: {
        position: 'relative',
        margin: 0,
        paddingLeft: 'var(--space-6)',
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontStyle: 'italic',
        fontSize: '1.75rem',
        lineHeight: 1.3,
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: '-0.1em',
        fontSize: '3.5rem',
        lineHeight: 1,
        color: 'var(--accent)',
        fontFamily: 'var(--font-display)'
      },
      "aria-hidden": "true"
    }, "\u201C"), children), cite && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        marginTop: 'var(--space-3)',
        paddingLeft: 'var(--space-6)',
        fontFamily: 'var(--font-label)',
        fontVariant: 'small-caps',
        letterSpacing: '0.12em',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }
    }, "\u2014\u2002", cite));
  }
  const isAside = variant === 'aside';
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      padding: 'var(--space-5)',
      background: isAside ? 'var(--surface-sunken)' : 'var(--surface-raised)',
      border: isAside ? 'none' : '1px solid var(--rule)',
      borderLeft: isAside ? '3px solid var(--accent)' : '1px solid var(--rule)',
      borderRadius: 'var(--radius-1)',
      boxShadow: isAside ? 'none' : 'var(--shadow-raise)',
      ...style
    }
  }, rest), (title || icon) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: 'var(--space-2)'
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: `ph-light ph-${icon}`,
    style: {
      fontSize: '1.1rem',
      color: 'var(--accent)',
      lineHeight: 0
    },
    "aria-hidden": "true"
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontVariant: 'small-caps',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-label)',
      fontSize: 'var(--fs-label)',
      color: 'var(--text-muted)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/callouts/Callout.jsx", error: String((e && e.message) || e) }); }

// components/contact/ContactLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ContactLink — an icon + label pair for email, phone, location, and social
 * profiles. `inline` renders a quiet text link with a leading Phosphor glyph;
 * `block` renders a bordered row with a small-caps label over the value.
 */
function ContactLink({
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
    return /*#__PURE__*/React.createElement(Tag, _extends({
      href: href,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-3) var(--space-4)',
        border: '1px solid var(--rule)',
        borderRadius: 'var(--radius-1)',
        background: 'var(--surface-raised)',
        textDecoration: 'none',
        transition: 'border-color var(--dur) var(--ease-paper)',
        ...style
      },
      onMouseEnter: e => {
        e.currentTarget.style.borderColor = 'var(--accent)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.borderColor = 'var(--rule)';
      }
    }, rest), /*#__PURE__*/React.createElement("i", {
      className: `ph-light ph-${icon}`,
      style: {
        fontSize: '1.35rem',
        color: 'var(--accent)',
        lineHeight: 0
      },
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1px',
        minWidth: 0
      }
    }, label && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-label)',
        fontVariant: 'small-caps',
        letterSpacing: '0.14em',
        fontSize: '0.7rem',
        color: 'var(--text-faint)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: '1rem',
        color: 'var(--text-strong)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, value)));
  }
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-serif)',
      fontSize: '1rem',
      color: 'var(--text-body)',
      textDecoration: 'none',
      transition: 'color var(--dur) var(--ease-paper)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--text-body)';
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `ph-light ph-${icon}`,
    style: {
      fontSize: '1.15rem',
      color: 'var(--accent)',
      lineHeight: 0
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, value || label));
}
Object.assign(__ds_scope, { ContactLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/contact/ContactLink.jsx", error: String((e && e.message) || e) }); }

// components/experience/Experience.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Experience — one entry in a CV timeline: role, organisation, dates,
 * location, an optional summary line, achievement bullets, and tags.
 * Designed to stack in a list under a SectionHeader.
 */
function Experience({
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
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      columnGap: 'var(--space-5)',
      rowGap: 'var(--space-2)',
      padding: 'var(--space-5) 0',
      borderTop: '1px solid var(--rule)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-h3)',
      lineHeight: 1.15,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, role), org && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.05rem',
      color: 'var(--text-body)',
      marginTop: '2px'
    }
  }, orgHref ? /*#__PURE__*/React.createElement("a", {
    href: orgHref,
    style: {
      color: 'var(--accent)'
    }
  }, org) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic'
    }
  }, org))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flex: 'none',
      paddingTop: '4px'
    }
  }, dates && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontFeatureSettings: "'onum' 1",
      fontSize: 'var(--fs-fine)',
      letterSpacing: '0.02em',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, dates), location && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontVariant: 'small-caps',
      letterSpacing: '0.12em',
      fontSize: '0.72rem',
      color: 'var(--text-faint)',
      marginTop: '3px'
    }
  }, location)), (summary || bullets.length > 0 || tags) && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: 'var(--space-1)'
    }
  }, summary && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '1.0625rem',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: '0 0 var(--space-3)',
      maxWidth: 'var(--measure)'
    }
  }, summary), bullets.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      maxWidth: 'var(--measure)'
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: 'var(--space-5)',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 'var(--space-2)',
      top: 0,
      color: 'var(--accent)'
    },
    "aria-hidden": "true"
  }, "\u2014"), b))), tags && tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-4)'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-label)',
      fontVariant: 'small-caps',
      fontSize: '0.78rem',
      letterSpacing: '0.06em',
      color: 'var(--text-muted)',
      padding: '3px 11px 4px',
      border: '1px solid var(--rule)',
      borderRadius: 'var(--radius-pill)'
    }
  }, t)))));
}
Object.assign(__ds_scope, { Experience });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/experience/Experience.jsx", error: String((e && e.message) || e) }); }

// components/section/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — the engraved divider that opens each CV section. A tracked
 * small-caps label, optional ordinal, and a hairline rule that fills the row.
 */
function SectionHeader({
  label,
  ordinal,
  title,
  rule = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      marginBottom: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '10px',
      flex: 'none'
    }
  }, ordinal != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.95rem',
      fontFeatureSettings: "'onum' 1",
      color: 'var(--accent)'
    }
  }, ordinal), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontVariant: 'small-caps',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-label)',
      fontSize: 'var(--fs-label)',
      color: 'var(--text-muted)'
    }
  }, label)), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: '1px solid var(--rule)',
      transform: 'translateY(-2px)'
    }
  })), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-strong)',
      margin: 'var(--space-3) 0 0'
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/section/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/tags/SkillTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SkillTag — a small typographic chip for skills, tools, and disciplines.
 * Pill shape, hairline ink border, serif small-caps. Optional `level` (1–5)
 * renders filled marks like a proficiency rating from a printed catalogue.
 */
function SkillTag({
  children,
  variant = 'outline',
  accent = false,
  level,
  style,
  ...rest
}) {
  const variants = {
    outline: {
      background: 'transparent',
      color: accent ? 'var(--accent)' : 'var(--text-body)',
      border: `1px solid ${accent ? 'var(--accent)' : 'var(--rule)'}`
    },
    solid: {
      background: accent ? 'var(--accent)' : 'var(--ink-700)',
      color: 'var(--paper-0)',
      border: '1px solid transparent'
    },
    ghost: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.outline;
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '4px 12px 5px',
    fontFamily: 'var(--font-label)',
    fontSize: '0.8125rem',
    fontWeight: 500,
    fontVariant: 'small-caps',
    letterSpacing: '0.06em',
    lineHeight: 1.1,
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap',
    ...v,
    ...style
  };
  const dotColor = variant === 'solid' ? 'var(--paper-0)' : accent ? 'var(--accent)' : 'var(--ink-500)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", null, children), level != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '3px'
    },
    "aria-label": `level ${level} of 5`
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: n <= level ? dotColor : 'transparent',
      border: `1px solid ${dotColor}`,
      opacity: n <= level ? 1 : 0.4
    }
  }))));
}
Object.assign(__ds_scope, { SkillTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tags/SkillTag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.ContactLink = __ds_scope.ContactLink;

__ds_ns.Experience = __ds_scope.Experience;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SkillTag = __ds_scope.SkillTag;

})();
