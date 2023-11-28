import { axiosInstance } from "../utils/axiosInstance.ts";

const AUTHENTICATION_PATH = "/authentication";
const LOGIN_PATH = "/authentication/log-in";
const LOGOUT_PATH = "/authentication/log-out";

export const authentication = () => {
  return axiosInstance.get(`${AUTHENTICATION_PATH}`);
};

export const logIn = (email: string, password: string) => {
  return axiosInstance.post(`${LOGIN_PATH}`, {
    email: email,
    password: password,
  });
};

export const logOut = () => {
  return axiosInstance.post(`${LOGOUT_PATH}`);
};

export const authenticationApi = {
  authentication,
  logIn,
};
