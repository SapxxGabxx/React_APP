import React, { useEffect, useState /*useContext*/ } from "react";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import DashUtente from "../../components/Bottoni/DashUtente";
//import { AuthContext } from '../../contexts/AuthContext';

export default function CorsiDisponibili() {
  const [corsi, setCorsi] = useState([]);
  const [corsiIscritti, setCorsiIscritti] = useState([]);
  //const {userDetails} = useContext(AuthContext);
  let userDetails = useSelector((state) => {
    return state.autenticazione.userDetails.decodedToken;
  });

  const imgUrl = [
    "1.jpg",
    "2.png",
    "3.jpg",
    "4.png",
    "5.jpeg",
    "6.jpg",
    "7.png",
    "8.jpeg",
    "9.png",
    "10.jpeg",
    "11.png",
  ];

  useEffect(() => {
    const url = "http://localhost:8080/api/utente/getCorsi";
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

  useEffect(() => {
    const corsiIscritti = JSON.parse(localStorage.getItem('corsiIscritti'));
    setCorsiIscritti(corsiIscritti); 
  }, []);

  const iscriversiAlCorso = async (id_c) => {
    var mess = window.confirm("Sei sicuro di volerti iscriverti?");
    if (mess == true) {
      const url = `http://localhost:8080/api/utente/${userDetails.id}/subscribe/${id_c}`;

      try {
        const response = await fetch(url, {
          mode: "cors",
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }

        alert("Iscrizione al corso avvenuta con successo!");
      } catch (error) {
        console.error("Errore: ", error);
        alert("Sei già iscritto a questo corso!");
      }
    }
  };

  return (
    <>
      <h1>Esplora tutti i corsi disponibili</h1>
      <DashUtente></DashUtente>
      <section className="sezione1">
        <div className="container mt-5">
          <div className="row">
            {corsi.map((corso, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={corso.imgUrl}
                    alt={{ imgUrl }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{corso.nome_corso}</h5>
                    <p className="card-text">{corso.descrizione_breve}</p>
                    <p className="card-text">{corso.descrizione_completa}</p>
                    {corsiIscritti.includes(corso.id_c) ? (
                      <div className="alert alert-success text-center">
                        Sei già iscritto a questo corso
                      </div>
                    ) : (
                      <button
                        onClick={() => iscriversiAlCorso(corso.id_c)}
                        className="btn btn-primary"
                      >
                        Iscriviti
                      </button>
                    )}
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
