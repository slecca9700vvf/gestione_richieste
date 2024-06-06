import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ILoginResponse } from "../../Interfaces/ILogin";
import axios from 'axios';
import api from '../../API-Labels/api.json'
import labels from '../../API-Labels/labels.json'
import { IUserLogin } from '../../Interfaces/IUser';
import { sanitize } from '../Common/Sanitize';

interface IResponse {
  data: object | null,
  status: string
}

function Login() {
  const [accountName, setAccountName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginDispatch = useDispatch();
  
  const verifyUser:any = async(accountName: string, password: string) => {
    if(accountName === "" || password === "") {
      return "Dati errati o vuoti!";
    }
    
    let userObj:IUserLogin = {
      accountName,
      password
    }
    
    try {
      //TODO Change call to post and use userObj as request -> uncomment next lines ;)
      // const response = await axios.post<ILoginResponse>(
      const response = await axios.get<ILoginResponse>(
          api.base_url + api.login.url + accountName,
        // userObj
      );
      
      if(Object.keys(response.data).length > 0) {
        let tmpResponse:IResponse = {
          data: {
            user: response.data.utente,
            token: response.data.token,
            menu: response.data.menuObject,              
          },
          status: labels.general.labelOK
        }

        return tmpResponse;
      } else {
        let tmpResponse:IResponse = {
          data: null,
          status: labels.general.labelKO
        }
        return tmpResponse;
      }
    } catch (error) {
      let tmpResponse:IResponse = {
        data: { error },
        status: labels.general.labelKO
      }
      return tmpResponse;
    }
  };
  
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
          value={accountName}
          onChange={
            (tagUsername) => {
              setAccountName(tagUsername.target.value)
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
              setPassword(tagPassword.target.value)
            }
          }
          required
          />
        </div>
        <button
        onClick={
          async () => {
            const userResponse = await verifyUser(sanitize(accountName), sanitize(password));
            if(userResponse.data !== null && userResponse.status === labels.general.labelOK) {
              loginDispatch({
                type: "LOGIN",
                user: userResponse.data.user,
                token: userResponse.data.token,
                menu: userResponse.data.menu,
              });
            } else {
              if(userResponse.data === null) {
                alert("controlla i dati inseriti!")
              }
              else {
                console.log("errore: " + userResponse)
              }
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
