import { ILabel } from '../../Interfaces/ILabel';

export const getLabelByName = (name:string) => {
    let language = navigator.language.slice(0, 2).toLowerCase();
    let value:string = "";

    Labels.forEach((item:ILabel) => {
        if(item.name === name && item.language === language) {
            value = item.value;
        }
    })
    return value;
}

const Labels: Array<ILabel> = [
    {
        name: "site_name",
        value: "Progetto Gestione richieste",
        language: "it"
    },
    {
        name: "labelOK",
        value: "OK",
        language: "it"
    },
    {
        name: "labelKO",
        value: "KO",
        language: "it"
    },
    {
        name: "label_yes",
        value: "Si",
        language: "it"
    },
    {
        name: "label_no",
        value: "No",
        language: "it"
    },
    {
        name: "label_go_details",
        value: "Vai al dettaglio",
        language: "it"
    },
    {
        name: "header_title",
        value: "Progetto Gestione richieste - Sito web",
        language: "it"
    },
    {
        name: "header_description",
        value: "Sottotitolo",
        language: "it"
    },
    {
        name: "dashboard_title",
        value: "Benvenuto sulla tua scrivania virtuale di Gestione Richieste",
        language: "it"
    },
    {
        name: "dashboard_subtitle",
        value: "di seguito trovi i contenuti che richiedono al più presto la tua attenzione",
        language: "it"
    },
    {
        name: "footer_title",
        value: "Dipartimento dei Vigili del Fuoco del Soccorso Pubblico e della Difesa Civile",
        language: "it"
    },
    {
        name: "footer_description",
        value: "Direzione Centrale per l’innovazione tecnologica, la digitalizzazione e per i beni e le risorse logistiche e strumentali",
        language: "it"
    },
    {
        name: "auth_username",
        value: "Username",
        language: "it"
    },
    {
        name: "auth_password",
        value: "Password",
        language: "it"
    },
    {
        name: "auth_login",
        value: "Login",
        language: "it"
    },
    {
        name: "auth_login_in_progress",
        value: "Login in corso",
        language: "it"
    },
    {
        name: "auth_logout",
        value: "Logout",
        language: "it"
    },
    {
        name: "auth_authenticated",
        value: "authenticated",
        language: "it"
    },
    {
        name: "auth_forget_password",
        value: "Hai dimenticato la passowrd?",
        language: "it"
    },
    {
        name: "auth_reset_psw_link",
        value: "http://accounts.dipvvf.it",
        language: "it"
    },
    {
        name: "auth_error",
        value: "Controlla i dati inseriti",
        language: "it"
    },
    {
        name: "forms_request_menu",
        value: "Richiesta",
        language: "it"
    },
    {
        name: "forms_request_new",
        value: "Inserimento Richiesta",
        language: "it"
    },
    {
        name: "forms_request_title",
        value: "Titolo",
        language: "it"
    },
    {
        name: "forms_request_description",
        value: "Descrizione",
        language: "it"
    },
    {
        name: "forms_request_type",
        value: "Tipologia",
        language: "it"
    },
    {
        name: "forms_request_isPersonal",
        value: "E' una richiesta personale?",
        language: "it"
    },
    {
        name: "forms_request_note",
        value: "Note",
        language: "it"
    },
    {
        name: "forms_request_submit",
        value: "Invia richiesta",
        language: "it"
    },
    {
        name: "forms_request_submit_in_progress",
        value: "Invio in corso",
        language: "it"
    },
    {
        name: "forms_request_reset",
        value: "Reset",
        language: "it"
    },
    {
        name: "forms_sector_menu",
        value: "Settore",
        language: "it"
    },
    {
        name: "forms_sector_new",
        value: "Inserimento Settore di Competenza",
        language: "it"
    },
    {
        name: "forms_sector_description",
        value: "Descrizione del settore:",
        language: "it"
    },
    {
        name: "forms_sector_description_placeholder",
        value: "Inserisci descrizione settore...",
        language: "it"

    },
    {
        name: "forms_sector_additional_info",
        value: "Altro Input di Testo:",
        language: "it"
    },
    {
        name: "forms_sector_additional_info_placeholder",
        value: "Inserisci informazioni aggiuntive...",
        language: "it"
    },
    {
        name: "forms_sector_submit",
        value: "Invia",
        language: "it"

    },
    {
        name: "forms_request_type_menu",
        value: "Tipologia richieste",
        language: "it"
    },
    {
        name: "forms_all_priority",
        value: "Priorità",
        language: "it"
    },
    {
        name: "forms_request_6_office",
        value: "Ufficio",
        language: "it"
    },
    {
        name: "forms_request_6_text",
        value: "Note",
        language: "it"
    },
    {
        name: "forms_request_6_title",
        value: "Titolo",
        language: "it"
    },
    {
        name: "home_page_title",
        value: "Benvenuto nella Home Page dell'App",
        language: "it"
    },
    {
        name: "home_page_menu",
        value: "Home",
        language: "it"
    }
]