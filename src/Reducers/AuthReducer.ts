import { IUser } from "../Interfaces/IUser";

const capitalize = (string:string) => string && string[0].toUpperCase() + string.slice(1)

export const AuthReducer = (
    isLogged: boolean = false,
    action: {
        type: string,
        user?: IUser,
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
                localStorage.setItem("user", JSON.stringify(action.user));
                localStorage.setItem("token", JSON.stringify(action.token)?.replaceAll("\"",""));
                localStorage.setItem("menu", JSON.stringify(action.menu));
                localStorage.setItem("note", JSON.stringify(action.note)?.replaceAll("\"",""));
                localStorage.setItem("user_id", JSON.stringify(action.user.idUtente)?.replaceAll("\"",""));
                localStorage.setItem("user_name", JSON.stringify(capitalize(action.user.nome.toLowerCase()))?.replaceAll("\"",""));
                localStorage.setItem("user_surname", JSON.stringify(capitalize(action.user.cognome.toLowerCase()))?.replaceAll("\"",""));
                //TODO Integrare API di refreshToken con BE
                // localStorage.setItem("token_expire", JSON.stringify(action.token_expire));
                isLogged = true;
            }
            return isLogged;
        case "LOGOUT":
            isLogged = false;
            localStorage.removeItem("user");
            localStorage.removeItem("user_id");
            localStorage.removeItem("user_name");
            localStorage.removeItem("user_surname");
            localStorage.removeItem("token");
            localStorage.removeItem("menu");
            localStorage.removeItem("note");
            //TODO Integrare API di refreshToken con BE
            // localStorage.removeItem("token_expire");
            return isLogged;
        default:
            return isLogged;
    }
}