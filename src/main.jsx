import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appointments from "./routes/Appointments";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "consultas/",
        element: <Appointments title="Consultas" />,
      },
      {
        path: "nova-consulta/",
        element: <Appointments title="Consultas" />,
      },
      {
        path: "clientes/",
        element: <Appointments title="Consultas" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
