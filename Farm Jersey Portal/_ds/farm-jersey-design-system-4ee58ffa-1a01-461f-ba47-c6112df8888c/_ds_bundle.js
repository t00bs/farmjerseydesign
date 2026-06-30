/* @ds-bundle: {"format":3,"namespace":"FarmJerseyDesignSystem_4ee58f","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Link","sourcePath":"components/actions/Link.jsx"},{"name":"FeatureIcon","sourcePath":"components/brand/FeatureIcon.jsx"},{"name":"Footer","sourcePath":"components/brand/Footer.jsx"},{"name":"Shield","sourcePath":"components/brand/Logo.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Logo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Navbar","sourcePath":"components/brand/Navbar.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Collapse","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"c6c94e23b703","components/actions/Link.jsx":"338f28335a14","components/brand/FeatureIcon.jsx":"3d276580ec1b","components/brand/Footer.jsx":"872c92342909","components/brand/Logo.jsx":"fcb9482d7147","components/brand/Navbar.jsx":"8f6f19818cb4","components/data-display/Avatar.jsx":"74857f1e3841","components/data-display/Badge.jsx":"49c00c129111","components/data-display/Card.jsx":"6ce0104f7093","components/data-display/Table.jsx":"e85b5362e367","components/data-display/Tag.jsx":"ba536068c07f","components/feedback/Alert.jsx":"62fd9888c0c8","components/feedback/Modal.jsx":"3f5bbedc3f3c","components/feedback/Toast.jsx":"f3c52eb98895","components/feedback/Tooltip.jsx":"a2ef32cc7023","components/forms/Checkbox.jsx":"c4ab37b13ddd","components/forms/Input.jsx":"6a114df747f2","components/forms/Radio.jsx":"d89829443a7c","components/forms/Select.jsx":"b5aa4f20959c","components/forms/Switch.jsx":"5a2f443ce328","components/forms/Textarea.jsx":"ac719e709a89","components/navigation/Accordion.jsx":"ded3d1ec310d","components/navigation/Breadcrumbs.jsx":"79173346451c","components/navigation/Tabs.jsx":"8667c91760ad","ui_kits/website/ApplyScreen.jsx":"4b087dd3fa2c","ui_kits/website/HomeScreen.jsx":"81f8107cd5c2","ui_kits/website/ResourcesScreen.jsx":"5bcb10980c87"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FarmJerseyDesignSystem_4ee58f = window.FarmJerseyDesignSystem_4ee58f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Farm Jersey Button — square-cornered, high-contrast action.
 * Mirrors the live brand components: solid black primary, green accent,
 * outlined (1px black) secondary, and a bare text/link ghost.
 */
function Button({
  children,
  variant = "primary",
  size = "medium",
  fluid = false,
  iconLeading,
  iconTrailing,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    small: {
      padding: "6px 14px",
      fontSize: 14,
      minHeight: 36
    },
    medium: {
      padding: "10px 20px",
      fontSize: 16,
      minHeight: 44
    },
    large: {
      padding: "14px 26px",
      fontSize: 18,
      minHeight: 52
    }
  };
  const variants = {
    primary: {
      background: "var(--action-primary-bg)",
      color: "var(--action-primary-fg)",
      border: "var(--border-width) solid var(--action-primary-bg)"
    },
    accent: {
      background: "var(--action-accent-bg)",
      color: "var(--action-accent-fg)",
      border: "var(--border-width) solid var(--fj-green-deep)"
    },
    secondary: {
      background: "transparent",
      color: "var(--color-neutral-black)",
      border: "var(--border-width) solid var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-neutral-black)",
      border: "var(--border-width) solid transparent",
      padding: "10px 8px"
    }
  };
  const s = sizes[size] || sizes.medium;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: fluid ? "flex" : "inline-flex",
      width: fluid ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: s.fontSize,
      lineHeight: 1.4,
      letterSpacing: "-0.011em",
      padding: variant === "ghost" ? v.padding : s.padding,
      minHeight: s.minHeight,
      borderRadius: "var(--radius-none)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      whiteSpace: "nowrap",
      transition: "background-color .15s ease, color .15s ease, opacity .15s ease",
      ...v,
      ...style
    }
  }, rest), iconLeading && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: "1.25em"
    }
  }, iconLeading), children, iconTrailing && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: "1.25em"
    }
  }, iconTrailing));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Farm Jersey inline link. Default brand style is a black underlined link
 * with an optional trailing arrow (the "Link text →" pattern seen across the site).
 */
function Link({
  children,
  href = "#",
  variant = "default",
  iconTrailing,
  onClick,
  style,
  ...rest
}) {
  const variants = {
    default: {
      color: "var(--text-link)",
      textDecoration: "underline",
      textUnderlineOffset: "3px"
    },
    subtle: {
      color: "var(--text-muted)",
      textDecoration: "none"
    },
    onDark: {
      color: "var(--text-on-dark)",
      textDecoration: "underline",
      textUnderlineOffset: "3px"
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "var(--type-body-size)",
      letterSpacing: "-0.011em",
      textDecorationThickness: "1px",
      cursor: "pointer",
      ...v,
      ...style
    }
  }, rest), children, iconTrailing && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: "1.1em",
      textDecoration: "none"
    }
  }, iconTrailing));
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Link.jsx", error: String((e && e.message) || e) }); }

