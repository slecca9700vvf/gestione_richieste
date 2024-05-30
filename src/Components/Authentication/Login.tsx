import React, { useState } from "react";
import './Authentication.css';
import { useDispatch } from "react-redux";
// import ILogin from './Interfaces/ILogin'
import axios from 'axios';  //impriamo axios per il servizio
import labels from '../../Labels.json'

function Login() {
  const labelOK = "OK";
  const labelKO = "OK";
  const API = "http://localhost:3000";

  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const verifyUser:any = (username: string, password: string) => {
    if(username === "" || password === "") {
      return {"status": labelKO}
    }
    // TODO Call backend API

    // let userObj = {
    //   username,
    //   password
    // }
    // await axios.post<ILogin>(
    //   "http://localhost:3000/login.json", userObj
    // )
    //   .then(
    //     (response) => {
    //       console.log(response.data)
    //       return response.data
    //     }
    //   )
    //   .catch(
    //     (error) => {
    //         console.log(error)
    //     }
    // )

    return {"status": labelOK}
  };
  const loginDispatch = useDispatch();
  return (
    <div className="request form-container">
      <form action="#">
        <div className="form-group">
          <label>
            { labels.auth.username }
          </label>
          <input 
            type="text"
            id="username"
            placeholder={ labels.auth.username }
            value={username}
            onChange={
              (tagUsername) => {
                // TODO: Bonificare per evitare attacchi XSS
                setUserName(tagUsername.target.value)
              }
            }
            required
          />
        </div>
        <div className="form-group">
          <label>
            { labels.auth.password }
          </label>
          <input
            type="password"
            id="password"
            placeholder={ labels.auth.password }
            value={password}
            onChange={
              (tagPassword) => {
                // TODO: Bonificare per evitare attacchi XSS
                setPassword(tagPassword.target.value)
              }
            }
            required
          />
        </div>


        <button
                onClick={
                    () => {
                      if(verifyUser(username, password)?.status === labelOK) {
                        console.log("user verificato")
                        loginDispatch({
                          type: "LOGIN",
                        });
                      }
                    }
                }
          >{ labels.auth.login }
          </button>
      </form>  
  </div>
);
}

export default Login;
