import React from 'react';
import './Sector.css';
import labels from '../../../API-Labels/labels.json'


function Sector() {
    return (
        <div className="sector form-container">
        <h2>{ labels.forms.sector.new }</h2>
            <form action="#" method="post">
                <label htmlFor="sector">{ labels.forms.sector.description }</label>
                <input type="text" id="sector" name="sector" placeholder="Inserisci la descrizione del settore..." required/>
                <label htmlFor="additionalInfo">{ labels.forms.sector.additional_info }</label>
                <input type="text" id="additionalInfo" name="additionalInfo" placeholder="Inserisci altro testo..." required/>
                <input type="submit" value="Invia"/>
            </form>
        </div>
        );
}
export default Sector;