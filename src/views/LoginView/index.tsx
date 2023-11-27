import { useState } from "react";
import { Button, Input, Typography } from "@mui/material";
import { LoginViewStyled } from "./LoginView.styled.tsx";

export const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataInput, setDataInput] = useState({});

  const submitInput = () => {
    const credentials = {
      email: email,
      password: password,
    };
    setDataInput(credentials);
  };

  return (
    <LoginViewStyled>
      <Typography>Email</Typography>
      <Input
        placeholder="Enter email"
        onChange={() => setEmail}
        value={email}
      ></Input>
      <Typography>Password</Typography>
      <Input
        placeholder="Enter password"
        onChange={() => setPassword}
        value={password}
      ></Input>
      <Button onClick={submitInput}>Login</Button>
    </LoginViewStyled>
  );
};
