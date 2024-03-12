import React, { /*useContext*/ useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.css";
//import { AuthContext } from '../../contexts/AuthContext';
import { useSelector } from "react-redux";
import DashUtente from "../../components/Bottoni/DashUtente";

export default function MyCorsi() {
  const [corsi, setCorsi] = useState([]);
  //const {userDetails} = useContext(AuthContext);
  let userDetails = useSelector((state) => {
    return state.autenticazione.userDetails.decodedToken;
  });
  console.log(userDetails);

  const imgUrl = ["2.png", "4.png", "5.jpeg"];

  useEffect(() => {
    const url = `http://localhost:8080/api/utente/${userDetails.id}/getCorsiUtente`;
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
        localStorage.setItem('corsiIscritti', JSON.stringify(data.map(corso => corso.id_c)));
        const immagini = data.map((corso, index) => ({
          ...corso,
          imgUrl: imgUrl[index],
        }));
        setCorsi(immagini);
      });
  }, []);

  useEffect(() => {
    if (userDetails) {
      console.log("Dettagli utente: ", userDetails);
    }
  }, [userDetails]);

  const disiscriversiDalCorso = async (id_c) => {
    var mess = window.confirm("Sei sicuro di volere abbandonare il corso?");
    if (mess == true) {
      const url = `http://localhost:8080/api/utente/${userDetails.id}/unsubscribe-utente/${id_c}`;

      try {
        const response = await fetch(url, {
          mode: "cors",
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }

        alert("Cancellazione dal corso avvenuta con successo!");

        const corso = document.getElementById(id_c);
        if (corso) {
          corso.remove();
        }
      } catch (error) {
        console.error("Errore: ", error);
        alert("Errore durante cancellazione.");
      }
    }
  };

  return (
    <>
      <h1>Continua a imparare dai tuoi corsi</h1>
      <DashUtente></DashUtente>
      <section className="sezione1">
        <div className="container mt-5">
          <div className="row">
            {corsi.map((corso, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div id={corso.id_c} className="card">
                  <img
                    src={corso.imgUrl}
                    alt={{ imgUrl }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{corso.nome_corso}</h5>
                    <p className="card-text">{corso.descrizione_breve}</p>
                    <p className="card-text">{corso.descrizione_completa}</p>
                    <div className="button-container">
                      <button className="btn btn-primary">Continua</button>
                      <button
                        onClick={() => disiscriversiDalCorso(corso.id_c)}
                        className="btn btn-danger"
                      >
                        Unsubscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
