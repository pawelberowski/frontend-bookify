import { useMediaQuery, useTheme } from "@mui/material";

export const useIsMobileView = () => {
  const bookifyTheme = useTheme();
  return useMediaQuery((theme: typeof bookifyTheme) => {
    return theme.breakpoints.down("md");
  });
};
