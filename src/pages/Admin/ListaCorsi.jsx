import { useEffect, useState } from "react";
import "./ListaUtenti.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DashAdmin from "../../components/Bottoni/DashAdmin";

export default function ListaCorsi() {
  const [corsi, setCorsi] = useState([]);
  let token = useSelector((state) => {
    return state.autenticazione;
  });

  useEffect(() => {
    const url = "http://localhost:8080/api/corso/getAll";
    fetch(url, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        return response.json();
      })
      .then((data) => {
        setCorsi(data);
        //console.log("sono qui " + data)
      });
  }, []);

  const handleDelete = async (id_c) => {
    var mess = window.confirm("Clicca Ok per eliminare");
    if (mess == true) {

      try {
        const url = "http://localhost:8080/api/corso/eliminaCorso/" + id_c;
        const response = await fetch(url, {
          mode: "cors",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }

        alert("Eliminazione completata con successo!");

        const corso = document.getElementById(id_c);
        if (corso) {
          corso.remove();
        }
      } catch (error) {
        console.error("Errore: ", error);
        //alert("Errore qui");
      }
    }
  };

  return (
    <>
      <h1>Ecco la lista di tutti i Corsi</h1>
      <DashAdmin></DashAdmin>
      <div className="modifica table-responsive">
        <table className="table table-striped table-bordered tt">
          <thead>
            <tr>
              <th scope="col">Corso</th>
              <th scope="col">Info</th>
              <th scope="col">Descrizione</th>
              <th scope="col">Durata</th>
              <th scope="col">Categoria</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {corsi.map((corso) => (
              <tr id={corso.id_c}>
                <td>{corso.nome_corso}</td>
                <td>{corso.descrizione_breve}</td>
                <td>{corso.descrizione_completa}</td>
                <td>{corso.durata}</td>
                <td>{corso.categoria.nome_categoria}</td>

                <td>
                  {/* anche qui problema con le immagini, 
                        ho inserito corsi di prova senza immagini per provare metodo*/}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(corso.id_c)}
                  >
                    Elimina
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* qua ci sarà il
            problema di visualizzazione delle immagini lato Utente, in quanto anche immagine potrebbe
            essere gestita a livelllo di database , */}
      <h2>
        Aggiungi corso:{" "}
        <Link to="/aggiungi-corso">
          <button className="btn btn-success"> Aggiungi </button>
        </Link>
      </h2>
    </>
  );
}
