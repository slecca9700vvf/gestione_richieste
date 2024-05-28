import React, { createContext, useContext, useState, useEffect } from 'react';
import Login from './Login';
import Logged from './Logged';
import { useSelector } from "react-redux";
import CheckAuth from './CheckAuth';

import './Authentication.css';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
      const checkToken = async () => {
          if (isTokenExpired(token)) {
              const newToken = await refreshToken();
              setToken(newToken);
              setIsAuthenticated(!!newToken);
          } else {
              setIsAuthenticated(true);
          }
      };

      checkToken();
  }, [token]);

  const login = (newToken) => {
      saveToken(newToken);
      setToken(newToken);
      setIsAuthenticated(true);
  };

  const logout = () => {
      removeToken();
      setToken(null);
      setIsAuthenticated(false);
  };

  return (
      <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
          {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;

// const Auth = () => {
//   const isLoggedStore = useSelector(
//     (isLogged:any) => isLogged.AuthReducer
// )


//   return(
//     <div className='main'>
//       Sono loggato? 
//       { isLoggedStore ? "Si" : "No" }



//         { isLoggedStore ? <Logged/> : <Login/>  }
//     </div>
//   );
// };

// export default Auth;