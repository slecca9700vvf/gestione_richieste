import React from 'react';
import { getLabelByName } from "../../Exports/Labels";

interface IReceivedData {
  classRole: string,
  header: string,
  link: string
}

const Dashbox = ({ classRole,header,link }: IReceivedData) => {
  return (
    <div className="dashbox">
      <div className={classRole+' intestazione'}>
        {header}
      </div>
      <div>
        <a href={link}>{  getLabelByName("label_go_details") }</a> 
        <a className="ico" href={link}>-&gt;</a> 
      </div>
      
    </div>
  );
}

export default Dashbox;