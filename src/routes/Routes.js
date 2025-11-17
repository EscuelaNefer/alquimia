import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "../pages/App";
import Pdf from "../pages/Pdf";
import ErrorPage from "../pages/ErrorPage";
import SubscribePage from "../pages/SubscribePage";
import WorkshopsPage from "../pages/WorkshopsPage";
import MemberShipPage from "../pages/Membership";

const RouteObject = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/subscribe",
    element: <SubscribePage />,
  },
  {
    path: "/politicas",
    element: <Pdf name="politica_de_privacidad.pdf" />,
  },
  {
    path: "/tyc",
    element: <Pdf name="terminos_y_condiciones.pdf" />,
  },
  {
    path: "/workshops",
    element: <WorkshopsPage />,
  },
  {
    path: "/membership",
    element: <MemberShipPage />,
  },
];

const router = createHashRouter(RouteObject);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
