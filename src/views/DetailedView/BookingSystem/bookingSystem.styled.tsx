import { Box, Button, Divider, styled } from "@mui/material";

export const BookingSystemContainer = styled(Box)(
  ({theme}) => `
    margin-bottom: ${theme.spacing(35)};
  `
)
export const GreyDivider = styled(Divider)(
  ({ theme }) => `
  color: ${theme.palette.customGrey.lightest};
  margin-top: 32px;
  margin-Bottom: 32px;
  `,
);

export const BookButtonContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const BookButton = styled(Button)(
  ({ theme }) => `
  border-radius: 18px;
  color: ${theme.palette.customGrey.contrastText};
  text-transform: none;
  width: 138px;
`,
);
