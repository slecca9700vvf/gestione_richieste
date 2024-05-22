import React from 'react';
import './Authentication.css';

function Logged() {
  return (
    <div className="request form-container">
      <div className="form-group">
          <label>
            {"Loggato!"}
          </label>
        </div>
      <div className="form-group">
        <button type="button" >
          Logout
        </button>
      </div>
    </div>
);
}


export default Logged;
