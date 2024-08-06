import React, { useEffect, useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { getLabelByName } from "../Exports/Labels";
import { useParams } from 'react-router-dom';
import { IResponse } from '../../Interfaces/IRequest';
import { getApiByName } from '../Exports/API'
import DynamicForm from './DynamicForm'
import axios from 'axios'
import { IRequestFormField } from '../../Interfaces/IRequest';
import { getRequest } from '../Integrations/Api';

const Request = () => {
  let { request_id } = useParams();
  const [requestFormFields, setRequestFormFields] = useState<IResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [showPGRForm, setShowPGRForm] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<IResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response_data = await getRequestTypes();
        setRequestFormFields(response_data.data);
      } finally {
          setLoading(false);
      }
    }
    fetchData();
  }, [request_id, setLoading]);

  const handleSubmit = async (event:any) => {
    setLoading(true);
    event.preventDefault();
    let request_id = event.target[0].value;
    let formFields:IResponse = await getFields(request_id);
    setFormFields(formFields);
    setShowPGRForm(true);
    setLoading(false);
  }

  let renderedForm:any;
  if (requestFormFields && Array.isArray(requestFormFields)) {
    renderedForm =
      <div>
      <Form.Group className="form-label-title" controlId="field_request_type">
          <Form.Label>{ getLabelByName("field_request_type") }</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="field_request_type">
        <Form.Select aria-label="field_request_type" required>
        <option></option>
          {          
              requestFormFields?.filter((item:any) => item.attivo).map((item:any, index:number) => (
                  <option 
                      value={item.idTipologiaRichiesta}
                      data-value={item.descrizioneTipologiaRichiesta}
                      key={index}>
                          {item.descrizioneTipologiaRichiesta}
                  </option>
              ))
          } 
        </Form.Select>
      </Form.Group>
      </div>;
  }
    
  return (
    <div className='main'>
      <div className='form--wrapper request--wrapper'>
        {!showPGRForm ? (
            <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
                { renderedForm }
                {!loading ? (
                  <Button className="w-100" variant="primary" type="submit">
                    { getLabelByName("forms_request_type_submit") }
                  </Button>
                ) : (
                  <Button className="w-100 mt-10" variant="primary" type="submit" disabled>
                    { getLabelByName("forms_request_type_submit") }
                  </Button>
                )}
            </Form>
          ) : (
            <DynamicForm fields={formFields}></DynamicForm>
          )
        }
      </div>
    </div>    
  );
}

async function getRequestTypes() {
  let api_url = getApiByName("getRequestTypes").url;
  const response = await getRequest(api_url, true);
  return response;
}

async function getFields(request_id:any) {
  // TODO Uncomment next line - Integrare API con BE
  //  const api_url_all = getApiByName("getRequestFields").url + "all";
  const api_url_all = "http://localhost:3000/fields.json";
  const api_url_id = getApiByName("getRequestFields").url + request_id;
  const response_all = await getRequest(api_url_all, true);
  const response_id = await getRequest(api_url_id, true);
  let responseTmp:any = [];
  let response_all_data:any = [];
  let response_id_data:any = [];

  if(response_all.status === getLabelByName("labelOK")) {
    response_all_data = response_all.data.data;
    responseTmp = responseTmp.concat(response_all_data);
  }

  if(response_id.status === getLabelByName("labelOK")) {
    response_id_data = response_id.data.modelloJson?.data;
    responseTmp = responseTmp.concat(response_id_data);
  }

  const response = responseTmp.map((item:IRequestFormField, index:number) => {
    return { ...item, id: index + 1 };
  });

  return response;
}

export default Request;