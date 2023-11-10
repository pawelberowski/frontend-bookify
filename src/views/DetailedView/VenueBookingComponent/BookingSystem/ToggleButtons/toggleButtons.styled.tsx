import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material";

export const StyledButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => `
  padding: ${theme.spacing(2)};
  display: flex;
  justify-content: center;
`,
);

export const LeftToggleButton = styled(ToggleButton)`
  border-radius: 18px 0 0 18px;
  text-transform: none;
`;
export const RightToggleButton = styled(ToggleButton)`
  border-radius: 0 18px 18px 0;
  text-transform: none;
`;
