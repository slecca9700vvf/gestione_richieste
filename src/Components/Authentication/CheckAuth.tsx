
import { useSelector } from "react-redux";

const CheckAuth = () => {
    const isLoggedIn = useSelector(
        (isLogged:any) => isLogged.Auth
    )
    return isLoggedIn;
    
};

export default CheckAuth;