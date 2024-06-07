import React, { useState } from 'react';
import CheckAuth from '../../Authentication/CheckAuth';
import labels from '../../../API-Labels/labels.json'
import { IUser } from '../../../Interfaces/IUser'

function HomePage() {

  const isLogged = CheckAuth();

  // TODO: Recuperare user dallo storage (?)
  const [user, setUser] = useState<IUser>();
  // const user:IUser = {
  //   name: "pippo",
  //   surname: "pluto",
  //   idUtente: "paperino" 
  // }

  // setUser() = {

  // }

  return (
    <div className="homepage">
      <h2>{ labels.home_page.title }</h2>
      <h3>{ isLogged ? 'Sei Loggato come: ' + user?.nome : 'Non sei loggato' }</h3>
    </div>
  );
}

export default HomePage;
