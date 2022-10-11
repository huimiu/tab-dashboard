import { mergeStyles } from "@fluentui/react";


export const dashboardStyle = () => {
  return mergeStyles({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    height: "100%",
    padding: "20px",
    
    "::webkit-scrollbar": {
      visibility: "hidden",
    },

    "@media (max-width: 480px)": {
      flexDirection: "row",
    },
  });
};

export const rowStyle = () => {
  return mergeStyles({
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
    height: "480px",

    "@media (max-width: 480px)": {
      flexDirection: "column",
    },
  });
};

export const widget = () => {
  return mergeStyles({
    flex: 1,
  });
};
