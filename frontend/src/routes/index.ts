import React from "react";
import { MainPage, AuthPage, NotFoundPage, ProductPage } from "views/pages";
export interface IRoute {
  path: string;
  name: string;
  header: boolean;
  Component: React.FC;
}

export const routes: IRoute[] = [
  {
    path: "/",
    name: "Main",
    header: true,
    Component: MainPage,
  },
  {
    path: "/product/:id",
    name: "Product",
    header: true,
    Component: ProductPage,
  },
  {
    path: "/auth",
    name: "Auth",
    header: false,
    Component: AuthPage,
  },
  {
    path: "*",
    name: "Notfound",
    header: false,
    Component: NotFoundPage,
  },
];
