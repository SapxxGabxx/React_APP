import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";
//import { jwtDecode } from 'jwt-decode';

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credenziali, setCredenziali] = useState({
    email: "",
    password: "",
  });

  const [userDetails, setUserDetails] = useState({});

  //utilizzato per mantenere utente loggato anche al ricaricamento della pagina

  //     useEffect(() => {
  //         const token = localStorage.getItem('token');
  //         if (token) {

  //             const decoded = jwtDecode(token);
  //             setUserDetails(decoded);
  //             setIsLoggedIn(true);

  //         }
  //     }, []);

  //     const login = (token) => {
  //         localStorage.setItem('token', token);
  //         const decoded = jwtDecode(token);
  //         setUserDetails(decoded);
  //         setIsLoggedIn(true);
  //   };

  //     const logout = () => {
  //         localStorage.removeItem('token');
  //         setIsLoggedIn(false);
  //         setUserDetails({});
  //         setCredenziali({ email: '', password: '' });
  //   };

  const value = {
    isLoggedIn,
    /*login, logout,*/ userDetails,
    setUserDetails,
    credenziali,
    setCredenziali,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
