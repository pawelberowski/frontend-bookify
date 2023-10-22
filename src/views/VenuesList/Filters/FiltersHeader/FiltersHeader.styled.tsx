import headerImageUrl from "/src/shared/assets/gradient.svg";
import { Button, styled } from "@mui/material";

export const FiltersHeaderContainer = styled("div")`
  background-image: url(${headerImageUrl});
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins, sans-serif;
`;

export const Label = styled("h2")`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.6px;
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
