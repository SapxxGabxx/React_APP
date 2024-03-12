import "./Dashboard.css";
import { Link } from "react-router-dom";
//import { AuthContext } from '../../contexts/AuthContext';
//import { useContext } from 'react';
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";

export default function DashboardUtente() {
  //const {userDetails} = useContext(AuthContext);
  let userDetails = useSelector((state) => {
    return state.autenticazione.userDetails.decodedToken;
  });

  return (
    <>
      <div className="user-profile">
        <img src="profilo.jpg" alt="profilo" className="profile-img" />
        <h1 className="user-email">Profilo Utente: {userDetails.email}</h1>
      </div>

      <section className="sezione">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img
                  src="continua.jpg"
                  className="card-img-top"
                  alt="miei-corsi"
                />
                <div class="card-body">
                  <h5 className="card-title">I Miei Corsi</h5>
                  <p className="card-text">
                    Continua ad imparare dai tuoi corsi!
                  </p>
                  <Link to="/miei-corsi" className="btn btn-primary">
                    Vai ai tuoi Corsi
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img
                  src="apprendimento-brain-friendly-992x652.jpeg"
                  className="card-img-top"
                  alt="corsi-disponibili"
                />
                <div className="card-body">
                  <h5 className="card-title">Corsi Disponibili</h5>
                  <p className="card-text">
                    Vedi tutti i corsi disponibili ed inizia ad imparare.
                  </p>
                  <Link to="/corsi-disponibili" className="btn btn-primary">
                    Vedi Corsi Disponibili
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
