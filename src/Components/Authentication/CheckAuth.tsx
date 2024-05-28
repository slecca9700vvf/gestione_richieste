
import React, {useState, useEffect} from "react";

const CheckAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('utente');
    
        if (storedUserLoggedInInformation === "loggato") {
            setIsLoggedIn(true);
        }
    }, []);
    return isLoggedIn;
    
};

export default CheckAuth;