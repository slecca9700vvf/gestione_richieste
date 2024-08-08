import React from 'react';
import { IRequestsList } from '../../../Interfaces/IRequest';
import ElencoRichieste from './ElencoRichieste';
import { getLabelByName } from "../../Exports/Labels";

const Richieste = () => {
    
    //TODO integrare il BE
    /*
    const getListaRichieste:any = async() => {
        const api_url = getApiByName("ricerca").url;
        const response = await getRequest(api_url, true);
        return response;
        
      }
    */
    
    const ListaRichiesteTemp: Array<IRequestsList>  =
        [
        {
        idRichiesta: 1,
        numeroRichiesta: "temp1",
        priorita: "Alta",
        statoRichiesta: "Inserita",
        tipologiaRichiesta: "Acquisto",
        ufficio: "Informatica",},
        {
        idRichiesta: 2,
        numeroRichiesta: "temp2",
        priorita: "Alta",
        statoRichiesta: "Inviata al referente",
        tipologiaRichiesta: "Acquisto",
        ufficio: "Informatica",},
        {
        idRichiesta: 3,
        numeroRichiesta: "temp3",
        priorita: "Media",
        statoRichiesta: "Inserita",
        tipologiaRichiesta: "Assegnazione Materiale Logistico",
        ufficio: "Informatica",},
        {
        idRichiesta: 4,
        numeroRichiesta: "temp4",
        priorita: "Alta",
        statoRichiesta: "Approvata Referente Ufficio",
        tipologiaRichiesta: "Assegnazione Materiale Informatico",
        ufficio: "Ragioneria",},
        {
            idRichiesta: 5,
            numeroRichiesta: "temp5",
            priorita: "Media",
            statoRichiesta: "Approvata Referente Ufficio",
            tipologiaRichiesta: "Richiesta Integrazione Referente Ufficio",
            ufficio: "Ragioneria",},
        {
            idRichiesta: 6,
            numeroRichiesta: "temp6",
            priorita: "Alta",
            statoRichiesta: "Inserita",
            tipologiaRichiesta: "DPI",
            ufficio: "Informatica",},
            {
            idRichiesta: 7,
            numeroRichiesta: "temp7",
            priorita: "Media",
            statoRichiesta: "Inviata al referente",
            tipologiaRichiesta: "Acquisto",
            ufficio: "Informatica",},
            {
            idRichiesta: 8,
            numeroRichiesta: "temp8",
            priorita: "Media",
            statoRichiesta: "Inserita",
            tipologiaRichiesta: "Assegnazione Materiale Logistico",
            ufficio: "Informatica",},
            {
            idRichiesta: 9,
            numeroRichiesta: "temp9",
            priorita: "Alta",
            statoRichiesta: "Approvata Referente Ufficio",
            tipologiaRichiesta: "Assegnazione Materiale Informatico",
            ufficio: "Ragioneria",},
            {
                idRichiesta: 10,
                numeroRichiesta: "temp10",
                priorita: "Media",
                statoRichiesta: "Approvata Referente Ufficio",
                tipologiaRichiesta: "Richiesta Integrazione Referente Ufficio",
                ufficio: "Ragioneria",},
        ]
    
        /*const ElencoRichiesteProps = { 
            listaRichieste: ListaRichiesteTemp
          }  
*/

    return (
        <div id="richieste">
            <p><span>{  getLabelByName("richieste_title") }</span></p>
            <p><span>{  getLabelByName("richieste_subtitle") }</span></p>
            <ElencoRichieste lista_richieste={ListaRichiesteTemp} />
        </div>
    );
}

export default Richieste;




