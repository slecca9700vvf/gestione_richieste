import React, { useEffect, useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { getLabelByName } from "../Exports/Labels";
import DynamicFormField from './DynamicFormField';
import { useParams } from 'react-router-dom';
import { IResponse } from '../../Interfaces/IRequest';
import { getApiByName } from '../Exports/API'
import DynamicForm from './DynamicForm'
import axios from 'axios'

//TODO Remove next line
import fieldsAll from '../../API-Labels/defaultRequestAll.json'

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
          const response_data = await getRequestTypes(request_id);
          setRequestFormFields(response_data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }
    fetchData();
  }, []);

  const handleSubmit = async (event:any) => {
    setLoading(true);
    event.preventDefault();
    let request_id = event.target[0].value;
    console.log("richiesta con id " + request_id);
    setLoading(false);
    let formFields:IResponse = await getFields(event.target[0].value);
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
              requestFormFields?.map((item:any, index:number) => (
                  <option 
                      value={item.id_tipologia}
                      data-value={item.name}
                      key={index}>
                          {item.value}
                  </option>
              ))
          } 
        </Form.Select>
    </Form.Group>;
  }
    

  return (
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
  );
}

async function getRequestTypes(request_id:any) {
// TODO Uncomment next line
//   let api = getApiByName("getRequestTypes").url;

//TODO Remove next line
    let api = "http://localhost:3000/tipologie_richiesta.json";

    let response_data:any;
    await axios.get<IResponse>(
        api
    ).then((response) => {
        response_data = response.data.data
    }).catch((error) => {
        console.error(error)
    });
    return response_data;
}

async function getFields(request_id:any) {
  let apiAll = getApiByName("getRequestFields").url + "all";
  let apiSpecific = getApiByName("getRequestFields").url + request_id;

  let response_data:any;
  let response_data_second:any;

  switch(request_id) {
    case "3":
      break;
    case "6":
      //TODO Uncomment next lines
        // await axios.get<IResponse>(
        //   apiAll
        // ).then((response) => {
        //   response_data = response.data.data
        // }).catch((error) => {
        //     console.error(error)
        // });

        // await axios.get<IResponse>(
        //   apiSpecific
        // ).then((response) => {
        //   response_data_second = response.data.data
        // }).catch((error) => {
        //     console.error(error)
        // });
        // response_data = response_data.concat(response_data_second);
      
    //TODO Remove next line
          response_data = fieldsAll.data;

        return response_data;
      break;
      default:
        response_data = fieldsAll.data;
        return response_data;
      break;
  }
}

export default Request;