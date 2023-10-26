import headerImageUrl from "/src/shared/assets/gradient.svg";
import { Button, styled, Typography } from "@mui/material";

export const FiltersHeaderContainer = styled("div")`
  background-image: url(${headerImageUrl});
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
`;

export const Label = styled(Typography)`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: 400;
`;

export const ResetButton = styled(Button)`
  text-transform: lowercase;
`;
