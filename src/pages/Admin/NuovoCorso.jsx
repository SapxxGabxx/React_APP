import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NuovoCorso.css";
import { useSelector } from "react-redux";
import DashAdmin from "../../components/Bottoni/DashAdmin";

export default function NuovoCorso() {
  const [corso, setCorso] = useState({
    nome_corso: "",
    descrizione_breve: "",
    descrizione_completa: "",
    durata: "",
    categoria: {
      nome_categoria: "",
      id_ca: "",
    },
  });

  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/api/categoria/getAll";
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
        setCategorie(data);
        //console.log("sono qui " + data)
      });
  }, []);

  const navigate = useNavigate();
  let token = useSelector((state) => {
    return state.autenticazione;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    /*se input modificato è quello della categoria, cerca con find, nelle categorie trovate precedentemete 
      dalla richiesta htttp, la categoria che corrisponde al valore selezionato da me*/
    if (name === "categoria") {
      const catSelezionata = categorie.find(
        (cat) => cat.nome_categoria === value
      );
      /*aggiorno lo stato precedente del corso con la categoria selezionata
        con prevCprso viene mantenuto lo stato precedente e aggiornato solo la parte dellla categoria*/
      setCorso((prevCorso) => ({
        ...prevCorso,
        categoria: {
          //vengono impostati i valori
          nome_categoria: catSelezionata.nome_categoria,
          id_ca: catSelezionata.id_ca,
        },
      }));
    } else {
      // altrimenti see input non è quello della categoria, aggiorno semplicemente lo stato degli altri campi
      setCorso((prevCorso) => ({
        ...prevCorso,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mess = window.confirm("Sei sicuro di voler creare questo corso?");
    if (mess) {
      try {
        const url = "http://localhost:8080/api/corso/creaCorso";
        const response = await fetch(url, {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
          body: JSON.stringify(corso),
        });

        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }

        alert("Corso creato con successo!");
        navigate("/lista-corsi");
      } catch (error) {
        console.error("Errore: ", error);
        alert("Errore durante la creazione del corso.");
      }
    }
  };

  return (
    <>
      <h1>Nuovo Corso</h1>
      <DashAdmin></DashAdmin>
      <div className="backg">
        <form onSubmit={handleSubmit} className="form-nuovo-corso">
          <div className="form-group">
            <label>Nome del Corso:</label>
            <input
              type="text"
              name="nome_corso"
              value={corso.nome_corso}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Descrizione Breve:</label>
            <input
              type="text"
              name="descrizione_breve"
              value={corso.descrizione_breve}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Descrizione Completa:</label>
            <textarea
              name="descrizione_completa"
              value={corso.descrizione_completa}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Durata:</label>
            <input
              type="number"
              name="durata"
              value={corso.durata}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Nome Categoria:</label>
            <select
              name="categoria"
              value={corso.categoria.nome_categoria}
              onChange={handleChange}
              required
            > {/*qua avviene la selezione delle categorie trovate dalla richiesta http*/}
              {categorie.map((cat) => (
                <option value={cat.nome_categoria}>
                  {cat.nome_categoria}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary btnew">
            Crea Corso
          </button>
        </form>
      </div>
    </>
  );
}
