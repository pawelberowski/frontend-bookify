import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Routing = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<>{Component}</>} />
      ))}
    </Routes>
  );
};
