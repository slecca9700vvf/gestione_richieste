import React from 'react';
import { useDispatch } from 'react-redux';
import './Authentication.css';

function Logged() {

  const logoutDispatch = useDispatch();
  return (
    <div className="request form-container">
      <div className="form-group">
          <label>
            {"Loggato!"}
          </label>
        </div>
      <div className="form-group">
      <button
        onClick={
            () => {
                logoutDispatch({
                  type: "LOGOUT",
                });
            }
        }
      >Login
      </button>
      </div>
    </div>
);
}


export default Logged;