// components/brand/FeatureIcon.jsx
try { (() => {
/** Feature icon — a Material Symbol inside a square (outlined or solid) tile. */
function FeatureIcon({
  icon = "eco",
  theme = "light",
  size = 48,
  style
}) {
  const themes = {
    light: {
      background: "transparent",
      color: "var(--color-neutral-black)",
      border: "var(--border-width) solid var(--border-default)"
    },
    dark: {
      background: "var(--color-neutral-black)",
      color: "var(--color-white)",
      border: "var(--border-width) solid var(--color-neutral-black)"
    },
    green: {
      background: "var(--fj-green)",
      color: "var(--fj-green-deep)",
      border: "var(--border-width) solid var(--fj-green-deep)"
    }
  };
  const t = themes[theme] || themes.light;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-none)",
      flexShrink: 0,
      ...t,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: size * 0.5,
      color: t.color
    }
  }, icon));
}
Object.assign(__ds_scope, { FeatureIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FeatureIcon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const SHIELD = ["M 0 41.331 L 41.498 0 L 0 0 Z|0|0", "M 0 41.331 L 41.505 0 L 0 0 Z|41.498|0", "M 0 41.331 L 41.498 0 L 0 0 Z|83.004|0", "M 0 41.331 L 41.498 0 L 0 0 Z|124.502|0", "M 0 41.338 L 41.498 0 L 0 0 Z|0|41.331", "M 0 41.338 L 41.505 0 L 0 0 Z|41.498|41.331", "M 0 41.338 L 41.498 0 L 0 0 Z|83.004|41.331", "M 0 41.331 L 41.498 0 L 0 0 Z|0|82.669", "M 0 41.331 L 41.505 0 L 0 0 Z|41.498|82.669", "M 0 41.331 L 41.498 0 L 0 0 Z|0|124", "M 0 0 L 82.996 82.662 L 82.996 0 Z|83.004|82.669", "M 0 82.669 C 45.839 82.669 83.004 45.662 83.004 0 L 62.251 0 C 62.251 34.244 34.383 62 0 62 Z|83.004|165.331", "M 0.007 41.331 C 22.927 41.331 41.505 22.827 41.505 0 L 20.753 0 C 20.753 11.417 11.463 20.669 0 20.669 L 0 41.338 Z|82.996|165.331"];

// FARM JERSEY wordmark (latest art) — viewBox 568.86 × 153.2
const WORDMARK = ["M77.46,86.58v-25.6c0-5.4-.16-11.66-.31-14.01h16.99c5.32,0,10.72-.16,13.15-.31v9.94c-2.43-.24-7.83-.31-13.15-.31h-5.32v13.7h4.54c5.17,0,9.32-.16,11.66-.31v9.94c-2.35-.23-6.5-.31-11.66-.31h-4.54v7.28c0,5.32.16,11.59.31,14.01h-11.98c.16-2.43.31-8.69.31-14.01Z", "M144.78,100.59c-.63-1.8-1.64-4.31-2.66-6.65l-2.43-5.79h-18.63l-2.43,5.56c-1.17,2.74-1.96,4.78-2.66,6.89h-11.98c1.96-3.44,4.07-7.36,6.03-11.9l19.41-42.66h3.13l19.96,42.66c2.11,4.46,4.46,8.69,6.34,11.9h-14.09ZM130.38,65.6l-5.56,13.39h11.12l-5.56-13.39Z", "M174.37,86.73c0,5.32.08,11.43.31,13.86h-11.98c.23-2.43.39-8.53.39-13.86v-25.76c0-5.32-.16-11.66-.39-14.01h16.05c12.84,0,19.88,7.05,19.88,16.75,0,8.46-4.93,12.76-10.57,14.56,6.11,6.89,11.98,16.13,18.71,22.31h-14.8c-3.44-4.23-10.26-13.86-13.54-20.51-.55.08-1.02.08-1.49.08h-2.58v6.58ZM174.37,72.09h4.31c5.09,0,8.61-3.37,8.61-8.06,0-4.23-3.05-8.14-9.08-8.14h-3.84v16.21Z", "M268.39,87.2c.78,5.79,1.57,9.86,2.58,13.39h-12.76c0-2.19-.31-5.32-.86-9.47l-2.35-19.34-14.25,29.2h-3.05l-14.09-29.28-2.82,19.96c-.55,3.44-.94,6.73-1.1,8.92h-11.43c.7-2.66,1.57-8.53,2.51-14.17l6.81-40.47h2.9l19.49,37.89,19.88-37.89h3.05l5.48,41.26Z", "M302.76,101.45c0,11.04-7.75,18.08-17.85,18.08-3.05,0-5.24-.86-8.22-1.1v-11.59c1.8,2.27,4.78,3.13,7.44,3.13,4.23,0,7.36-3.76,7.36-8.92v-40.08c0-5.32-.16-11.66-.31-14.01h11.9c-.16,2.35-.31,8.69-.31,14.01v40.47Z", "M324.6,56.28v11.66h4.46c5.32,0,10.49-.16,12.92-.31v9.94c-2.43-.16-7.59-.31-12.92-.31h-4.46v13.94h5.72c5.4,0,11.04-.08,13.39-.24v9.94c-2.35-.16-7.98-.31-13.39-.31h-17.38c.16-4.31.31-10.49.31-14.01v-25.68c0-5.4-.16-11.59-.31-13.93h16.75c5.32,0,10.96-.24,13.39-.39v10.02c-2.43-.24-8.06-.31-13.39-.31h-5.09Z", "M363.11,86.73c0,5.32.08,11.43.31,13.86h-11.98c.23-2.43.39-8.53.39-13.86v-25.76c0-5.32-.16-11.66-.39-14.01h16.05c12.84,0,19.88,7.05,19.88,16.75,0,8.46-4.93,12.76-10.57,14.56,6.11,6.89,11.98,16.13,18.71,22.31h-14.8c-3.44-4.23-10.26-13.86-13.54-20.51-.55.08-1.02.08-1.49.08h-2.58v6.58ZM363.11,72.09h4.31c5.09,0,8.61-3.37,8.61-8.06,0-4.23-3.05-8.14-9.08-8.14h-3.84v16.21Z", "M429.66,85.25c0,10.02-7.83,16.6-18.71,16.6-5.48,0-8.69-1.17-13.15-1.64v-13.07c2.58,3.44,8.45,5.87,13.31,5.87,4.15,0,6.58-2.58,6.58-6.18,0-8.85-17.85-9.63-17.85-24.97,0-9.94,6.89-16.05,17.85-16.05,4.15,0,6.81,1.1,10.33,1.33v12.13c-1.96-3.21-6.18-4.78-10.25-4.78-3.84,0-6.26,2.04-6.26,5.64,0,8.3,18.16,9.63,18.16,25.13Z", "M448.44,56.28v11.66h4.46c5.32,0,10.49-.16,12.92-.31v9.94c-2.43-.16-7.59-.31-12.92-.31h-4.46v13.94h5.72c5.4,0,11.04-.08,13.39-.24v9.94c-2.35-.16-7.98-.31-13.39-.31h-17.38c.16-4.31.31-10.49.31-14.01v-25.68c0-5.4-.16-11.59-.31-13.93h16.75c5.32,0,10.96-.24,13.39-.39v10.02c-2.43-.24-8.06-.31-13.39-.31h-5.09Z", "M490.17,88.14v-11.51l-12.76-19.57c-2.66-4.15-4.77-7.12-7.2-10.1h13.86c1.17,2.5,2.11,4.07,3.68,6.5l8.46,13.39,8.22-12.99c1.72-2.66,2.74-4.38,3.99-6.89h12.92c-2.51,3.13-5.25,7.2-7.91,11.27l-11.98,18.24v11.66c0,5.4.08,10.02.24,12.45h-11.74c.08-2.43.23-7.05.23-12.45Z", "M434.34,148.5c38.15,11.7,75.57,1.59,111.41-30.49,8.03-6.86,15.59-15.98,23.11-26.7-40.36,36.98-85.21,56.13-134.52,57.19Z", "M553.11,99.6c-50.11,24.98-106.87,33.23-169.62,24.57,48.53,25.63,105.15,17.46,169.62-24.57Z", "M38.3,22.61C69.44-2.33,107.96-6.73,153.1,9.87c9.99,3.42,20.39,9.11,31.32,16.3C133.28,6.67,84.53,5.41,38.3,22.61Z", "M166.73,24.28C110.94,19.54,55.14,32.79,0,63.97,35.67,22.25,91.31,8.97,166.73,24.28Z"];
const WORDMARK_RATIO = 568.86 / 153.2; // ≈ 3.713

/** The geometric FJ shield mark. */
function Shield({
  size = 40,
  color = "currentColor",
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 166 248",
    width: size * (166 / 248),
    height: size,
    fill: color,
    style: style,
    "aria-hidden": "true"
  }, SHIELD.map((s, i) => {
    const [d, x, y] = s.split("|");
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d,
      transform: `translate(${x},${y})`
    });
  }));
}

