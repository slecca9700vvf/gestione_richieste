import React, { useState } from 'react';
import Login from './Login';
import Logged from './Logged';
import './Authentication.css';

function Authentication() {
  //gestita tramite state
  let isLoggedIn = false;

  return (
    <div className="auth-form form-container">
      { isLoggedIn ? <Logged/> : <Login/>  }
    </div>
  );
}

export default Authentication;
