import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from "react-bootstrap";
import { getLabelByName } from "../Exports/Labels";
import { useNavigate, Navigate } from 'react-router-dom';
import { getApiByName } from '../Exports/API';
import { postRequest } from '../Integrations/Api';

const Logout = () => {
  const logoutDispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorLogout, setErrorLogout] = useState<boolean>(false);
  const [logout, setLogout] = useState<boolean>(false);
  const navigate = useNavigate();

  const logoutUser:any = async() => {
      const api_logout_url = getApiByName("logout").url;
      const response = await postRequest(api_logout_url, [], true);
      return response;
  }

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setLoading(true);
    const userResponse = await logoutUser();
    if(userResponse.data !== null && userResponse.status === getLabelByName("labelOK")) {
      logoutDispatch({
        type: "LOGOUT",
      });
      setLogout(true);
      navigate('/', {state: {fromLogout: true}})

    } else {
      if(userResponse.data === null) {
        setErrorLogout(true)
      }
      else {
        setErrorLogout(true)
      }
    }
    setLoading(false);
  }

  return (
    <div className='main'>
      { !logout ? (
        <div className="sign-out--wrapper form--wrapper">
          {/* Overlay */}
          <div className="sign-out--backdrop"></div>
          <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
            <Form.Label className='mb-4'>{ getLabelByName("auth_logout_confirm") }</Form.Label>
            <Button className="w-100" variant="primary" type="submit">
              { getLabelByName("auth_logout") }
            </Button>
          </Form>  
      </div>
      ) : (
        <Navigate to="/"/>
      )}
      {!loading ? (
        <Button className="w-100" variant="primary" type="submit">
          { getLabelByName("auth_login") }
        </Button>
      ) : (
        <Button className="w-100" variant="primary" type="submit" disabled>
          { getLabelByName("auth_login_in_progress") }
        </Button>
      )}
      {errorLogout ? (
        <div className="d-grid justify-content-center">
          <Button
            className="text-muted px-0"
            variant="link"
          >
          { getLabelByName("auth_error") }
          </Button>
        </div>
      ) : ''}
    </div>
    );
}

export default Logout;