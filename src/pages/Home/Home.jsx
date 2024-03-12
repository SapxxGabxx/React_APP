import Navbar from "../../components/Navbar/Navbar";
import Carosello from "../../components/Carosello";
import Sezione1 from "../../components/Sezione1";
import Sezione2 from "../../components/Sezione2";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const corsi = [
    {
      titolo: "Corsi",
      testo: "Iscriviti per scoprire tutti i corsi a tua disposizione. ",
      urlImage: "12.jpg",
    },
    {
      titolo: "Docenti",
      testo: "I migliori docenti sono pronti per formarti al meglio.",
      urlImage: "come-scegliere-corso-di-formazione.jpg",
    },
    {
      titolo: "Università",
      testo: "Collaboriamo con le migliori università del Paese.",
      urlImage: "4.1-differenza-tra-universita-pubblica-e-privata-1280x720.jpg",
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <Carosello></Carosello>
      <Sezione1></Sezione1>
      <div className="card-group margini">
        <div className="row row-cols-1 row-cols-md-3 ">
          {corsi.map((corso) => (
            <Sezione2
              titolo={corso.titolo}
              testo={corso.testo}
              urlImage={corso.urlImage}
            ></Sezione2>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
