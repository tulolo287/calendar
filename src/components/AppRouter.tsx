import { Switch } from "antd";
import React from "react";

const AppRouter = () => {
const auth = false;
  return (
    auth ?

<Switch>
{privateRoutes.map(route => <Route path={route.path}exact={route.exact}component={route.components}/>route => <Route path={route.path}exact={route.exact}component={route.components}/>)}

    </Switch>


  )
}
export default AppRouter;
