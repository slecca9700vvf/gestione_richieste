import React, { useState } from 'react';
import { CheckAuth, RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import Dashboard from '../Dashboard/Dashboard';
import { getLabelByName } from "../../Exports/Labels";

const HomePage = () => {
  const isLogged = CheckAuth();
  const user = RetrieveUserData();

  //TODO Remove next line and setup components
  const defultMessage = `In questa sezione sarà visibile l'elenco di: Novità software, documentazione, contatti utili!`
  return (
    <div className="homepage">
      { isLogged ? (
        <Dashboard/>
      ) : (
        <label>
          Home Page
          <br/>
          { defultMessage }
        </label>
      )
      }
    </div>
  );
}

export default HomePage;
