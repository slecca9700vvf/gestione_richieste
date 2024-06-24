import React, { useEffect, useState } from 'react';
import { Form, Button } from "react-bootstrap";
import './Request.css';
import { getLabelByName } from "../../Exports/Labels";
import DynamicFormField from '../DynamicFormField';
import { useParams } from 'react-router-dom';
import { IResponse } from '../../../Interfaces/IRequest';
import { getApiByName } from '../../Exports/API'
import axios from 'axios'

//TODO Remove next line
import fieldsAll from '../../../API-Labels/defaultRequestAll.json'

const Request = () => {
  let { request_id } = useParams();
  const [formFields, setFormFields] = useState<IResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
        try {
          setLoading(true)
          const response_data = await getFields(request_id);
          setFormFields(response_data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }
    fetchData();
  }, []);

  const handleSubmit = (event:any) => {
    setLoading(true);
    event.preventDefault();
    console.log(event);

    alert("richiesta");
    setLoading(false);
  }

  let renderedForm:any;
  if (formFields && Array.isArray(formFields)) {
    renderedForm = 
      formFields?.map((field:any) => (
        <DynamicFormField field={field} setLoading={setLoading} loading={loading} key={field.name}/>
      ));
  }

  return (
    <div className='form--wrapper request--wrapper'>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        { renderedForm }
        {!loading ? (
          <div>
            <Button className="w-100" variant="secondary" type="reset">
              { getLabelByName("forms_request_reset") }
            </Button>
            <Button className="w-100" variant="primary" type="submit">
              { getLabelByName("forms_request_submit") }
            </Button>
          </div>
        ) : (
          <div>
            <Button className="w-100" variant="secondary" type="reset">
              { getLabelByName("forms_request_reset") }
            </Button>
            <Button className="w-100 mt-10" variant="primary" type="submit" disabled>
              { getLabelByName("forms_request_submit") }
            </Button>
          </div>
        )}

      </Form>
    </div>
  );
}

async function getFields(request_id:any) {
  let apiAll = getApiByName("getRequestFields").url + "all";
  let apiSpecific = getApiByName("getRequestFields").url + request_id;

  let response_data:any;
  let response_data_second:any;

  console.log(request_id);

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