import React from 'react';
import { getLabelByName } from "../../Exports/Labels";

const DashLegend = () => {
    return (
        <div id="dashlegend">
          <span>{  getLabelByName("dashboard_legendtitle") }</span> 
          <span className='ruoloutente'>{  getLabelByName("dashboard_legenduser") }</span>
          <span className='ruoloresp'>{  getLabelByName("dashboard_legendref") }</span>
          <span className='ruoloevas'>{  getLabelByName("dashboard_legendffev") }</span>
          <span className='ruolocomand'>{  getLabelByName("dashboard_legendcomand") }</span>
          <span className='clear' />
        </div>
      );
    
    }
    
    export default DashLegend;
    