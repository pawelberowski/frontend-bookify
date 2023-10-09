import { FC, PropsWithChildren } from "react";
import { Header } from "./Header/Header.tsx";

import { Box } from "@mui/material";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};
