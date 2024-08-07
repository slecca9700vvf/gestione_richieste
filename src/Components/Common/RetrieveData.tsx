
import { useSelector } from "react-redux";

export const CheckAuth = () => {
    const isLoggedIn = useSelector(
        (isLogged:any) => isLogged.Auth
    )
    return isLoggedIn;
};

export const RetrieveUserData = () => {
    const user = {
        name: getItem("user_name"),
        surname: getItem("user_surname"),
        menu: getItem("user_menu"),
    };
    return user;
}

/* Retrieve dati salvati nello storage */
export const getItem = (key:string) => {
    return localStorage.getItem(key) ? localStorage.getItem(key) : "";
}

export const removeItem = (key:string) => {
    localStorage.removeItem(key);
}
export const setItem = (key:string, value:string) => {
    localStorage.setItem(key, value);
}