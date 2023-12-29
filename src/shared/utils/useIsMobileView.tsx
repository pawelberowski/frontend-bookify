import { useMediaQuery, useTheme } from "@mui/material";

export const useIsMobileView = () => {
  const bookifyTheme = useTheme();
  return useMediaQuery((theme: typeof bookifyTheme) =>
    theme.breakpoints.down("md"),
  );
};
