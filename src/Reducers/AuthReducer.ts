import { IUser } from "../Interfaces/IUser";

const capitalize = (string:string) => string && string[0].toUpperCase() + string.slice(1)

export const AuthReducer = (
    isLogged: boolean = false,
    action: {
        type: string,
        user?: IUser,
        token?: string,
        menu?: string,
        note?: string
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
                localStorage.setItem("user_name", JSON.stringify(capitalize(action.user.nome.toLowerCase()))?.replaceAll("\"",""));
                localStorage.setItem("user_surname", JSON.stringify(capitalize(action.user.cognome.toLowerCase()))?.replaceAll("\"",""));
                isLogged = true;
            }
            return isLogged;
        case "LOGOUT":
            isLogged = false;
            localStorage.removeItem("user");
            localStorage.removeItem("user_name");
            localStorage.removeItem("user_surname");
            localStorage.removeItem("token");
            localStorage.removeItem("menu");
            localStorage.removeItem("note");
            return isLogged;
        default:
            return isLogged;
    }
}