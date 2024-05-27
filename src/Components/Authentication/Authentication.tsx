import React from 'react';
import Login from './Login';
import Logged from './Logged';
import { useSelector } from "react-redux";

import './Authentication.css';

const Auth = () => {
  const isLogged = 0;
  
  const isLoggedStore = useSelector(
    (isLogged:any) => isLogged.AuthReducer
)

console.log(isLoggedStore)

  return(
    <div className='main'>
      Sono loggato? 
      { isLoggedStore ? "SI" : "NO" }



        { isLoggedStore ? <Logged/> : <Login/>  }
    </div>
  );
};

export default Auth;
