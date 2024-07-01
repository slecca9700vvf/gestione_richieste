import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Alert } from "react-bootstrap";
import { getLabelByName } from "../Exports/Labels";
import { useNavigate, Navigate } from 'react-router-dom';

const Logout = () => {
  const logoutDispatch = useDispatch();
  const [logout, setLogout] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event:any) => {
    event.preventDefault();
      logoutDispatch({
        type: "LOGOUT",
      });
      setLogout(true);
      navigate("/");
  }

  return (
    <div className='main'>
      { !logout ? (
        <div className="sign-out--wrapper">
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
        <Navigate to="/" />
      )}
    </div>
    );
}

export default Logout;