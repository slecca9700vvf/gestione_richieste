import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getApiByName } from "../Exports/API";
import { getLabelByName } from "../Exports/Labels";
import { sanitize } from '../Common/Sanitize';
import { Form, Button } from "react-bootstrap";
import { getRequest } from "../Integrations/Api";
// import { IUserLogin } from '../../Interfaces/IUser';

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
    const api_login_url = getApiByName("login").url;
    // TODO Login call: getRequest -> postRequest
    // let userObj:IUserLogin = {
    //   accountName,
    //   password
    // }
    // const response = await postRequest(api_login_url, userObj, false);
    const response = await getRequest(api_login_url + accountName, false);
    return response;
  }

  const getMenuUser:any = async() => {
    const api_url = getApiByName("getMenuUser").url;
    const response = await getRequest(api_url, true);
    return response;
  }
  
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setLoading(true);
    const userResponse = await verifyUser(sanitize(accountName), sanitize(password));
    if(userResponse.data !== null && userResponse.status === getLabelByName("labelOK")) {
      /* E' necessario triggerare due volte il dispatch login in modo da garantire:
         - il salvataggio in storage dei dati utente tra cui il token (trigger 1)
         - il menu utente che necessità di utilizzare il token appena salvato
      */
      loginDispatch({
        type: "LOGIN",
        user: userResponse.data.utente,
        token: userResponse.data.token,
        menu: userResponse.data.menu,
        note: userResponse.data.note,
        // TODO Integrare API di refreshToken con BE
        //    TODO ricevere timestamp da backend con scadenza
        //    token_expire: userResponse.data.token_expire
      });

      const userMenu = await getMenuUser();
      loginDispatch({
        type: "LOGIN",
        user_menu: userMenu.data
      });
    } else {
      if(userResponse.data === null) {
        setErrorLogin(true)
      }
      else {
        setErrorLogin(true)
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