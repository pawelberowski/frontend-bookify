import { Box, styled } from "@mui/material";
import { headerHeight } from "./Header/Header.styled.tsx";

export const LayoutContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: scroll;
  margin-left: auto;
`;
export const FiltersAndContentContainer = styled(Box)`
  margin-top: ${headerHeight}px;
  width: 100%;
`;

export const ContentContainer = styled(Box)``;
