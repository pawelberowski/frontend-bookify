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
    },
    components: {
      MuiTypography: {
        defaultProps: {
          fontFamily: `"Poppins", sans-serif`,
        },
      },
    },
  });
};
