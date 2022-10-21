import { CSSProperties } from "react";

export const dashboardStyles = (): CSSProperties => {
  return {
    display: "grid",
    gap: "20px",
    padding: "20px",
    gridTemplateColumns: "40% 60%",
    gridTemplateRows: "700px",
  };
};

export const oneColumn = (heights?: string, weight?: string): CSSProperties => {
  return {
    display: "grid",
    gap: "20px",
    gridTemplateRows: heights ?? "none",
    gridAutoColumns: weight ?? "none",
  };
};
