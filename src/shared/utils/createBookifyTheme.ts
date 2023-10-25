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
        color: "rgba(0, 0, 0, 0.75)",
        fontFamily: `"Prompt", sans-serif`,
        fontSize: "40px",
        fontWeight: "500",
        lineHeight: "150%",
      },
      h3: {
        fontSize: "20px",
        fontWeight: "400",
        letterSpacing: "0.6px",
      },
      h4: {
        fontSize: "16px",
        fontWeight: "600",
        letterSpacing: "0.48px",
      },
      h5: {
        fontSize: "14px",
        fontWeight: "400",
        letterSpacing: "0.42px",
      },
      h6: {
        fontSize: "12px",
        fontWeight: "400",
        letterSpacing: "0.36px",
      },
    },
  });
};
