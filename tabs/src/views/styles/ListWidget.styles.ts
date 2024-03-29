import { CSSProperties } from "react";

import { tokens } from "@fluentui/react-components";

export const bodyContentStyle = (): CSSProperties => ({
  display: "grid",
  gap: "0.5rem",
  alignContent: "start",
});

export const itemLayoutStyle = (): CSSProperties => ({
  display: "grid",
});

export const dividerStyle = (): CSSProperties => ({
  marginBottom: "0.5rem",
  marginLeft: "-2.25rem",
  marginRight: "-2.3rem",
  height: "1px",
  background: tokens.colorNeutralStroke2,
});

export const itemTitleStyle = (): CSSProperties => ({
  fontSize: "0.875rem",
  fontWeight: "600",
  lineHeight: "1.25rem",
});

export const itemSubtitleStyle = (): CSSProperties => ({
  fontSize: "0.75rem",
  fontWeight: "400",
  lineHeight: "1.25rem",
});

export const footerButtonStyle = (): CSSProperties => ({
  width: "fit-content",
});
