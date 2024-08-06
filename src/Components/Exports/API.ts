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

export const getApiByUrl = (url:string) => {
    let value:string = "";

    API.forEach((item:IApi) => {
        if(item.url === url) {
            value = item.name;
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
        name: "logout",
        url: "/api/utente/logout",
        type: "GET",
    },
    {
        name: "getUserOffices",
        url: "/api/utente/getUfficiUtente?idUtente=",
        type: "GET",
    },
    {
        name: "getRequestFields",
        url: "/api/richiesta/visualizzaFormModello/",
        type: "GET",
    },
    {
        name: "getRequestTypes",
        url: "/api/richiesta/tipologieRichieste/",
        type: "GET",
    },   
    {
        //Verificare
        name: "getPriorities",
        url: "/api/richiesta/getPriorityList/",
        type: "GET",
    },
]