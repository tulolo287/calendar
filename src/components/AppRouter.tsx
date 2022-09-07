import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { publicRoutes, privateRoutes, RouteNames } from "../router";

const AppRouter = () => {
  const { isAuth } = useTypedSelector;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.EVENT} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} replace />} />
    </Routes>
  );
};
export default AppRouter;
