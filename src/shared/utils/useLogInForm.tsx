import { ChangeEvent, FormEvent, useState } from "react";
import { authenticationApi } from "../api/authenticationApi.tsx";

function useLogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    authenticationApi.logIn(email, password).catch(() => {
      console.log("Something went wrong when logging in");
    });
  };

  return {
    email,
    password,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  };
}

export default useLogInForm;
