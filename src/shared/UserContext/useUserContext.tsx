import { useContext } from "react";
import { UserContext } from "./UserContext.tsx";

export function useUserContext() {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("useUserContext must be within the UserContext.Provider");
  }
  return userContext;
}
