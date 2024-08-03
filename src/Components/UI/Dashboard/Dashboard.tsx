import React from 'react';
import { RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import Dashbox from './Dashbox';
import { getLabelByName } from "../../Exports/Labels";
// TODO da verificare dopo implementazione WS
import { ArrayDashBox } from './IDashboardData';
import DashboardGraphs from './DashboardGraphs';
import DashLegend from './DashLegend';

const Dashboard = () => {
  const user = RetrieveUserData();
  
  return (
    <div id="dashboard">
      <p><span>{  getLabelByName("dashboard_title") }</span></p>
      <p><span>{  getLabelByName("dashboard_subtitle") }</span></p>

      <div id="dashcontainer">
      {
        // TODO da verificare dopo implementazione WS
        ArrayDashBox.filter(dashbox => dashbox.user === user.name).map((filteredDashbox, index) => (
          <Dashbox key={index} classRole={filteredDashbox.classRole} header={filteredDashbox.header} link={filteredDashbox.link} />
        ))}
        <div className='clear' />
      </div>

      <DashboardGraphs />

      <DashLegend />
    </div>
  );

}

export default Dashboard;




