import { ReactElement } from "react";
import { RoutesEnum } from "./Routes.enum";

export interface Route {
  path: RoutesEnum;
  name?: string;
  Component: ReactElement;
}
