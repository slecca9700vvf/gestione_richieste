import { IUser } from "../Interfaces/IUser";
import { removeItem, setItem } from '../Components/Common/RetrieveData';

const capitalize = (string:string) => string && string[0].toUpperCase() + string.slice(1)

export const AuthReducer = (
    isLogged: boolean = false,
    action: {
        type: string,
        user?: IUser,
        user_menu?: string,
        menu?: string,
        note?: string,
        token?: string,
        token_expire?: number
    },
) => {
    switch(action.type) {
        case "LOGIN":
            isLogged = false
            if(
                action.user !== undefined &&
                action.token !== undefined &&
                action.menu !== undefined
            ) {             
                setItem("user", JSON.stringify(action.user));
                setItem("token", JSON.stringify(action.token)?.replaceAll("\"",""));
                setItem("menu", JSON.stringify(action.menu));
                setItem("note", JSON.stringify(action.note)?.replaceAll("\"",""));
                setItem("user_id", JSON.stringify(action.user.idUtente)?.replaceAll("\"",""));
                setItem("user_name", JSON.stringify(capitalize(action.user.nome.toLowerCase()))?.replaceAll("\"",""));
                setItem("user_surname", JSON.stringify(capitalize(action.user.cognome.toLowerCase()))?.replaceAll("\"",""));
                //TODO Integrare API di refreshToken con BE
                // setItem("token_expire", JSON.stringify(action.token_expire));
            } else {
                /* Autenticare l'utente solo una volta che è presente il menu -> per ulteriori dubbi si rimanda al componente login */
                setItem("user_menu", JSON.stringify(action.user_menu));
                isLogged = true;
            }

            return isLogged;
        case "LOGOUT":
            isLogged = false;
            removeItem("user");
            removeItem("user_id");
            removeItem("user_name");
            removeItem("user_surname");
            removeItem("token");
            removeItem("menu");
            removeItem("note");
            removeItem("user_menu");
            //TODO Integrare API di refreshToken con BE
            // removeItem("token_expire");
            return isLogged;
        default:
            return isLogged;
    }
}