import { IOptions } from "./IOptions"

export interface IRequestGetForm {
    model_type: string
}

export interface IRequestResponse {
    data: Array<IRequestFormField>
}

export enum AllowedFieldTypes {
    text = "text",
    number = "number",
    radio = "radio",
    checkbox = "checkbox",
    select = "select",
    grouped_fields = "grouped_fields",
    date = "date",
    textarea = "textarea",
}

export interface IAttributes {
    min?: number
    max?: number,
    default_value?: string,
    class_name?: string,
    placeholder?: string
    required: boolean,
    multiple: boolean,
    disabled?: boolean,
    regex?: string,
}

export interface IDataObj {
    api: string,
    type: "get" | "post"
    params?: Array<IOptions>
}

export interface IRequestFormField {
    name: string,
    label: string,
    type: AllowedFieldTypes,
    id?: number,
    regex?: string,
    value?: string|number,
    default_value?: string|number,
    values?: Array<IRequestFormField>,
    subitems?: Array<IOptions>,
    attributes: IAttributes,
    get_data?: IDataObj
}

export interface IResponse {
    data: object | null,
    status: string,
    modelloJson?: IResponseModelloJson,
    attivo?: boolean,
    descrizioneModello?: string,
}

export interface IResponseModelloJson {
    data: Array<Object>
}
