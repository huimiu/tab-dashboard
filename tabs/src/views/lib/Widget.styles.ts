import { CSSProperties } from "react";

export const cardStyles = (): CSSProperties => ({
  paddingLeft: "2.3rem",
  paddingRight: "2.3rem",
  paddingTop: "1rem",
});

export const headerStyles = (): CSSProperties => ({
  display: "grid",
  alignItems: "center",
});

export const headerContentStyle = (): CSSProperties => ({
  display: "grid",
  gap: "8px",
  gridTemplateColumns: "min-content 1fr min-content",
  alignItems: "center",
});

export const headerTextStyle = (): CSSProperties => ({
  fontWeight: "600",
  lineHeight: "1rem",
  fontStyle: "normal",
  fontSize: "0.75rem",
  fontFamily: "Segoe UI",
});
