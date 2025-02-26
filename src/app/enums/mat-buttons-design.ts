export enum basic_mat_button_fix_design {
  BASIC = `@include mat.button-overrides(
  (
    text-container-shape: var(--text-container-shape),
    text-label-text-color: var(--text-label-text-color),
    text-disabled-label-text-color: var(--text-disabled-label-text-color),
    text-label-text-font: var(--text-label-text-font),
    text-label-text-size: var(--text-label-text-size),
    text-label-text-tracking: var(--text-label-text-tracking),
    text-label-text-weight: var(--text-label-text-weight),
    text-label-text-transform: var(--text-label-text-transform),
    text-container-height: var(--text-container-height),
    text-horizontal-padding: var(--text-horizontal-padding),
    text-with-icon-horizontal-padding: var(--text-with-icon-horizontal-padding),
    text-icon-spacing: var(--text-icon-spacing),
    text-icon-offset: var(--text-icon-offset),
    text-state-layer-color: var(--text-state-layer-color),
    text-disabled-state-layer-color: var(--text-disabled-state-layer-color),
    text-ripple-color: var(--text-ripple-color),
    text-hover-state-layer-opacity: var(--text-hover-state-layer-opacity),
    text-focus-state-layer-opacity: var(--text-focus-state-layer-opacity),
    text-pressed-state-layer-opacity: var(--text-pressed-state-layer-opacity),
    text-touch-target-display: var(--text-touch-target-display),
  )
);`,
  RAISED = `@include mat.button-overrides(
  (
    protected-container-shape: var(--protected-container-shape),
    protected-container-elevation-shadow:
      var(--protected-container-elevation-shadow),
    protected-disabled-container-elevation-shadow:
      var(--protected-disabled-container-elevation-shadow),
    protected-focus-container-elevation-shadow:
      var(--protected-focus-container-elevation-shadow),
    protected-hover-container-elevation-shadow:
      var(--protected-hover-container-elevation-shadow),
    protected-pressed-container-elevation-shadow:
      var(--protected-pressed-container-elevation-shadow),
    protected-container-color: var(--protected-container-color),
    protected-label-text-color: var(--protected-label-text-color),
    protected-disabled-container-color:
      var(--protected-disabled-container-color),
    protected-disabled-label-text-color:
      var(--protected-disabled-label-text-color),
    protected-label-text-font: var(--protected-label-text-font),
    protected-label-text-size: var(--protected-label-text-size),
    protected-label-text-tracking: var(--protected-label-text-tracking),
    protected-label-text-weight: var(--protected-label-text-weight),
    protected-label-text-transform: var(--protected-label-text-transform),
    protected-container-height: var(--protected-container-height),
    protected-horizontal-padding: var(--protected-horizontal-padding),
    protected-icon-spacing: var(--protected-icon-spacing),
    protected-icon-offset: var(--protected-icon-offset),
    protected-state-layer-color: var(--protected-state-layer-color),
    protected-disabled-state-layer-color:
      var(--protected-disabled-state-layer-color),
    protected-ripple-color: var(--protected-ripple-color),
    protected-hover-state-layer-opacity:
      var(--protected-hover-state-layer-opacity),
    protected-focus-state-layer-opacity:
      var(--protected-focus-state-layer-opacity),
    protected-pressed-state-layer-opacity:
      var(--protected-pressed-state-layer-opacity),
  )
);`,

  STROKED = `
  @include mat.button-overrides(
  (
    outlined-outline-width: var(--outlined-outline-width),
    outlined-container-shape: var(--outlined-container-shape),
    outlined-disabled-outline-color: var(--outlined-disabled-outline-color),
    outlined-disabled-label-text-color:
      var(--outlined-disabled-label-text-color),
    outlined-label-text-color: var(--outlined-label-text-color),
    outlined-outline-color: var(--outlined-outline-color),
    outlined-label-text-font: var(--outlined-label-text-font),
    outlined-label-text-size: var(--outlined-label-text-size),
    outlined-label-text-tracking: var(--outlined-label-text-tracking),
    outlined-label-text-weight: var(--outlined-label-text-weight),
    outlined-label-text-transform: var(--outlined-label-text-transform),
    outlined-container-height: var(--outlined-container-height),
    outlined-horizontal-padding: var(--outlined-horizontal-padding),
    outlined-icon-spacing: var(--outlined-icon-spacing),
    outlined-icon-offset: var(--outlined-icon-offset),
    outlined-state-layer-color: var(--outlined-state-layer-color),
    outlined-disabled-state-layer-color:
      var(--outlined-disabled-state-layer-color),
    outlined-ripple-color: var(--outlined-ripple-color),
    outlined-hover-state-layer-opacity:
      var(--outlined-hover-state-layer-opacity),
    outlined-focus-state-layer-opacity:
      var(--outlined-focus-state-layer-opacity),
    outlined-pressed-state-layer-opacity:
      var(--outlined-pressed-state-layer-opacity),
  )
);
`,
  FLAT = `@include mat.button-overrides(
  (
    filled-container-shape: var(--filled-container-shape),
    filled-container-color: var(--filled-container-color),
    filled-label-text-color: var(--filled-label-text-color),
    filled-disabled-container-color: var(--filled-disabled-container-color),
    filled-disabled-label-text-color: var(--filled-disabled-label-text-color),
    filled-label-text-font: var(--filled-label-text-font),
    filled-label-text-size: var(--filled-label-text-size),
    filled-label-text-tracking: var(--filled-label-text-tracking),
    filled-label-text-weight: var(--filled-label-text-weight),
    filled-label-text-transform: var(--filled-label-text-transform),
    filled-container-height: var(--filled-container-height),
    filled-horizontal-padding: var(--filled-horizontal-padding),
    filled-icon-spacing: var(--filled-icon-spacing),
    filled-icon-offset: var(--filled-icon-offset),
    filled-state-layer-color: var(--filled-state-layer-color),
    filled-disabled-state-layer-color: var(--filled-disabled-state-layer-color),
    filled-ripple-color: var(--filled-ripple-color),
    filled-hover-state-layer-opacity: var(--filled-hover-state-layer-opacity),
    filled-focus-state-layer-opacity: var(--filled-focus-state-layer-opacity),
    filled-pressed-state-layer-opacity:
      var(--filled-pressed-state-layer-opacity),
  )
);`,

  ICON = `
@include mat.icon-button-overrides(
  (
    icon-size: var(--icon-size),
    icon-color: var(--icon-color),
    disabled-icon-color: var(--disabled-icon-color),
    state-layer-size: var(--state-layer-size),
    state-layer-color: var(--state-layer-color),
    disabled-state-layer-color: var(--disabled-state-layer-color),
    ripple-color: var(--ripple-color),
    hover-state-layer-opacity: var(--hover-state-layer-opacity),
    focus-state-layer-opacity: var(--focus-state-layer-opacity),
    pressed-state-layer-opacity: var(--pressed-state-layer-opacity),
  )
);
`,

  FAB = `
@include mat.fab-overrides(
  (
    container-shape: var(--fab-container-shape),
    container-elevation-shadow: var(--fab-container-elevation-shadow),
    focus-container-elevation-shadow:
      var(--fab-focus-container-elevation-shadow),
    hover-container-elevation-shadow:
      var(--fab-hover-container-elevation-shadow),
    pressed-container-elevation-shadow:
      var(--fab-pressed-container-elevation-shadow),
    container-color: var(--fab-container-color),
    foreground-color: var(--fab-foreground-color),
    state-layer-color: var(--fab-state-layer-color),
    disabled-state-container-color: var(--fab-disabled-state-container-color),
    disabled-state-foreground-color: var(--fab-disabled-state-foreground-color),
    disabled-state-layer-color: var(--fab-disabled-state-layer-color),
    ripple-color: var(--fab-ripple-color),
    hover-state-layer-opacity: var(--fab-hover-state-layer-opacity),
    focus-state-layer-opacity: var(--fab-focus-state-layer-opacity),
    pressed-state-layer-opacity: var(--fab-pressed-state-layer-opacity),
    touch-target-display: var(--fab-touch-target-display),
  )
);
`,
  MINIFAB = `@include mat.fab-overrides(
  (
    small-container-shape: var(--small-fab-container-shape),
    small-container-elevation-shadow:
      var(--small-fab-container-elevation-shadow),
    small-focus-container-elevation-shadow:
      var(--small-fab-focus-container-elevation-shadow),
    small-hover-container-elevation-shadow:
      var(--small-fab-hover-container-elevation-shadow),
    small-pressed-container-elevation-shadow:
      var(--small-fab-pressed-container-elevation-shadow),
    small-container-color: var(--small-fab-container-color),
    small-foreground-color: var(--small-fab-foreground-color),
    small-state-layer-color: var(--small-fab-state-layer-color),
    small-disabled-state-container-color:
      var(--small-fab-disabled-state-container-color),
    small-disabled-state-foreground-color:
      var(--small-fab-disabled-state-foreground-color),
    small-disabled-state-layer-color:
      var(--small-fab-disabled-state-layer-color),
    small-ripple-color: var(---small-fab-ripple-color),
    small-hover-state-layer-opacity: var(--small-fab-hover-state-layer-opacity),
    small-focus-state-layer-opacity: var(--small-fab-focus-state-layer-opacity),
    small-pressed-state-layer-opacity:
      var(--small-fab-pressed-state-layer-opacity),
    small-touch-target-display: var(--small-fab-touch-target-display),
  )
);
`,
  ExtendedFAB = `@include mat.fab-overrides(
  (
    extended-container-shape: var(--extended-fab-container-shape),
    extended-container-elevation-shadow:
      var(--extended-fab-container-elevation-shadow),
    extended-focus-container-elevation-shadow:
      var(--extended-fab-focus-container-elevation-shadow),
    extended-hover-container-elevation-shadow:
      var(--extended-fab-hover-container-elevation-shadow),
    extended-pressed-container-elevation-shadow:
      var(--extended-fab-pressed-container-elevation-shadow),
    container-color: var(--extended-fab-container-color),
    foreground-color: var(--extended-fab-foreground-color),
    state-layer-color: var(--extended-fab-state-layer-color),
    disabled-state-container-color:
      var(--extended-fab-disabled-state-container-color),
    disabled-state-foreground-color:
      var(--extended-fab-disabled-state-foreground-color),
    disabled-state-layer-color: var(--extended-fab-disabled-state-layer-color),
    ripple-color: var(--extended-fab-ripple-color),
    hover-state-layer-opacity: var(--extended-fab-hover-state-layer-opacity),
    focus-state-layer-opacity: var(--extended-fab-focus-state-layer-opacity),
    pressed-state-layer-opacity: var(--extended-fab-pressed-state-layer-opacity),
    touch-target-display: var(--extended-fab-touch-target-display),
    extended-label-text-font: var(--extended-fab-label-text-font),
    extended-label-text-size: var(--extended-fab-label-text-size),
    extended-label-text-tracking: var(--extended-fab-label-text-tracking),
    extended-label-text-weight: var(--extended-fab-label-text-weight),
  )
);
`

}