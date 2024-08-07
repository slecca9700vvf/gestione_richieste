import { IResponse } from '../../Interfaces/IRequest';
import axios from 'axios'
import { getLabelByName } from '../Exports/Labels';
import { getApiByUrl } from '../Exports/API';
import { getItem, removeItem, setItem } from '../Common/RetrieveData';

export const getToken = async() => {
    let token = getItem("token");
    const currentTimestamp = Date.now();

    //TODO Integrare API di refreshToken con BE
    // let token_expire = Number(getItem("token_expire"))
    let token_expire = 999999999999;
    if(currentTimestamp >= token_expire) {
        token = await refreshToken();   
    }
    return token;
}

export const refreshToken = async() => {
    let token = getItem("token");
    //TODO Integrare API di refreshToken con BE
        // Rimozione token salvato
            // removeItem("token")
            // removeItem("token_expire");
        // Salvataggio nuovo token
            // setItem("token", JSON.stringify(token)?.replaceAll("\"",""));
            // setItem("token_expire", JSON.stringify(token_expire));
    return token;
}

export const getRequest = async (api_url:string, token:boolean):Promise<any> => {
    let tmpResponse:IResponse;
    let headers:any = {};
    if(token) {
        let user_token = await getToken();
        headers = {
            'Authorization': `Bearer ${user_token}`,
            'Content-Type': 'application/json',
        }
    }

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
    let headers:any = {};
    if(token) {
        let user_token = await getToken();
        headers = {
            'Authorization': `Bearer ${user_token}`,
            'Content-Type': 'application/json',
        }
    }

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