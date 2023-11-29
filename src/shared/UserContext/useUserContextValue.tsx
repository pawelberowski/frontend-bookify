import { User, UserContextData } from "./User.ts";
import { useCallback, useEffect, useState } from "react";
import { authenticationApi } from "../api/authenticationApi.tsx";
import { redirect } from "react-router-dom";

export function useUserContextValue(): UserContextData {
  const [user, setUser] = useState<User | null>(null);

  const authenticate = useCallback(() => {
    authenticationApi
      .authentication()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        if (error.statusCode === "401") {
          redirect("/login");
        } else {
          console.log(error);
        }

      });
  }, []);

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  const handleLogIn = useCallback((email: string, password: string) => {
    return authenticationApi
      .logIn(email, password)
      .then((response) => {
        setUser(response.data);
        return response;
      })
      .catch((error) => {
        console.log("Something went wrong when logging in");
        return error;
      });
  }, []);

  return {
    handleLogIn,
    user,
  };
}
