import { RoutesEnum } from "../../types/Routes.enum";
import { Route } from "../../types/Route";
import { DetailedView } from "../../../views/DetailedView/DetailedView";
import { VenuesList } from "../../../views/VenuesList";

export const routes: Array<Route> = [
  {
    path: RoutesEnum.TilesView,
    Component: <VenuesList />,
    name: "tiles",
  },
  {
    path: RoutesEnum.DetailedView,
    Component: <DetailedView />,
    name: "detailed",
  },
];
