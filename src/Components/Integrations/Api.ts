import { IApi } from '../../Interfaces/IApi';
import { IResponse } from '../../Interfaces/IRequest';
import axios from 'axios'
import { getLabelByName } from '../Exports/Labels';
import { getApiByUrl } from '../Exports/API';

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
    try {
        const response = await axios.get(api_url, { headers });
        if(Object.keys(response.data).length > 0) {
            tmpResponse = {
                data: response.data,
                status: getLabelByName("labelOK"),
            }
            return tmpResponse;
        } else {
            throw "Reqeust KO"
        }
    } catch (error) {
        console.error('Errore durante la richiesta GET:', error + " - " + getApiByUrl(api_url));
        throw error;
    }
}

export const postRequest = async (api_url:string, data:any = [], token:boolean):Promise<any> => {
    let headers: any = token ? {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
    } : {};

    let tmpResponse:IResponse;
    try {
        const response = await axios.post(api_url, data, { headers });
        if(Object.keys(response.data).length > 0) {
            tmpResponse = {
                data: response.data,
                status: getLabelByName("labelOK"),
            }
            return tmpResponse;
        } else {
            throw "Reqeust KO"
        }
    } catch (error) {
        console.error('Errore durante la richiesta POST:', error + " - " + getApiByUrl(api_url));
        throw error;
    }
}