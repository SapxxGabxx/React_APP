import React from "react";
import Home from "./pages/Home/Home";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Registrazione from "./pages/Autenticazione/Registrazione";
import Login from "./pages/Autenticazione/Login";
import DashboardUtente from "./pages/Utente/DashboardUtente";
import MyCorsi from "./pages/Utente/MyCorsi";
import CorsiDisponibili from "./pages/Utente/CorsiDisponibili";
import DashboardAdmin from "./pages/Admin/DashboardAdmin";
import ListaCorsi from "./pages/Admin/ListaCorsi";
import ListaUtenti from "./pages/Admin/ListaUtenti";
import ModificaUtente from "./pages/Admin/ModificaUtente";
import NuovoCorso from "./pages/Admin/NuovoCorso";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Home />
        <Registrazione />
        <Login />
        <DashboardUtente />
        <MyCorsi />
        <CorsiDisponibili />
        <DashboardAdmin />
        <ListaCorsi />
        <ListaUtenti />
        <ModificaUtente />
        <NuovoCorso />
      </AuthContextProvider>
    </>
  );
}

export default App;