/** The FARM JERSEY wordmark (swoosh art). */
function Wordmark({
  height = 28,
  color = "currentColor",
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 568.86 153.2",
    width: height * WORDMARK_RATIO,
    height: height,
    fill: color,
    style: style,
    "aria-label": "Farm Jersey"
  }, WORDMARK.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })));
}

/**
 * Farm Jersey logo. variant:
 *  - "lockup" (default): the FARM JERSEY wordmark (the official logo)
 *  - "wordmark": same wordmark art
 *  - "shield": the geometric FJ mark on its own (brand pattern element)
 * theme "dark" renders black (on light), "light" renders white (on dark/green).
 */
function Logo({
  variant = "lockup",
  theme = "dark",
  height = 40,
  style
}) {
  const color = theme === "light" ? "var(--color-white)" : "var(--fj-dark)";
  if (variant === "shield") return /*#__PURE__*/React.createElement(Shield, {
    size: height,
    color: color,
    style: style
  });
  return /*#__PURE__*/React.createElement(Wordmark, {
    height: height * 0.62,
    color: color,
    style: style
  });
}
Object.assign(__ds_scope, { Shield, Wordmark, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Footer.jsx
try { (() => {
const DEFAULT_COLUMNS = [{
  title: "Get Business Support",
  links: ["My RSS Dashboard", "What is the RSS?", "Agricultural Loan Support", "Genuine Jersey Membership", "Grant Fund Finder", "Crop Credit Calculator"]
}, {
  title: "Producers",
  links: ["Marine", "Land Agriculture"]
}, {
  title: "Resources",
  links: ["Cultivate", "Events", "How to Get Started", "Research Grants", "Publications"]
}];
const SOCIAL = ["facebook", "instagram", "alternate_email", "play_circle", "groups"];

/** Dark site footer with logo, link columns, newsletter line, social row. */
function Footer({
  columns = DEFAULT_COLUMNS,
  social = SOCIAL,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      fontFamily: "var(--font-sans)",
      padding: "64px 5% 32px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: 40,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    theme: "light",
    height: 40
  })), columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 16px",
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "-0.011em"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, col.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,0.72)",
      textDecoration: "none",
      fontSize: 15
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.14)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,0.6)"
    }
  }, "\xA9 2025 Farm Jersey. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      alignItems: "center"
    }
  }, ["About", "Contact", "Privacy", "Cookies"].map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: "rgba(255,255,255,0.72)",
      textDecoration: "none",
      fontSize: 14
    }
  }, l)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 12,
      marginLeft: 8
    }
  }, social.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "material-symbols-outlined",
    style: {
      fontSize: 20,
      color: "rgba(255,255,255,0.72)",
      cursor: "pointer"
    }
  }, s)))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Footer.jsx", error: String((e && e.message) || e) }); }

