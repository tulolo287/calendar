import React from "react";
import { Login } from "../components/Login";

export interface IRoute {
  path: string;
  components: React.ComponentType;
  exact?: boolean;
}
export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}
export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, components: Login },
];
export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: true, components: Event },
];
