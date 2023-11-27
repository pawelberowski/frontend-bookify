import { Box, styled } from "@mui/material";

export const LoginViewStyled = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(6)};
`;
