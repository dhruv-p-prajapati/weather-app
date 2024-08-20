import React from "react";

import { createBrowserRouter } from "react-router-dom";
const Layout = React.lazy(() => import("../layout/Layout"));
const Home = React.lazy(() => import("../pages/home/Home"));
const Favourites = React.lazy(() => import("../pages/favourites/Favourites"));
const Settings = React.lazy(() => import("../pages/settings/Settings"));

const Routes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/favourites",
          element: <Favourites />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
  ]);
};

export default Routes;
