
import { useSelector } from "react-redux";

export const CheckAuth = () => {
    const isLoggedIn = useSelector(
        (isLogged:any) => isLogged.Auth
    )
    return isLoggedIn;
};

export const RetrieveUserData = () => {
    const user = {
        name: localStorage.getItem("user_name"),
        surname: localStorage.getItem("user_surname"),
    };
    return user;
}