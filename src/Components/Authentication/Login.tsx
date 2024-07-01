import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ILoginResponse } from "../../Interfaces/ILogin";
import axios from 'axios';
import { getApiByName } from "../Exports/API";
import { getLabelByName } from "../Exports/Labels";
import { IUserLogin } from '../../Interfaces/IUser';
import { sanitize } from '../Common/Sanitize';
import { Form, Button } from "react-bootstrap";
import { IResponse } from '../../Interfaces/IRequest'
//TODO Remove next line
import loginJSON from '../../API-Labels/defaultLogin.json'

const Login = () => {
  const [accountName, setAccountName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);

  const loginDispatch = useDispatch();
  
  const verifyUser:any = async(accountName: string, password: string) => {
    if(accountName === "" || password === "") {
      return "Dati errati o vuoti!";
    }
    
    //TODO Remove next lines
    // let tmpResponse:IResponse = {
    //   data: {
    //     user: loginJSON.utente,
    //     token: loginJSON.token,
    //     menu: loginJSON.menuObject,              
    //   },
    //   status: labels.general.labelOK
    // }
    // return tmpResponse
    
    //uncomment next lines
    // TODO Login call
    
    let userObj:IUserLogin = {
      accountName,
      password
    }
    
    try {
      //TODO Change call to post and use userObj as request -> uncomment next lines ;)
      // const response = await axios.post<ILoginResponse>(
      const api_login_url = getApiByName("login").url;

      const response = await axios.get<ILoginResponse>(
        api_login_url + accountName,
        // userObj
      );
      
      if(Object.keys(response.data).length > 0) {
        let tmpResponse:IResponse = {
          data: {
            user: response.data.utente,
            token: response.data.token,
            menu: response.data.menu,              
            note: response.data.note,              
          },
          status: getLabelByName("labelOK")
        }        
        return tmpResponse;
      } else {
        let tmpResponse:IResponse = {
          data: null,
          status: getLabelByName("labelKO")
        }
        return tmpResponse;
      }
    } catch (error) {
      let tmpResponse:IResponse = {
        data: { error },
        status: getLabelByName("labelKO")
      }
      return tmpResponse;
    }
  };
  
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setLoading(true);
    const userResponse = await verifyUser(sanitize(accountName), sanitize(password));
    if(userResponse.data !== null && userResponse.status === getLabelByName("labelOK")) {
      loginDispatch({
        type: "LOGIN",
        user: userResponse.data.user,
        token: userResponse.data.token,
        menu: userResponse.data.menu,
        note: userResponse.data.note
      });
    } else {
      if(userResponse.data === null) {
        setErrorLogin(true)
      }
      else {
        setErrorLogin(true)
        console.error(userResponse)
      }
    }
    setLoading(false);
  }
  
  const handlePassword = (event:any) => {
    event.preventDefault();
    window.open( getLabelByName("auth_reset_psw_link"), "_blank");
  };
  return (
    <div className="sign-in--wrapper form--wrapper">
      {/* Overlay */}
      <div className="sign-in--backdrop"></div>
      
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="accountName">
          <Form.Label>{ getLabelByName("auth_username") }</Form.Label>
          <Form.Control
            type="text"
            value={accountName}
            placeholder={ getLabelByName("auth_username") }
            onChange={
              (tagUsername) => {
                setAccountName(tagUsername.target.value)
              }
            }
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>{ getLabelByName("auth_password") }</Form.Label>
          <Form.Control
            type="password"
            placeholder={ getLabelByName("auth_password") }
            value={password}
            onChange={
              (tagPassword) => {
                setPassword(tagPassword.target.value)
              }
            }
            required
          />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            { getLabelByName("auth_login") }
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            { getLabelByName("auth_login_in_progress") }
          </Button>
        )}
        {errorLogin ? (
          <div className="d-grid justify-content-center">
            <Button
              className="text-muted px-0"
              variant="link"
            >
            { getLabelByName("auth_error") }
            </Button>
          </div>
        ) : ''}

        <div className="d-grid justify-content-center">
          <Button
            className="text-muted px-0"
            variant="link"
            onClick={handlePassword}
          >
            { getLabelByName("auth_forget_password") }
            </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
