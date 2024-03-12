import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashAdmin from "../../components/Bottoni/DashAdmin";

export default function ModificaUtente() {
  const { id } = useParams();
  const [utente, setUtente] = useState({
    nome: "",
    cognome: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUtenteData = async () => {
      try {
        const url = `http://localhost:8080/api/utente/${id}`;
        const response = await fetch(url, {
          mode: "cors",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("1.Errore nella richiesta");
        }
        const data = await response.json();
        setUtente(data);
        //console.log("dayi: " + data);
      } catch (error) {
        console.error("Errore: ", error);
        //alert("Errore qui");
      }
    };
    fetchUtenteData();
  }, [id]);

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    var mess = window.confirm("Sei sicuro di voler modificare questi dati?");
    if (mess == true) {
      try {
        const url = "http://localhost:8080/api/utente/aggiornaUtente";
        const response = await fetch(url, {
          mode: "cors",
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(utente),
        });

        if (!response.ok) {
          throw new Error("2.Errore nella richiesta");
        }

        alert("Utente aggiornato con successo!");
        navigate("/lista-utenti");
      } catch (error) {
        console.error("Errore: ", error);
        alert("Errore durante la modifica!");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUtente((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Modifica dati Utente</h1>
      <DashAdmin></DashAdmin>
      <form onSubmit={handleSubmit}>
        <div className="modifica table-responsive">
          <table className="table table-striped table-bordered tt">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Cognome</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <td>
                  <input
                    name="nome"
                    value={utente.nome}
                    onChange={handleChange}
                    placeholder="Nome"
                    required
                  />
                </td>
                <td>
                  <input
                    name="cognome"
                    value={utente.cognome}
                    onChange={handleChange}
                    placeholder="Cognome"
                    required
                  />
                </td>
                <td>
                  <input
                    name="email"
                    value={utente.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="btn btn-danger">
            Conferma Modifica
          </button>
        </div>
      </form>
    </>
  );
}
