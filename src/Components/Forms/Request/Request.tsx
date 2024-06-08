import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import './Request.css';
import labels from '../../../API-Labels/labels.json'


function Request() {
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (event:any) => {
    setLoading(true);
    event.preventDefault();
    alert("richiesta");
    setLoading(false);
  }


  return (
      <div className="request-container form-container">
        <h2>{ labels.forms.request.new }</h2>
        <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
          <div className="form-group-hidden">
            <input type="hidden" id="userID" defaultValue={"userID"}/>
          </div>
          <div className="form-group">
            <label htmlFor="#title">
              { labels.forms.request.title }
            </label>
            <input type="text" id="title" placeholder={"Titolo richiesta"} required/>
          </div>
          <div className="form-group">
            <label htmlFor="#description">
              { labels.forms.request.description }
            </label>
            {/* <textarea id="description" name="textarea" rows="5" cols="30" placeholder={"Descrizione"} required/> */}
          </div>
          <div className="form-group">
            <label htmlFor="#type">
              { labels.forms.request.type }
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
              { labels.forms.request.isPersonal }
            </label>
            <label>
              <input type="radio" name="isPersonal" value="true"/>{ labels.general.label_yes }
            </label>
            <label>
              <input type="radio" name="isPersonal" value="false"/>{ labels.general.label_no }
            </label>

          </div>
          <div className="form-group">
            <label htmlFor="#notes">
              { labels.forms.request.notes }
            </label>
            {/* <textarea id="notes" name="textarea" rows="5" cols="30" placeholder={"Note"} required/> */}
          </div>
          {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            { labels.forms.request.submit }
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            { labels.forms.request.submit_in_progress }
          </Button>
        )}
        </Form>
    </div>
  );
}

export default Request;