// components/brand/Navbar.jsx
try { (() => {
/**
 * Farm Jersey site navbar — logo lockup, centre links, primary CTA.
 * links: [{ label, href }]. cta: { label, href }.
 */
function Navbar({
  links = [{
    label: "Get Business Support",
    href: "#"
  }, {
    label: "Producers",
    href: "#"
  }, {
    label: "Resources",
    href: "#"
  }, {
    label: "What is the RSS?",
    href: "#"
  }],
  cta = {
    label: "Login to My Dashboard",
    href: "#"
  },
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: "16px 5%",
      background: "var(--surface-page)",
      borderBottom: "var(--border-width) solid var(--border-subtle)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 34
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: "-0.011em",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, l.label))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "medium",
    iconTrailing: "open_in_new"
  }, cta.label));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
/** Avatar — round photo or initials. Sizes S/M/L from the Figma Avatar set. */
function Avatar({
  src,
  alt = "",
  initials,
  size = "medium",
  style
}) {
  const sizes = {
    small: 32,
    medium: 44,
    large: 56
  };
  const px = sizes[size] || sizes.medium;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      borderRadius: "50%",
      overflow: "hidden",
      flexShrink: 0,
      background: "var(--fj-earth)",
      color: "var(--color-white)",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: px * 0.36,
      border: "var(--border-width) solid var(--border-default)",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : (initials || "").slice(0, 2).toUpperCase());
}

/** Overlapping group of avatars. */
function AvatarGroup({
  children,
  size = "medium",
  style
}) {
  const px = {
    small: 32,
    medium: 44,
    large: 56
  }[size] || 44;
  const items = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      ...style
    }
  }, items.map((child, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -px * 0.32,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px var(--surface-page)"
    }
  }, React.cloneElement(child, {
    size
  }))));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/** Status dot / count badge. Round (a deliberate exception to the square system). */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style
}) {
  const tones = {
    neutral: {
      background: "var(--neutral-90)",
      color: "var(--color-white)"
    },
    success: {
      background: "var(--status-success)",
      color: "var(--color-white)"
    },
    warning: {
      background: "var(--status-warning)",
      color: "var(--color-white)"
    },
    error: {
      background: "var(--status-error)",
      color: "var(--color-white)"
    },
    green: {
      background: "var(--fj-green)",
      color: "var(--fj-green-deep)"
    }
  };
  const t = tones[tone] || tones.neutral;
  if (dot) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: t.background,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: "999px",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 1,
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
/**
 * Farm Jersey Card. Two surfaces:
 *  - "basic" (default): borderless, image + text stacked (the events/blog pattern)
 *  - "box": 1px black outline wrapping padded content
 * Square corners throughout.
 */
function Card({
  variant = "basic",
  image,
  imageAlt = "",
  tagline,
  title,
  children,
  footer,
  href,
  onClick,
  style,
  bodyStyle
}) {
  const isBox = variant === "box";
  const Wrapper = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Wrapper, {
    href: href,
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      background: isBox ? "var(--surface-card)" : "transparent",
      border: isBox ? "var(--border-width) solid var(--border-default)" : "none",
      borderRadius: "var(--radius-none)",
      textDecoration: "none",
      color: "inherit",
      overflow: "hidden",
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "3 / 2",
      overflow: "hidden",
      background: "var(--surface-raised)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: isBox ? "24px" : image ? "20px 0 0" : "0",
      ...bodyStyle
    }
  }, tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 16,
      color: "var(--text-body)"
    }
  }, tagline), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.3,
      letterSpacing: "-0.022em",
      color: "var(--text-heading)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "-0.011em",
      color: "var(--text-muted)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
/** Simple data table. columns: [{ key, header, align }], rows: array of objects. */
function Table({
  columns = [],
  rows = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      overflowX: "auto",
      border: "var(--border-width) solid var(--border-default)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-raised)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "12px 16px",
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      borderBottom: "var(--border-width) solid var(--border-default)",
      whiteSpace: "nowrap"
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      borderBottom: ri === rows.length - 1 ? "none" : "var(--border-width) solid var(--border-subtle)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "12px 16px",
      color: "var(--text-body)",
      lineHeight: 1.4
    }
  }, row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
