import { createContext } from "react";
import { UserContextData } from "./User.ts";

export const UserContext = createContext<UserContextData | undefined>(
  undefined,
);
