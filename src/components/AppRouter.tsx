import { Route, Routes } from "react-router-dom";
import React from "react";
import { publicRoutes, privateRoutes } from "../router";

const AppRouter = () => {
  const auth = false;
  return (
    auth 
    ?
      <Routes>
        {
          privateRoutes.map(route =>
            <Route path={route.path} exact={route.exact} component={route.component} />
          )
        }
      </Routes>
    :
    <Routes>
        {
          publicRoutes.map(route =>
            <Route path={route.path} exact={route.exact} component={route.component} />
          )
        }
      </Routes>

  )
}
export default AppRouter;
