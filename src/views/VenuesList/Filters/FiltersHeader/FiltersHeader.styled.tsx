import headerImageUrl from "/src/shared/assets/gradient.svg";
import { Button, styled, Typography } from "@mui/material";

export const FiltersHeaderContainer = styled("div")`
  background-image: url(${headerImageUrl});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled(Typography)`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const ResetButton = styled(Button)`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.48px;
  text-transform: lowercase;
`;
