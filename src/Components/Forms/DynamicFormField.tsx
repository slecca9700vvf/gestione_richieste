import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import { IRequestFormField, IResponse } from "../../Interfaces/IRequest";
import axios from 'axios';
import { getApiByName } from "../Exports/API";
import { getLabelByName } from "../Exports/Labels";
import { getRequest } from "../Integrations/Api";

interface IDynamicField {
    field: IRequestFormField
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const DynamicFormField = ({field, loading, setLoading}:IDynamicField) => {
    const [data, setData] = useState<IResponse>();
    let renderedField:any;

    useEffect(() => {
        if (field.get_data) {
            const fetchData = async ():Promise<any> => {
                try {
                    setLoading(true)
                    const response_data = await getData(field);
                    setData(response_data);
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
        } else {
            setLoading(false);
        }
    }, [field, setLoading]);

    switch(field.type) {
        case "text":
            renderedField = 
                <Form.Group className="mb-2" controlId={field.name + "-" + field?.id}>
                    <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={field?.value}
                        required={field.attributes.required}
                    />
                </Form.Group>;
            break;
        case "number":
            renderedField = 
                <Form.Group className="mb-2" controlId={field.name + "-" + field?.id}>
                    <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                    <Form.Control
                        type="number"
                        defaultValue={field?.value}
                        required={field.attributes.required}
                    />
                </Form.Group>;
            break;
        case "radio":
            renderedField = 
                <Form.Group className="mb-2" controlId={field.name + "-" + field?.id}>
                    <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                    <div className='radio-container'>
                        {
                            field.subitems?.map((item:any, index:number) => (
                                <Form.Check
                                    label={item.value}
                                    name={item.name + "-" + field?.id}
                                    type="radio"
                                    id={`radio-${index}`}
                                    key={index}
                              />
                            )
                        )}
                    </div>
                </Form.Group>;
            break;
        case "checkbox":
            renderedField = 
                <Form.Group className="mb-2" controlId={field.name + "-" + field?.id}>
                    <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                    <div className='checbox-container'>
                        {
                            field.subitems?.map((item:any, index:number) => (
                                <Form.Check
                                    label={item.value}
                                    name={item.name + "-" + field?.id}
                                    type="checkbox"
                                    id={`checkbox-${index}`}
                                    key={index}
                            />
                            )
                        )}
                    </div>
                </Form.Group>;
            break;
        case "select":
            if (field.get_data && data && Array.isArray(data.data)) {
                let options = 
                    data?.data.map((item:any, index:number) => (
                        <option 
                            value={item.name} 
                            key={index}>
                                {item.value}
                        </option>
                    ))
                ;
                if (field.name === "forms_all_priority") {
                    options = 
                        data?.data.map((item:any, index:number) => (
                            <option 
                                value={item.idPriorita} 
                                key={index}>
                                    {item.descrizionePriorita}
                            </option>
                        ));
                }

                renderedField =
                    <Form.Group className="mb-2" controlId={field.name + "-" + field?.id}>
                        <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                        <Form.Select aria-label={field.name + "-" + field?.id}>
                            { options }
                        </Form.Select>
                    </Form.Group>;
            } else {
                renderedField = 
                    <Form.Group className="mb-2" controlId={field.name + "-" + field?.id}>
                        <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                        <Form.Select aria-label={field.name + "-" + field?.id}>
                            {
                                field.subitems?.map((item:any, index:number) => (
                                    <option 
                                        value={item.name} 
                                        key={index}>
                                            {item.value}
                                    </option>
                                )
                            )}
                        </Form.Select>
                    </Form.Group>;
            }
            break;
        case "grouped_fields":
                //TODO
            break;
        case "date":
            renderedField = 
                <Form.Group className="mb-2" controlId={field.name + "-" + field?.id}>
                    <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                    <Form.Control
                        type="date"                         
                        required={field.attributes.required}
                    />
                </Form.Group>;
            break;
        case "textarea":         
            renderedField = 
                <Form.Group className="mb-2" controlId={field.name + "-" + field?.id}>
                    <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                    <Form.Control
                        type="textarea"
                        as="textarea"
                        rows={5}
                    />
                </Form.Group>;        
            break;
    }

    return (
        renderedField
    )
}

const getData = async (field:IRequestFormField) => {
    let tmpResponse:any = {
        data: null,
        status: "KO"
    }
    let api = getApiByName(field.get_data?.api || "");
    switch(api.name) {
        case "getUserOffices": 
                api.url = "http://localhost:3000/uffici.json"
                // api.url = api.url + localStorage.getItem("user_id")
            break;
    }
    if(api !== null) {
        tmpResponse = await getRequest(api.url, true);
        console.log(tmpResponse.data);
    }
    return tmpResponse;
}

export default DynamicFormField;