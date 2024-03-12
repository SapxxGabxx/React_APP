import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Autenticazione/Login.jsx";
import Registrazione from "./pages/Autenticazione/Registrazione.jsx";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AuthContextProvider from "./contexts/AuthContextProvider.jsx";
import DashboardUtente from "./pages/Utente/DashboardUtente.jsx";
import MyCorsi from "./pages/Utente/MyCorsi.jsx";
import CorsiDisponibili from "./pages/Utente/CorsiDisponibili.jsx";
import DashboardAdmin from "./pages/Admin/DashboardAdmin.jsx";
import ListaUtenti from "./pages/Admin/ListaUtenti.jsx";
import ListaCorsi from "./pages/Admin/ListaCorsi.jsx";
import ModificaUtente from "./pages/Admin/ModificaUtente.jsx";
import NuovoCorso from "./pages/Admin/NuovoCorso.jsx";
import { Provider } from "react-redux";
import store, { persistStorage } from "./Store/index.jsx";
import { PersistGate } from "redux-persist/lib/integration/react";
import PrivateRoute from "./components/Shared/PrivateRoute.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    element: (
      <AuthContextProvider>
        <Layout />
      </AuthContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registrazione",
        element: <Registrazione />,
      },

      {
        path: "dashboard",
        element: <DashboardUtente />,
      },
      {
        path: "miei-corsi",
        element: <MyCorsi />,
      },

      {
        path: "corsi-disponibili",
        element: <CorsiDisponibili />,
      },
      {
        path: "*",
        element: <NotFound />,
      },

      {
        path: "",
        element: <PrivateRoute></PrivateRoute>,
        children: [
          {
            path: "admin",
            element: <DashboardAdmin />,
          },
          {
            path: "lista-utenti",
            element: <ListaUtenti />,
          },
          {
            path: "lista-corsi",
            element: <ListaCorsi />,
          },
          {
            path: "/modifica-utente/:id",
            element: <ModificaUtente />,
          },
          {
            path: "/aggiungi-corso",
            element: <NuovoCorso />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistStorage}>
      <RouterProvider router={router}></RouterProvider>
    </PersistGate>
  </Provider>
);
