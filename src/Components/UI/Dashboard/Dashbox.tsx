import React, { useState } from 'react';

interface IReceivedData {
  classRole: string,
  Header: string,
  Link: string
}

const Dashbox = ({ classRole,Header,Link }: IReceivedData) => {
  return (
    <div className="dashbox">
      <div className={classRole}>
        {Header}
      </div>
      <div>
        <a href={Link}>Vai al dettaglio</a> 
        <a className="ico" href={Link}>-&gt;</a> 
      </div>
      
    </div>
  );
}

export default Dashbox;