import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { getLabelByName } from "../Exports/Labels";
import DynamicFormField from './DynamicFormField';
import { IResponse } from '../../Interfaces/IRequest';

interface IForm {
  fields: IResponse | null
}

const DynamicForm = (fields:IForm) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event:any) => {
    setLoading(true);
    event.preventDefault();
    alert("richiesta");
    setLoading(false);
  }


  let renderedForm:any;
  if (fields.fields && Array.isArray(fields.fields)) {
    renderedForm = 
      fields.fields?.map((field:any) => (
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

export default DynamicForm;