/** Small label / chip. Square by default; brand uses these for categories & filters. */
function Tag({
  children,
  variant = "neutral",
  style
}) {
  const variants = {
    neutral: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "var(--border-width) solid var(--border-default)"
    },
    solid: {
      background: "var(--color-neutral-black)",
      color: "var(--color-white)",
      border: "var(--border-width) solid var(--color-neutral-black)"
    },
    green: {
      background: "var(--fj-green)",
      color: "var(--fj-green-deep)",
      border: "var(--border-width) solid var(--fj-green-deep)"
    },
    earth: {
      background: "var(--fj-earth)",
      color: "var(--color-white)",
      border: "var(--border-width) solid var(--fj-earth)"
    }
  };
  const v = variants[variant] || variants.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1,
      letterSpacing: "-0.011em",
      padding: "6px 10px",
      borderRadius: "var(--radius-none)",
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/** Inline alert / banner. Square, left status border, optional dismiss. */
function Alert({
  status = "info",
  title,
  children,
  onClose,
  style
}) {
  const map = {
    info: {
      icon: "info",
      color: "var(--status-info)",
      bg: "var(--status-info-bg)"
    },
    success: {
      icon: "check_circle",
      color: "var(--status-success)",
      bg: "var(--status-success-bg)"
    },
    warning: {
      icon: "warning",
      color: "var(--status-warning)",
      bg: "var(--status-warning-bg)"
    },
    error: {
      icon: "error",
      color: "var(--status-error)",
      bg: "var(--status-error-bg)"
    }
  };
  const s = map[status] || map.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      padding: "14px 16px",
      background: s.bg,
      borderInlineStart: "3px solid " + s.color,
      border: "var(--border-width) solid var(--border-subtle)",
      borderInlineStartWidth: 3,
      borderInlineStartColor: s.color,
      borderRadius: "var(--radius-none)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: s.color,
      fontSize: 22,
      flexShrink: 0
    }
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--text-heading)",
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      color: "var(--text-subtle)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 20
    }
  }, "close")));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/** Modal dialog — centred square card over a scrim. */
function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  width = 520,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(35,31,32,0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      border: "var(--border-width) solid var(--border-default)",
      borderRadius: "var(--radius-none)",
      boxShadow: "var(--shadow-overlay)",
      fontFamily: "var(--font-sans)",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      padding: "20px 24px",
      borderBottom: "var(--border-width) solid var(--border-subtle)"
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-0.022em",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      color: "var(--text-body)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      overflowY: "auto",
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      padding: "16px 24px",
      borderTop: "var(--border-width) solid var(--border-subtle)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** Toast notification — dark card, square corners, optional icon + action. */
function Toast({
  status = "neutral",
  title,
  children,
  action,
  onClose,
  style
}) {
  const accents = {
    neutral: "var(--fj-green)",
    success: "var(--status-success)",
    warning: "var(--status-warning)",
    error: "var(--status-error)"
  };
  const icons = {
    neutral: "notifications",
    success: "check_circle",
    warning: "warning",
    error: "error"
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      minWidth: 280,
      maxWidth: 420,
      padding: "14px 16px",
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      border: "var(--border-width) solid rgba(255,255,255,0.12)",
      borderRadius: "var(--radius-none)",
      boxShadow: "var(--shadow-overlay)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: accents[status],
      fontSize: 22,
      flexShrink: 0
    }
  }, icons[status]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.78)"
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      color: "rgba(255,255,255,0.6)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 20
    }
  }, "close")));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip — dark square bubble on hover/focus. */
function Tooltip({
  label,
  placement = "top",
  children,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: 8
    },
    bottom: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: 8
    },
    left: {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginRight: 8
    },
    right: {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginLeft: 8
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 50,
      whiteSpace: "nowrap",
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      lineHeight: 1.4,
      padding: "6px 10px",
      borderRadius: "var(--radius-none)",
      boxShadow: "var(--shadow-md)",
      ...pos[placement],
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Square checkbox — green fill + check when selected. */
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  id,
  style
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const inputId = id || (label ? "cb-" + String(label).replace(/\s+/g, "-").toLowerCase() : undefined);
  function toggle(e) {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: "inherit"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeContent: "center",
      border: "var(--border-width) solid var(--border-default)",
      borderRadius: "var(--radius-none)",
      background: on ? "var(--fj-green)" : "var(--surface-card)",
      transition: "background-color .12s ease"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16,
      color: "var(--fj-green-deep)"
    }
  }, "check"))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Farm Jersey text input — square, 1px border, generous padding. */
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  disabled = false,
  iconLeading,
  fluid = true,
  style,
  ...rest
}) {
  const inputId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--status-error)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: fluid ? "100%" : undefined
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-body)",
      letterSpacing: "-0.011em"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeading && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      position: "absolute",
      left: 12,
      fontSize: 20,
      color: "var(--text-subtle)",
      pointerEvents: "none"
    }
  }, iconLeading), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "-0.011em",
      color: "var(--text-body)",
      padding: iconLeading ? "11px 14px 11px 40px" : "11px 14px",
      background: disabled ? "var(--surface-raised)" : "var(--surface-card)",
      border: "var(--border-width) solid " + borderColor,
      borderRadius: "var(--radius-none)",
      outline: "none",
      opacity: disabled ? 0.6 : 1,
      transition: "border-color .15s ease, box-shadow .15s ease",
      ...style
    },
    onFocus: e => {
      if (!error) e.target.style.boxShadow = "0 0 0 3px var(--primary-50)";
    },
    onBlur: e => {
      e.target.style.boxShadow = "none";
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: error ? "var(--status-error)" : "var(--text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio button — round, green dot when selected (the one circular element in a square system). */
function Radio({
  label,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  name,
  value,
  id,
  style
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const inputId = id || (label ? "rd-" + String(label).replace(/\s+/g, "-").toLowerCase() : undefined);
  function toggle(e) {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: "inherit"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeContent: "center",
      border: "var(--border-width) solid var(--border-default)",
      borderRadius: "50%",
      background: "var(--surface-card)"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--fj-green-deep)"
    }
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square select / dropdown field with a chevron. */
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  defaultValue,
  disabled = false,
  onChange,
  id,
  placeholder,
  fluid = true,
  style,
  ...rest
}) {
  const inputId = id || (label ? "sl-" + String(label).replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--status-error)" : "var(--border-default)";
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: fluid ? "100%" : undefined
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-body)",
      letterSpacing: "-0.011em"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    style: {
      width: "100%",
      boxSizing: "border-box",
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "-0.011em",
      color: "var(--text-body)",
      padding: "11px 40px 11px 14px",
      background: disabled ? "var(--surface-raised)" : "var(--surface-card)",
      border: "var(--border-width) solid " + borderColor,
      borderRadius: "var(--radius-none)",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      position: "absolute",
      right: 12,
      pointerEvents: "none",
      fontSize: 22,
      color: "var(--text-body)"
    }
  }, "expand_more")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: error ? "var(--status-error)" : "var(--text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch — square track + handle, green when on. */
