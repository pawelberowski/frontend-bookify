import { RoutesEnum } from "../../types/Routes.enum";
import { Route } from "../../types/Route";
import { DetailedView } from "../../../views/DetailedView/DetailedView";
import { TilesView } from "../../../views/TilesView/TilesView";

export const routes: Array<Route> = [
  {
    path: RoutesEnum.TilesView,
    Component: <TilesView />,
    name: "tiles",
  },
  {
    path: RoutesEnum.DetailedView,
    Component: <DetailedView />,
    name: "detailed",
  },
];
