import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ListaUtenti.css";
import DashAdmin from "../../components/Bottoni/DashAdmin";

export default function ListaUtenti() {
  const [utenti, setUtenti] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/api/utente/getUtenti";
    fetch(url, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        return response.json();
      })
      .then((data) => {
        setUtenti(data);
        //console.log("prova qui:" + data);
      })
  }, []);

  const handleDelete = async (id, ruoli) => {
    const ruoliUtente = ruoli.map((ruolo) => ruolo.tipologia);
    if (ruoliUtente.includes("Admin")) {
      alert("Non è possibile eliminare un utente con ruolo Admin.");
      return;
    }

    var mess = window.confirm("Clicca Ok per eliminare");
    if (mess == true) {
      const url = "http://localhost:8080/api/utente/eliminaUtente/" + id;

      try {
        const response = await fetch(url, {
          mode: "cors",
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }

        alert("Eliminazione completata con successo!");

        //per la rimozione immediata dalla pagina senza aggiornamento -- id di getElement nella riga 80 (stessa cosa fatta per i corsi)
        const utente = document.getElementById(id);
        if (utente) {
          utente.remove();
        }
      } catch (error) {
        console.error("Errore: ", error);
        //alert("Errore qui");
      }
    }
  };

  return (
    <>
      <h1>Ecco la lista di tutti gli Utenti</h1>
      <DashAdmin></DashAdmin>
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
            {utenti.map((utente) => (
              <tr id={utente.id}>
                <td>{utente.nome}</td>
                <td>{utente.cognome}</td>
                <td>{utente.email}</td>
                <td>
                  <Link to={`/modifica-utente/${utente.id}`}>
                    <button className="btn btn-secondary">Modifica</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(utente.id, utente.ruoli)}
                  >
                    Elimina
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
