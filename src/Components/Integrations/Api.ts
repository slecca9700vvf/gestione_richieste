import { IResponse } from '../../Interfaces/IRequest';
import axios from 'axios'
import { getLabelByName } from '../Exports/Labels';
import { getApiByName, getApiByUrl } from '../Exports/API';
import { getItem, removeItem, setItem } from '../Common/RetrieveData';

export const getToken = async() => {
    let token = getItem("token");
    const currentTimestamp = Date.now();
    const token_expire = Number(getItem("token_expire"))
    // const token_expire = 999999999999999;
    //TODO Integrare API di refreshToken con BE
    if(currentTimestamp >= token_expire) {
        token = await refreshToken(token);   
    }
    return token;
}

export const refreshToken = async(old_token:string|null) => {
    let token = old_token ? old_token : getItem("token");
    //TODO Integrare API di refreshToken con BE -> verificare se necessario passare anche il token vecchio
        // Rimozione token salvato
            // removeItem("token")
            // removeItem("token_expire");
        // Salvataggio nuovo token
            // setItem("token", JSON.stringify(token)?.replaceAll("\"",""));
            // setItem("token_expire", JSON.stringify(token_expire));
    // const api_url = getApiByName("refresh_token_api").url;
    // let data = await getRequest(api_url, true);
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