import React, { useState } from 'react';
import { CheckAuth, RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import Dashbox from './Dashbox';
import { ArrayDashBox } from './dashjsontemp';

const Dashboard = () => {
  const isLogged = CheckAuth();
  const user = RetrieveUserData();
  

  return (
    <div id="dashboard">
      <h4>Benvenuto sulla tua scrivania virtuale di Gestione Richieste</h4>
      <h4>di seguito trovi i contenuti che richiedono al più presto la tua attenzione</h4>
      {
        ArrayDashBox.filter(dashbox => dashbox.utente == user.name).map(filteredDashbox => (
          <Dashbox classeRuolo={filteredDashbox.classeRuolo} Intestazione={filteredDashbox.Intestazione} Link={filteredDashbox.Link} />
        ))}
      
    </div>
  );

}

export default Dashboard;
