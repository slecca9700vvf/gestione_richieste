import React from 'react';
import { CheckAuth, RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import { getLabelByName } from "../../Exports/Labels";
import Dashboard from '../Dashboard/Dashboard';

const HomePage = () => {
  const isLogged = CheckAuth();

  //TODO Remove next line and setup components
  const defultMessage = "In questa sezione sarà visibile l'elenco di: Novità software, documentazione, contatti utili!"
  return (
    <div className="homepage">
      { isLogged ? (
        <Dashboard/>
      ) : (
        defultMessage
      )
      }
    </div>
  );
}

export default HomePage;
