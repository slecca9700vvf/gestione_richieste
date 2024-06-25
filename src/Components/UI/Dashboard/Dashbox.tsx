import React, { useState } from 'react';

interface ricezione {
  classeRuolo: string,
  Intestazione: string,
  Link: string
}

const Dashbox = ({ classeRuolo,Intestazione,Link }: ricezione) => {
  return (
    <div className="dashbox">
      <div className={classeRuolo}>
        {Intestazione}
      </div>
      <div>
        <a href={Link}>Vai al dettaglio</a> 
        <a className="ico" href={Link}>-&gt;</a> 
      </div>
      
    </div>
  );
}

export default Dashbox;