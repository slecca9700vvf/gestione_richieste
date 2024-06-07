import React, { useState } from 'react';
import { CheckAuth, RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import labels from '../../../API-Labels/labels.json'
import { IUser } from '../../../Interfaces/IUser'

function HomePage() {

  const isLogged = CheckAuth();
  const user = RetrieveUserData();

  return (
    <div className="homepage">
      <h2>{ labels.home_page.title }</h2>
      <h3>{ isLogged ? 'Sei Loggato come: ' + user?.name + " " + user.surname: 'Non sei loggato' }</h3>
    </div>
  );
}

export default HomePage;
