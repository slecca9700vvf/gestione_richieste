import React, { useEffect, useState } from 'react';
import { getApiByName } from '../Exports/API';
import { IResponse } from '../../Interfaces/IRequest';
import axios from 'axios';


    export async function getMenuUser() {
        let tmpResponse:IResponse = {
            data: null,
            status: "KO"
        }
        let api = getApiByName("getMenuUser").url;
        let token = localStorage.getItem("token");
    
        
        if(api !== null) {
            await axios.get<IResponse>(
                api,
                {
                    headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json',
                    },
                  }
            ).then((response) => {
                tmpResponse = {
                    data: response.data,
                    status: response.statusText
                }
            }).catch((error) => {
                console.error(error)
            })        
        }
        //return tmpResponse.data;
        localStorage.setItem("menuUser", JSON.stringify(tmpResponse?.data));
    }

    