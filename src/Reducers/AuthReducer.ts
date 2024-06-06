import { IUser } from "../Interfaces/IUser";

export const AuthReducer = (
    isLogged: boolean = false,
    action: {
        type: string,
        user?: IUser,
        token?: string,
        menu?: string
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
                localStorage.setItem("token", JSON.stringify(action.token));
                localStorage.setItem("menu", JSON.stringify(action.menu));
                isLogged = true;
            }
            return isLogged;
        case "LOGOUT":
            isLogged = false;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("menu");
            return isLogged;
        case "VERIFY":
            return isLogged;
        default:
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("menu");
            return isLogged;
    }
}