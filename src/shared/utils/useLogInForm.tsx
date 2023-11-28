import { ChangeEvent, FormEvent, useState } from "react";

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
    fetch("http://localhost:3000/authentication/log-in", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    }).catch(() => {
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
