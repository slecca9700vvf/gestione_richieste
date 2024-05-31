import React from 'react';
import { useDispatch } from 'react-redux';
import labels from '../../API-Labels/labels.json'

function Logout() {
  const logoutDispatch = useDispatch();
  return (
    <div className="request form-container">
      <div className="form-group">
          <label>
            { labels.auth.authenticated }
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
      >{ labels.auth.logout }
      </button>
      </div>
    </div>
);
}


export default Logout;
