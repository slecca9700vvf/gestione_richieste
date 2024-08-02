import React, { useEffect, useState } from 'react';
import { getApiByName } from '../Exports/API';
import { getLabelByName } from "../Exports/Labels";
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

    

    /*export const getMenuUser = () => {
        
       // const [loading, setLoading] = useState<boolean>(false);
    // const [dataMenuUser, setDataMenuUser] = useState<IResponse>();

        useEffect(() => {
            const fetchData = async () => {
                try {
                //setLoading(true)
                const response_data = await apiMenuUser();
                //setDataMenuUser(response_data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                } finally {
                    //setLoading(false);
                }
            }
            fetchData();        
        }, [, setLoading]);
        
        
        /*event.preventDefault();
        setLoading(true);
        try{
            const menuUserResponse = await apiMenuUser();
            if(menuUserResponse.data !== null && menuUserResponse.status === getLabelByName("labelOK")) {
                setDataMenuUser(menuUserResponse)
              } else {
                if(menuUserResponse.data === null) {
                    console.log("Non ci sono dati")
                }
                else {
                    console.log("C'è qualche errore")
                }
              }
              setLoading(false);
              return menuUserResponse.data
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
              
        }
        
        
        
         /* {!loading ? (
            
          ) : (
           
          )}
        }
        /*
        

        localStorage.setItem("menuUser", JSON.stringify(dataMenuUser?.data));
        //let menuString = JSON.stringify(dataMenuUser?.data)
        //    let menuUserItems : Array<IMenuItem> = [];
        //    let menuUserItemsTemp : Array<IMenuItem> = [];
            
        //    menuUserItems = menuString !== null ? JSON.parse(menuString) : menuUserItemsTemp;
            
    
    };*/

   