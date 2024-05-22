import React, { useContext } from 'react';
import './Authentication.css';
import AuthenticationContext from '../Authentication';


const updateStatus = () => {
  const userName = 1;
  return (
    <AuthenticationContext.Provider value={userName}>
    </AuthenticationContext.Provider>
  );
}

function Login() {




  return (
    <div className="request form-container">
      <form action="#">
        <div className="form-group">
          <label>
            {"Username"}
          </label>
          <input type="text" id="title" placeholder={"Username"} required/>
        </div>
        {/* <div className="form-group">
          <label>
            {"Password"}
          </label>
          <input type="password" id="title" placeholder={"Password"} required/>
        </div> */}
        <input type="submit" value="Login"/>
      </form>  
  </div>
);
}


export default Login;