function Switch({
  label,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  id,
  style
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const inputId = id || (label ? "sw-" + String(label).replace(/\s+/g, "-").toLowerCase() : undefined);
  function toggle(e) {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: "inherit"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      border: "var(--border-width) solid var(--border-default)",
      background: on ? "var(--fj-green)" : "var(--surface-card)",
      transition: "background-color .15s ease"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 3,
      left: on ? 23 : 3,
      width: 16,
      height: 16,
      background: "var(--color-neutral-black)",
      transition: "left .15s ease"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square multi-line text field. */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  disabled = false,
  fluid = true,
  style,
  ...rest
}) {
  const inputId = id || (label ? "ta-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--status-error)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: fluid ? "100%" : undefined
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-body)",
      letterSpacing: "-0.011em"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    disabled: disabled,
    style: {
      width: "100%",
      boxSizing: "border-box",
      resize: "vertical",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "-0.011em",
      color: "var(--text-body)",
      padding: "12px 14px",
      background: disabled ? "var(--surface-raised)" : "var(--surface-card)",
      border: "var(--border-width) solid " + borderColor,
      borderRadius: "var(--radius-none)",
      outline: "none",
      transition: "border-color .15s ease, box-shadow .15s ease",
      ...style
    },
    onFocus: e => {
      if (!error) e.target.style.boxShadow = "0 0 0 3px var(--primary-50)";
    },
    onBlur: e => {
      e.target.style.boxShadow = "none";
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: error ? "var(--status-error)" : "var(--text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/** Single collapsible row. */
function Collapse({
  title,
  children,
  defaultOpen = false,
  borderless = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: borderless ? "none" : "var(--border-width) solid var(--border-default)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      padding: "20px 0",
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "-0.011em",
      color: "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 26,
      transition: "transform .18s ease",
      transform: open ? "rotate(45deg)" : "none",
      color: "var(--text-heading)"
    }
  }, "add")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 20,
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, children));
}

/** Accordion — a stack of Collapse rows. items: [{ title, content }]. */
function Accordion({
  items = [],
  borderless = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Collapse, {
    key: i,
    title: it.title,
    defaultOpen: it.defaultOpen,
    borderless: borderless
  }, it.content)));
}
Object.assign(__ds_scope, { Collapse, Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
/** Breadcrumb trail. items: [{ label, href }]. Last item is the current page. */
function Breadcrumbs({
  items = [],
  separator = "chevron_right",
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 6,
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        color: "var(--text-body)",
        fontWeight: 500
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      style: {
        color: "var(--text-subtle)",
        textDecoration: "none"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 18,
        color: "var(--text-subtle)"
      }
    }, separator));
  })));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs — underline indicator, green active marker. tabs: [{ id, label, content }]. */
