import { IApi } from '../../Interfaces/IApi'

const base_url = "http://localhost:8080";

export const getApiByName = (name:string) => {
    let value:IApi = {
        name: "",
        url: "",
    }

    API.forEach((item:IApi) => {
        if(item.name === name) {
            value = {
                name: item.name,
                url: base_url + item.url,
                type: item.type || null,
            }
        }
    })
    return value;
}

const API: Array<IApi> = [
    {
        name: "login",
        url: "/api/utente/login?accountName=",
        type: "GET",
    },
    {
        name: "getUserOffices",
        url: "/api/utente/uffici",
        type: "GET",
    },
    {
        name: "getRequestFields",
        url: "/api/request/fields?request_id=",
        type: "GET",
    },
    {
        name: "getRequestTypes",
        url: "/api/request/types",
        type: "GET",
    },
]