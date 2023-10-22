import { RoutesEnum } from "../../types/Routes.enum";
import { Route } from "../../types/Route";
import { DetailedView } from "../../../views/DetailedView";
import { VenuesList } from "../../../views/VenuesList";
import { AboutUs } from "../../../views/AboutUs";
import { Favourites } from "../../../views/Favourites";
import { StartHosting } from "../../../views/StartHosting";
import { LoginView } from "../../../views/Login";

export const routes: Array<Route> = [
  {
    path: RoutesEnum.TilesView,
    Component: <VenuesList />,
    name: "venues",
  },
  {
    path: RoutesEnum.DetailedView,
    Component: <DetailedView />,
    name: "venueDetails",
  },
  {
    path: RoutesEnum.AboutUs,
    Component: <AboutUs />,
    name: "about",
  },
  {
    path: RoutesEnum.YourFavourites,
    Component: <Favourites />,
    name: "favourites",
  },
  {
    path: RoutesEnum.StartHosting,
    Component: <StartHosting />,
    name: "hosting",
  },
  {
    path: RoutesEnum.Login,
    Component: <LoginView />,
    name: "login",
  },
];
