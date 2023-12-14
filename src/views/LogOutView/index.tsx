import { Typography } from "@mui/material";
import { logOut } from "../../shared/api/authenticationApi.tsx";
import { useUserContextValue } from "../../shared/UserContext/useUserContextValue.tsx";

export const LogOutView = () => {
  const { user } = useUserContextValue();
  logOut();
  if (!user) {
    return <Typography>Successfully logged out</Typography>;
  }
};
