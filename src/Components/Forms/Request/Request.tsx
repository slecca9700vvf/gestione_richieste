import React from 'react';
import './Request.css';
import labels from '../../../Labels.json'

function Request() {
  return (
      <div className="request form-container">
        <h2>{ labels.forms.request.new }</h2>
        <form className="form-container" action="#">
        <div className="form-group-hidden">
          {/* <label for="#userID">
            Id utente
          </label> */}
          <input type="hidden" id="userID" defaultValue={"userID"}/>
        </div>
        <div className="form-group">
          <label htmlFor="#title">
            {"Titolo"}
          </label>
          <input type="text" id="title" placeholder={"Titolo richiesta"} required/>
        </div>
        <div className="form-group">
          <label htmlFor="#description">
            {"Descrizione"}
          </label>
          {/* <textarea id="description" name="textarea" rows="5" cols="30" placeholder={"Descrizione"} required/> */}
        </div>
        <div className="form-group">
          <label htmlFor="#type">
            {"Tipologia"}
          </label>
          {/* le varie options saranno popolate dinamicamente */}
          <select name="type" id="type">
            <option value="type1">Tipo 1</option>
            <option value="type2">Tipo 2</option>
            <option value="type3">Tipo 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="#isPersonal">
            {"E' una richiesta personale?"}
          </label>
          <label>
            <input type="radio" name="isPersonal" value="true"/>{ labels.label_yes }
          </label>
          <label>
            <input type="radio" name="isPersonal" value="false"/>{ labels.label_no }
          </label>

        </div>
        <div className="form-group">
          <label htmlFor="#notes">
            {"Note"}
          </label>
          {/* <textarea id="notes" name="textarea" rows="5" cols="30" placeholder={"Note"} required/> */}
        </div>
        <input type="submit" value="Invia"/>
        </form>  
    </div>
  );
}

export default Request;
