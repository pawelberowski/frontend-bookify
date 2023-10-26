import { createTheme } from "@mui/material/styles";
export const createBookifyTheme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#67AA92",
      },
      secondary: {
        main: "#E6C0C7",
      },
      customGrey: {
        main: "rgba(0, 0, 0, 0.60)",
        darker: "rgba(0, 0, 0, 0.75)",
        lighter: "rgba(0, 0, 0, 0.50)",
        lightest: "rgba(0, 0, 0, 0.25)",
        contrastText: "#fff",
      },
    },
    spacing: 4,
    variables: {
      headerHeight: 50,
    },
    typography: {
      fontFamily: `"Poppins", sans-serif`,
    },
  });
  return createTheme(theme, {
    typography: {
      h2: {
        color: theme.palette.customGrey.darker,
        fontFamily: `"Prompt", sans-serif`,
        fontSize: "40px",
        fontWeight: "500",
        lineHeight: "150%",
      },
      h3: {
        fontSize: "40px",
        fontWeight: "600",
        letterSpacing: "1.2px",
      },
      h4: {
        fontSize: "25px",
        fontWeight: "500",
        letterSpacing: "0.75px",
      },
      h5: {
        fontSize: "16px",
        fontWeight: "600",
        letterSpacing: "0.48px",
      },
      h6: {
        fontSize: "14px",
        fontWeight: "400",
        letterSpacing: "0.42px",
      },
      body1: {
        fontSize: "20px",
        fontWeight: "300",
        letterSpacing: "0.6px",
      },
      body2: {
        fontSize: "16px",
        fontWeight: "400",
        letterSpacing: "0.48px",
      },
      caption: {
        fontSize: "12px",
        fontWeight: "400",
        letterSpacing: "0.36px",
      },
      subtitle1: {
        fontSize: "16px",
        fontWeight: "400",
        letterSpacing: "0.48px",
      },
    },
  });
};
