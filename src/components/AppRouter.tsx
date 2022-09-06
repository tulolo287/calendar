import { Route, Routes } from "react-router-dom";
import React from "react";
import { publicRoutes, privateRoutes } from "../router";

const AppRouter = () => {
  const auth = true;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      ))}
    </Routes>
  );
};
export default AppRouter;
