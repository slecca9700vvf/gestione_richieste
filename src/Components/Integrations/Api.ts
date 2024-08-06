import { IApi } from '../../Interfaces/IApi';
import { IResponse } from '../../Interfaces/IRequest';
import axios from 'axios'
import { getLabelByName } from '../Exports/Labels';

export const getToken = () => {
    return checkToken();
}

export const checkToken = () => {
    const currentTimestamp = Date.now();
    let token = localStorage.getItem("token")
    let token_expire = 999999999999999999999999999999999999;

    //TODO Integrare API di refreshToken con BE
    // let token_expire = Number(localStorage.getItem("token_expire"))

    if(currentTimestamp >= token_expire) {
        token = refreshToken();
    }
    return token;
}

export const refreshToken = () => {
    let token = localStorage.getItem("token");
    //TODO Integrare API di refreshToken con BE
        // Rimozione token salvato
            // localStorage.removeItem("token")
            // localStorage.removeItem("token_expire");
        // Salvataggio nuovo token
            // localStorage.setItem("token", JSON.stringify(token)?.replaceAll("\"",""));
            // localStorage.setItem("token_expire", JSON.stringify(token_expire));
    return token;
}

//Da chiamare con await
export const getRequest = async (api_url:string, token:boolean):Promise<any> => {
    let headers: any = token ? {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
    } : {};

    let tmpResponse:IResponse;
    console.log(api_url, getToken());
    try {
        const response = await axios.get(api_url, { headers });
        if(Object.keys(response.data).length > 0) {
            tmpResponse = {
                data: response.data,
                status: getLabelByName("labelOK"),
            }
            return tmpResponse;
        } else {
            tmpResponse = {
                data: null,
                status: getLabelByName("labelKO")
            }
        }
        return tmpResponse;
    } catch (error) {
        console.error('Errore durante la richiesta GET:', error);
        throw error;
    }
}

export const postRequest = (api:IApi, data:any = [], token:boolean) => {
    let response_data:any;
    let headers:any = token ? {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        } : '';

    axios.post<IResponse>(
        api.url,
        data,
        {
            headers
        },
    ).then((response) => {
        response_data = response.data
    }).catch((error) => {
        console.error(error)
    });
    return response_data;
}