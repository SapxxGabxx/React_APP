import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Registrazione() {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  const regex = {
    nome: /^[A-Za-zèùàòé][a-zA-Z'èùàòé ]*$/,
    cognome: /^[A-Za-zèùàòé][a-zA-Z'èùàòé ]*$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{6,20}$/,
  };

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    let errori = [];

    if (!regex.nome.test(formInput.nome)) {
      errori.push("Il nome non è valido.");
    }
    if (!regex.cognome.test(formInput.cognome)) {
      errori.push("Il cognome non è valido.");
    }
    if (!regex.email.test(formInput.email)) {
      errori.push("L'email non è valida.");
    }
    if (!regex.password.test(formInput.password)) {
      errori.push("La password non è valida.");
    }

    if (errori.length > 0) {
      alert(errori.join("\n"));
      //console.log("entro qui")
    } else {
      console.log(formInput);
      const url = "http://localhost:8080/api/utente/registrazione";

      try {
        const response = await fetch(url, {
          mode: "cors",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formInput),
        });

        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        setFormInput(formInput);
        alert("Registrazione completata con successo!");
        navigate("/login");
      } catch (error) {
        console.error("Errore:", error);
        alert("Email già esistente: Inserisci altra email!");
      }
    }
  };
  return (
    <>
      <div className="stile">
        <div className="container">
          <div className="sfondo">
            <h1 className="mb-5">SignUp</h1>
            <form className="sfondo" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="nome"
                  placeholder="Nome"
                  onChange={handleChange}
                  value={formInput.nome}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="cognome"
                  placeholder="Cognome"
                  onChange={handleChange}
                  value={formInput.cognome}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formInput.email}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formInput.password}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Registrati
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
