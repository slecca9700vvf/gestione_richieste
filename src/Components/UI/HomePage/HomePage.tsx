import React, { useState } from 'react';
import { CheckAuth, RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import { getLabelByName } from "../../Exports/Labels";

const HomePage = () => {
  const isLogged = CheckAuth();
  const user = RetrieveUserData();

  return (
    <div className="homepage">
      <h2>{ getLabelByName("home_page_title") }</h2>
      <h3>{ isLogged ? 'Sei Loggato come: ' + user?.name + " " + user.surname: 'Non sei loggato' }</h3>
    </div>
  );
}

export default HomePage;
