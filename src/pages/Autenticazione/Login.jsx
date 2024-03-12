import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Store/Reduser/login";

export default function Login() {
  const { credenziali, setCredenziali } = useContext(AuthContext);

  //const { login } = useContext(AuthContext)
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredenziali({ ...credenziali, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/api/utente/login";
    try {
      const response = await fetch(url, {
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credenziali),
      });

      if (response.ok) {
        const { token } = await response.json();
        dispatch(login(token));
        const decoded = jwtDecode(token);
        const userRole = decoded.ruoli.includes("Admin")
          ? "/admin"
          : "/dashboard";
        navigate(userRole);
      } else {
        alert("Dati errati");
      }
    } catch (error) {
      console.error("Errore: ", error);
    }
  };

  return (
    <>
      <body>
        <div className="stile">
          <div className="container">
            <div className="sfondo">
              <h1 className="mb-5">SignIn</h1>
              <form className="sfondo" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={credenziali.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={credenziali.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
