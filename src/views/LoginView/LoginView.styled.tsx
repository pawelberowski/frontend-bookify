import { Input, styled } from "@mui/material";

export const LoginViewStyled = styled("form")`
  display: flex;
  justify-content: space-evenly;
  height: 350px;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(6)};
`;

export const StyledInput = styled(Input)`
  width: 300px;
`;
