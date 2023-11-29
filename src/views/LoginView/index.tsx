import { Button, Typography } from "@mui/material";
import { LoginViewStyled, StyledInput } from "./LoginView.styled.tsx";
import useLogInForm from "./useLogInForm.tsx";

export const LoginView = () => {
  const {
    email,
    password,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  } = useLogInForm();

  return (
    <LoginViewStyled action="" onSubmit={handleSubmit}>
      <Typography>Email</Typography>
      <StyledInput
        id="email"
        type="text"
        placeholder="Enter email"
        onChange={handleEmailChange}
        value={email}
      ></StyledInput>
      <Typography>Password</Typography>
      <StyledInput
        id="password"
        type="password"
        placeholder="Enter password"
        onChange={handlePasswordChange}
        value={password}
      ></StyledInput>
      <Button type="submit">Submit</Button>
    </LoginViewStyled>
  );
};
