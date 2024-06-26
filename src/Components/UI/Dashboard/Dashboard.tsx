import React, { useState } from 'react';
import { CheckAuth, RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import Dashbox from './Dashbox';
import { ArrayDashBox } from './IDashboardData';
import { getLabelByName } from "../../Exports/Labels";

const Dashboard = () => {
  const user = RetrieveUserData();
  
  return (
    <div id="dashboard">
      <p><span>{  getLabelByName("dashboard_title") }</span></p>
      <p><span>{  getLabelByName("dashboard_subtitle") }</span></p>
      {
        ArrayDashBox.filter(dashbox => dashbox.user == user.name).map(filteredDashbox => (
          <Dashbox classRole={filteredDashbox.classRole} Header={filteredDashbox.Header} Link={filteredDashbox.Link} />
        ))}
      
    </div>
  );

}

export default Dashboard;

