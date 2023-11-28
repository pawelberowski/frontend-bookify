import { useEffect } from "react";
import { useUserContext } from "./useUserContext.tsx";

export function useHandleLogIn(email: string, password: string) {
  const { handleLogIn } = useUserContext();

  useEffect(() => {
    handleLogIn(email, password);
  }, [email, handleLogIn, password]);
}
