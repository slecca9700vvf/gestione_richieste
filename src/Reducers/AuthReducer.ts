export const AuthReducer = (
    isLogged: boolean = false,
    action: any
) => {
    switch(action.type) {
        case "LOGIN":
            isLogged = true;
            localStorage.setItem("utente", "loggato");
            return isLogged;
        case "LOGOUT":
            isLogged = false;
            localStorage.removeItem("utente");
            return isLogged;
        case "VERIFY":
            return isLogged;
        default:
            localStorage.removeItem("utente");
            return isLogged;
    }
}