import React, { createContext, useContext } from 'react';
import Login from './Authentication/Login';
import Logged from './Authentication/Logged';
import './Authentication/Authentication.css';
import Header from './UI/Header/Header';

const AuthenticationContext = createContext(0);

const Auth = () => {
  const isLogged = useContext(AuthenticationContext);
  return(
    <div className='main'>
      <AuthenticationContext.Provider value={isLogged}>
        { isLogged ? <Logged/> : <Login/>  }
      </AuthenticationContext.Provider>
    </div>
  );
};

export default Auth;
