import { Link } from "react-router-dom";
//import { useContext} from 'react';
//import { AuthContext } from '../../contexts/AuthContext';
import "./Dashboard.css";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";

export default function DashboardAdmin() {
  //const {userDetails} = useContext(AuthContext);
  let userDetails = useSelector((state) => {
    return state.autenticazione.userDetails.decodedToken;
  });

  return (
    <>
      <div className="user-profile">
        <img src="profilo.jpg" alt="profilo" className="profile-img" />
        <h1 className="user-email">Profilo ADMIN: {userDetails.email}</h1>
      </div>

      <section className="sezione">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img src="utent.jpg" className="card-img-top" alt="utenti" />
                <div className="card-body">
                  <h5 className="card-title">Lista Utenti</h5>
                  <p className="card-text">Modifica o elimina Utenti.</p>
                  <Link to="/lista-utenti" className="btn btn-primary">
                    Vai agli Utenti
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img
                  src="Formazione.jpg"
                  className="card-img-top"
                  alt="corsi"
                />
                <div className="card-body">
                  <h5 className="card-title">Lista Corsi</h5>
                  <p className="card-text">
                    Modifica, aggiungi o cancella i Corsi.
                  </p>
                  <Link to="/lista-corsi" className="btn btn-primary">
                    Vai ai Corsi
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
