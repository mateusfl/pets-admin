import React from "react";
import ReactDOM from "react-dom/client";
import Appointments from "./routes/Appointments";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import Index from "./routes";
import NewAppointment from "./routes/NewAppointment";
import Appointment from "./routes/Appointment";
import Clients from "./routes/Clients";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import { loader as appointmentLoader } from "./loaders";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        path: "consultas/:id",
        element: <Appointment />,
        loader: appointmentLoader,
      },
      {
        path: "nova-consulta/",
        element: <NewAppointment title="Nova Consulta" />,
      },
      {
        path: "clientes/",
        element: <Clients title="Clientes" />,
      },
      {
        path: "perfil/",
        element: <Profile title="Perfil" />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
