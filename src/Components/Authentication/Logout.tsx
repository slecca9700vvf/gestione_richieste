import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Alert } from "react-bootstrap";
import { getLabelByName } from "../Exports/Labels";

const Logout = () => {
  const logoutDispatch = useDispatch();

  const handleSubmit = async (event:any) => {
    event.preventDefault();
      logoutDispatch({
        type: "LOGOUT",
      });
  }

  return (
    <div className="sign-out--wrapper">
      {/* Overlay */}
      <div className="sign-out--backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
          <Button className="w-100" variant="primary" type="submit">
            { getLabelByName("auth_logout") }
          </Button>
      </Form>  
    </div>
  );
}


export default Logout;
