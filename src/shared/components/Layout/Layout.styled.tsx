import { Box, styled } from "@mui/material";
import { headerHeight } from "./Header/Header.styled.tsx";

export const LayoutContainer = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  margin-left: auto;
`;
export const FiltersAndContentContainer = styled(Box)`
  margin-top: ${headerHeight}px;
`;

export const ContentContainer = styled(Box)`
  height: 95%;
`;
