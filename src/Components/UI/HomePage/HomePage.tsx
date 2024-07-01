import React, { useEffect, useState } from 'react';
import { CheckAuth, RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import Dashboard from '../Dashboard/Dashboard';
import { getLabelByName } from "../../Exports/Labels";
import TabNavigation from '../TabNavigation/TabNavigation';
import tabs from '../../../API-Labels/defaultTabsHomePage.json'

const HomePage = () => {
  const isLogged = CheckAuth();
  const classes = "homepage--wrapper" + " " + (isLogged ? "auth-true" : "auth-false");

  //TODO Remove next line and setup components
  const defultMessage = `In questa sezione sarà visibile l'elenco di: Novità software, documentazione, contatti utili!`
  return (
    <div className={ classes }>
      { isLogged ? (
        <Dashboard/>
      ) : (
        <div>
          <label className='homepage--auth-false--label'>{ getLabelByName("home_page_default_message") }</label>
          <TabNavigation tabs_data={ tabs }></TabNavigation>
        </div>
      )
      }
    </div>
  );
}

export default HomePage;
