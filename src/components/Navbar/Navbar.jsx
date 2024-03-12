//import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
//import { AuthContext } from '../contexts/AuthContext';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Reduser/login";

export default function Navbar() {
  let dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => {
    return state.autenticazione;
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BEST COURSES
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {isLoggedIn ? (
            <>
              <div className="navbar-nav">
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-outline-danger mr-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </div>
            </>
          ) : (
            <>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <Link
                    className="nav-link btn btn-outline-primary mr-2"
                    to="/login"
                  >
                    SignIn
                  </Link>
                  <Link
                    className="nav-link btn btn-outline-primary"
                    to="/registrazione"
                  >
                    SignUp
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
