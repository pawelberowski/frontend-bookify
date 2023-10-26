import "@mui/material/styles";
import "@mui/material/Typography";
import { PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/" {
  export interface Palette {
    customGrey: PaletteColorOptions;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    label: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
  }

  interface Theme {
    variables: {
      headerHeight: number;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    variables: {
      headerHeight: number;
    };
  }
  interface PaletteColorOptions {
    lighter?: string;
    main?: string;
    light?: string;
    lightest?: string;
    dark?: string;
    contrastText?: string;
    darker?: string;
  }

  interface Palette {
    customGrey: PaletteColorOptions;
  }

  interface PaletteOptions {
    customGrey: PaletteColorOptions;
  }

  interface PaletteColor {
    lightest?: string;
  }

  interface SimplePaletteColorOptions {
    lightest?: string;
  }
}
