import React from 'react';
import './Sector.css';

function Sector() {
    return (
        <div className="sector form-container">
        <h2>Inserimento Settore di Competenza</h2>
            <form action="#" method="post">
                <label htmlFor="sector">Descrizione del Settore:</label>
                <input type="text" id="sector" name="sector" placeholder="Inserisci la descrizione del settore..." required/>

                <label htmlFor="additionalInfo">Altro Input di Testo:</label>
                <input type="text" id="additionalInfo" name="additionalInfo" placeholder="Inserisci altro testo..." required/>

                <input type="submit" value="Invia"/>
            </form>
        </div>
        );
}
export default Sector;