function Tabs({
  tabs = [],
  defaultTab,
  value,
  onChange,
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultTab || tabs[0] && tabs[0].id);
  const active = isControlled ? value : internal;
  function select(id) {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  }
  const current = tabs.find(t => t.id === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "var(--border-width) solid var(--border-subtle)"
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.id),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "12px 16px",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: on ? 600 : 500,
        letterSpacing: "-0.011em",
        color: on ? "var(--text-heading)" : "var(--text-subtle)",
        borderBottom: "3px solid " + (on ? "var(--fj-green-deep)" : "transparent"),
        marginBottom: -1,
        transition: "color .12s ease"
      }
    }, t.label);
  })), current && current.content !== undefined && /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    style: {
      padding: "20px 0",
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, current.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ApplyScreen.jsx
try { (() => {
// Farm Jersey — Apply for a grant screen (interactive form).
const {
  Navbar,
  Footer,
  Button,
  Link,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Breadcrumbs,
  Alert,
  Tag
} = window.FarmJerseyDesignSystem_4ee58f;
const Section = window.FJSection;
function ApplyScreen({
  onNavigate
}) {
  const [submitted, setSubmitted] = React.useState(false);
  const [type, setType] = React.useState("grant");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    cta: {
      label: "Login to My Dashboard"
    }
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "48px 5% 0"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Resources",
      href: "#"
    }, {
      label: "Apply"
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "32px 5% 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    variant: "green",
    style: {
      marginBottom: 20
    }
  }, "Rural Support Scheme"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 20px",
      fontSize: 48,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      lineHeight: 1.08,
      color: "var(--text-heading)"
    }
  }, "Apply for funding."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, "Tell us about your business and what you're applying for. Most applications are reviewed within 10 working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: 20,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, ["Registered Jersey producers only", "No application fee", "Free advisor support available"].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 20,
      color: "var(--fj-green-deep)"
    }
  }, "check_circle"), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-default)",
      padding: 36,
      background: "#fff"
    }
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    status: "success",
    title: "Application received"
  }, "We've sent a confirmation to your email. An advisor will be in touch within 10 working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate("home")
  }, "Back to home"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSubmitted(false)
  }, "Submit another"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Jane",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Le Maistre",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email address",
    type: "email",
    iconLeading: "mail",
    placeholder: "you@farm.je",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Holding / business name",
    placeholder: "e.g. La Mare Farm",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Sector",
    placeholder: "Choose a sector",
    options: ["Dairy", "Arable", "Horticulture", "Marine / Fisheries", "Mixed"]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 14,
      fontWeight: 500
    }
  }, "What are you applying for?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "type",
    label: "Grant",
    checked: type === "grant",
    onChange: () => setType("grant")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "type",
    label: "Loan",
    checked: type === "loan",
    onChange: () => setType("loan")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "type",
    label: "Advice",
    checked: type === "advice",
    onChange: () => setType("advice")
  }))), /*#__PURE__*/React.createElement(Textarea, {
    label: "Tell us about your project",
    rows: 4,
    placeholder: "What do you want to achieve, and how will the funding help?"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'm a registered Genuine Jersey member"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "large",
    iconTrailing: "arrow_forward"
  }, "Submit application"), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("resources");
    }
  }, "Cancel")))))), /*#__PURE__*/React.createElement(Footer, null));
}
window.ApplyScreen = ApplyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ApplyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Farm Jersey — Home screen. Composes design-system components into the marketing homepage.
const {
  Navbar,
  Footer,
  Button,
  Link,
  Card,
  Tag,
  Logo,
  Shield,
  FeatureIcon
} = window.FarmJerseyDesignSystem_4ee58f;
const IMG = {
  event: "../../assets/img/event.jpg",
  team: "../../assets/img/team.jpg",
  honesty: "../../assets/img/honesty-box.png"
};
function Section({
  children,
  bg = "var(--surface-page)",
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: "96px 5%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, children));
}
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontWeight: 600,
      fontSize: 16,
      letterSpacing: "-0.011em",
      color: "var(--text-body)"
    }
  }, children);
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    cta: {
      label: "Login to My Dashboard"
    },
    links: [{
      label: "Get Business Support",
      href: "#"
    }, {
      label: "Producers",
      href: "#"
    }, {
      label: "Resources",
      href: "#resources"
    }, {
      label: "What is the RSS?",
      href: "#"
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "120px 5% 110px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 auto 32px",
      maxWidth: 980,
      fontSize: "clamp(40px, 6vw, 72px)",
      lineHeight: 1.05,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      color: "var(--text-heading)",
      textWrap: "balance"
    }
  }, "Jersey's Rural Economy: The Foundation of Our Future."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto 36px",
      maxWidth: 620,
      fontSize: 19,
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, "Helping local farmers and growers reach more customers and access the funding to grow sustainable, resilient businesses."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "large",
    iconTrailing: "arrow_forward",
    onClick: () => onNavigate("apply")
  }, "Apply for the Rural Support Scheme"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "large"
  }, "Get Business Support"))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-earth)",
    style: {
      textAlign: "center",
      padding: "80px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Shield, {
    size: 56,
    color: "#fff",
    style: {
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontSize: 30,
      lineHeight: 1.32,
      fontWeight: 500,
      letterSpacing: "-0.022em"
    }
  }, "\"Farm Jersey exists to help our rural and marine economy thrive. We provide resources and a funding pathway to drive our island towards a sustainable, vibrant and inclusive rural economy.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      color: "rgba(255,255,255,0.82)"
    }
  }, "John Vautier, Senior Lead for the Rural & Marine Economy"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-dark)",
      color: "#fff",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FeatureIcon, {
    icon: "dashboard",
    theme: "green"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "20px 0 10px",
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: "-0.022em"
    }
  }, "Access your Rural Support Scheme Dashboard")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Link, {
    variant: "onDark",
    iconTrailing: "arrow_forward",
    onClick: () => onNavigate("apply")
  }, "Log in"), /*#__PURE__*/React.createElement(Link, {
    variant: "onDark",
    iconTrailing: "arrow_forward",
    onClick: () => onNavigate("apply")
  }, "Apply to join"))), [{
    icon: "savings",
    title: "Funding & grants made simple",
    body: "Find the right grant, loan or credit scheme for your business in a few clicks."
  }, {
    icon: "storefront",
    title: "Reach more local customers",
    body: "List your produce and connect with buyers right across the island."
  }].map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(FeatureIcon, {
    icon: f.icon,
    theme: "light"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "20px 0 10px",
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: "-0.022em",
      color: "var(--text-heading)"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, f.body), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    iconTrailing: "arrow_forward"
  }, "Learn more"))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-dark)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.team,
    alt: "",
    style: {
      width: "100%",
      height: 360,
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 20px",
      fontSize: 38,
      lineHeight: 1.15,
      fontWeight: 600,
      letterSpacing: "-0.022em"
    }
  }, "Helping build the future of the rural economy and supporting the farmers and fishers who grow and catch our food."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      fontSize: 17,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.72)"
    }
  }, "We're leading our island towards a thriving, sustainable food economy."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "large"
  }, "Learn about our mission")))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-raised)"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 48px",
      fontSize: 44,
      fontWeight: 600,
      letterSpacing: "-0.022em",
      color: "var(--text-heading)"
    }
  }, "Industry Events."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 40
    }
  }, [{
    tag: "Regen Gathering",
    title: "Celebrating Jersey food & farming",
    body: "An annual gathering showing how rural communities become beacons for innovation, hope and prosperity."
  }, {
    tag: "Apprenticeships",
    title: "Cultivate launches new scheme",
    body: "A landmark step for new entrants into Jersey's land-based careers, reconnecting our island to the skills that sustain us."
  }, {
    tag: "Conference",
    title: "Jersey Farming Conference 2025",
    body: "Thursday 7 November at La Mare Wine Estate, with an option to join online. Open to all."
  }].map((e, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    image: i === 0 ? IMG.event : i === 1 ? IMG.honesty : IMG.team,
    imageAlt: "",
    tagline: e.tag,
    title: e.title,
    footer: /*#__PURE__*/React.createElement(Link, {
      href: "#",
      iconTrailing: "arrow_forward"
    }, "Read more")
  }, e.body)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--fj-green)",
      backgroundImage: "url('../../assets/brand/farm-pattern.svg')",
      backgroundSize: "200px",
      padding: 48,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: "-0.022em",
      color: "var(--fj-green-deep)"
    }
  }, "Cultivate Jersey."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontSize: 17,
      lineHeight: 1.5,
      color: "var(--fj-green-deep)",
      maxWidth: 420
    }
  }, "Cultivate revitalises rural skills \u2014 promoting careers, bridging skills gaps and supporting sustainability through apprenticeships, education and networking."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Learn more"))), /*#__PURE__*/React.createElement("img", {
    src: IMG.team,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      minHeight: 360
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-dark)",
    style: {
      padding: "72px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontSize: 34,
      fontWeight: 600,
      letterSpacing: "-0.022em"
    }
  }, "Stay connected."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      color: "rgba(255,255,255,0.72)"
    }
  }, "Sign up to our newsletter and keep up to date with our latest work and opportunities to get involved.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "you@farm.je",
    style: {
      flex: 1,
      padding: "12px 14px",
      border: "1px solid rgba(255,255,255,0.3)",
      background: "transparent",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 16
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent"
  }, "Sign up")))), /*#__PURE__*/React.createElement(Footer, null));
}
window.HomeScreen = HomeScreen;
window.FJSection = Section;
window.FJEyebrow = Eyebrow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ResourcesScreen.jsx
try { (() => {
// Farm Jersey — Resources / grants listing screen.
const {
  Navbar,
  Footer,
  Button,
  Link,
  Card,
  Tag,
  Breadcrumbs,
  Tabs,
  Accordion,
  FeatureIcon
} = window.FarmJerseyDesignSystem_4ee58f;
const Section = window.FJSection;
function ResourcesScreen({
  onNavigate
}) {
  const schemes = [{
    icon: "savings",
    tag: "Loan",
    title: "Agricultural Loan Support",
    body: "Low-interest finance to invest in land, stock and equipment."
  }, {
    icon: "eco",
    tag: "Grant",
    title: "Research Grants",
    body: "Funding for trials, innovation and on-farm research projects."
  }, {
    icon: "water_drop",
    tag: "Grant",
    title: "Next-Gen Dairy Farming",
    body: "Capital grants for sustainable, efficient dairy infrastructure."
  }, {
    icon: "verified",
    tag: "Membership",
    title: "Genuine Jersey Membership",
    body: "Join the island's mark of local, authentic produce."
  }, {
    icon: "calculate",
    tag: "Tool",
    title: "Crop Credit Calculator",
    body: "Estimate the credit available against your planted area."
  }, {
    icon: "storefront",
    tag: "Listing",
    title: "Producers Listing",
    body: "Get discovered by buyers across the island and beyond."
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    cta: {
      label: "Login to My Dashboard"
    }
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "48px 5% 0"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Resources"
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "32px 5% 56px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontWeight: 600,
      fontSize: 16
    }
  }, "Get Business Support"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 20px",
      fontSize: 52,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      lineHeight: 1.08,
      color: "var(--text-heading)",
      maxWidth: 760
    }
  }, "Funding and support for every land-based business."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.5,
      color: "var(--text-muted)",
      maxWidth: 640
    }
  }, "Explore the grants, loans and schemes available through the Rural Support Scheme \u2014 and find the right pathway for your business.")), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-raised)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32
    }
  }, schemes.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#fff",
      border: "1px solid var(--border-default)",
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(FeatureIcon, {
    icon: s.icon,
    theme: "light"
  }), /*#__PURE__*/React.createElement(Tag, {
    variant: "green"
  }, s.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-0.022em",
      color: "var(--text-heading)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: 1,
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, s.body), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    iconTrailing: "arrow_forward",
    onClick: () => onNavigate("apply")
  }, "Apply")))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 24px",
      fontSize: 36,
      fontWeight: 600,
      letterSpacing: "-0.022em",
      color: "var(--text-heading)"
    }
  }, "Frequently asked."), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "Who can apply for the RSS?",
      content: "Any registered Jersey farmer, grower or fisher operating a land- or marine-based business on the island."
    }, {
      title: "How long do applications take?",
      content: "Most applications are reviewed within 10 working days. Larger capital grants may take longer."
    }, {
      title: "Can I apply for more than one scheme?",
      content: "Yes — many businesses combine a grant with loan support. Our advisors can help you plan."
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--fj-green)",
      backgroundImage: "url('../../assets/brand/farm-pattern.svg')",
      backgroundSize: "200px",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 12px",
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: "-0.022em",
      color: "var(--fj-green-deep)"
    }
  }, "Not sure where to start?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--fj-green-deep)"
    }
  }, "Book a free call with a business support advisor and we'll point you to the right scheme."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Get business support")))), /*#__PURE__*/React.createElement(Footer, null));
}
window.ResourcesScreen = ResourcesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ResourcesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.FeatureIcon = __ds_scope.FeatureIcon;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Shield = __ds_scope.Shield;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Collapse = __ds_scope.Collapse;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
