import { axiosInstance } from "../utils/axiosInstance.ts";

const LOGIN_PATH = "/authentication/log-in";

export const logIn = (email: string, password: string) => {
  return axiosInstance.post(`${LOGIN_PATH}`, {
    email: email,
    password: password,
  });
};

export const authenticationApi = {
  logIn,
};
