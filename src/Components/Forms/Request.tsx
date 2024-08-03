import React, { useEffect, useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { getLabelByName } from "../Exports/Labels";
import { useParams } from 'react-router-dom';
import { IResponse } from '../../Interfaces/IRequest';
import { getApiByName } from '../Exports/API'
import DynamicForm from './DynamicForm'
import axios from 'axios'
import { IRequestFormField } from '../../Interfaces/IRequest';

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
          setRequestFormFields(response_data);
        } catch (error) {
            console.error("Error fetching data:", error);
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
      <Form.Group className="mb-5" controlId="field_request_type">
        <Form.Label>{ getLabelByName("field_request_type") }</Form.Label>
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
    </Form.Group>;
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
  let api = getApiByName("getRequestTypes").url;
  //TODO Verificare gestione token
  let token = localStorage.getItem("token");
  let response_data:any;
  await axios.get<IResponse>(
      api,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }

  ).then((response) => {
      response_data = response.data
  }).catch((error) => {
      console.error(error)
  });
  return response_data;
}

async function getFields(request_id:any) {
  //TODO Remove next line
  let apiAll = "http://localhost:3000/fields.json";
  //TODO Uncomment next line
  // let apiAll = getApiByName("getRequestFields").url + "all";

  let apiSpecific = getApiByName("getRequestFields").url + request_id;

  //TODO Verificare gestione token
  let token = localStorage.getItem("token");

  let response_data:any = [];
  let response_data_second:any = [];

  await axios.get<IResponse>(
    apiAll,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  ).then((response) => {
    response_data = response.data.data
  }).catch((error) => {
      console.error(error)
  });

  await axios.get<IResponse>(
    apiSpecific,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  ).then((response) => {
    response_data_second = response.data.modelloJson?.data
  }).catch((error) => {
      console.error(error)
  });
  response_data = response_data.concat(response_data_second);
  const response = response_data.map((item:IRequestFormField, index:number) => {
    return { ...item, id: index + 1 }; // Indice progressivo, inizia da 1
  });

  return response;
}

export default Request;