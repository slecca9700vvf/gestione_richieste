import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import { IRequestFormField, IResponse } from "../../Interfaces/IRequest";
import axios from 'axios';
import { getApiByName } from "../Exports/API";
import { getLabelByName } from "../Exports/Labels";

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
            const fetchData = async () => {
                try {
                    setLoading(true)
                    const response_data = await getData(field);
                    setData(response_data);
                } catch (error) {
                    console.error("Error fetching data:", error);
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
                <Form.Group className="mb-2" controlId={field.name}>
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
                <Form.Group className="mb-2" controlId={field.name}>
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
                <Form.Group className="mb-2" controlId={field.name}>
                    <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                    <div className='radio-container'>
                        {
                            field.subitems?.map((item:any, index:number) => (
                                <Form.Check
                                    label={item.value}
                                    name={item.name}
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
                <Form.Group className="mb-2" controlId={field.name}>
                    <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                    <div className='checbox-container'>
                        {
                            field.subitems?.map((item:any, index:number) => (
                                <Form.Check
                                    label={item.value}
                                    name={item.name}
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
                renderedField =
                    <Form.Group className="mb-2" controlId={field.name}>
                        <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                        <Form.Select aria-label={field.name}>
                            {
                                data?.data.map((item:any, index:number) => (
                                    <option 
                                        value={item.name} 
                                        key={index}>
                                            {item.value}
                                    </option>
                                )
                            )}
                        </Form.Select>
                    </Form.Group>;
            } else {
                renderedField = 
                    <Form.Group className="mb-2" controlId={field.name}>
                        <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                        <Form.Select aria-label={field.name}>
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
                <Form.Group className="mb-2" controlId={field.name}>
                    <Form.Label>{ getLabelByName(field.name) }</Form.Label>
                    <Form.Control
                        type="date"                         
                        required={field.attributes.required}
                    />
                </Form.Group>;
            break;
        case "textarea":         
            renderedField = 
                <Form.Group className="mb-2" controlId={field.name}>
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

async function getData(field:IRequestFormField) {
    let tmpResponse:IResponse = {
        data: null,
        status: "KO"
    }
    let api = getApiByName(field.get_data?.api || "");
    
    //TODO Remove next line
    api.url = "http://localhost:3000/uffici.json"
    
    if(api !== null) {
        await axios.get<IResponse>(
            api.url,
            // userObj
        ).then((response) => {
            tmpResponse = {
                data: response.data.data,
                status: response.data.status
            }
        }).catch((error) => {
            console.error(error)
        })        
    }
    return tmpResponse;
}

export default DynamicFormField;