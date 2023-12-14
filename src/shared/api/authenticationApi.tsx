import { axiosInstance } from "../utils/axiosInstance.ts";
import { User } from "../UserContext/User.ts";

const AUTHENTICATION_PATH = "/authentication";
const LOGIN_PATH = "/authentication/log-in";
const LOGOUT_PATH = "/authentication/log-out";

export const authentication = () => {
  return axiosInstance.get<User>(`${AUTHENTICATION_PATH}`);
};

export const logIn = (email: string, password: string) => {
  return axiosInstance.post<User>(`${LOGIN_PATH}`, {
    email: email,
    password: password,
  });
};

export const logOut = () => {
  return axiosInstance.post<void>(`${LOGOUT_PATH}`);
};

export const authenticationApi = {
  authentication,
  logIn,
};
