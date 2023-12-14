import { ChangeEvent, FormEvent, useState } from "react";
import { useUserContext } from "../../shared/UserContext/useUserContext.tsx";

function useLogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { handleLogIn } = useUserContext();
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleLogIn(email, password).catch((error) => {
      setError(error);
    });
  };

  return {
    email,
    password,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
    error,
  };
}

export default useLogInForm;
