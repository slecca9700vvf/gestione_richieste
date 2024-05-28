export const AuthReducer = (
    isLogged: boolean = false,
    action: any
) => {
    switch(action.type) {
        case "LOGIN":
            isLogged = true;
            console.log("ciaso mi sto loggando")
            localStorage.setItem("utente", "loggato");
            return isLogged;
        case "LOGOUT":
            isLogged = false;
            console.log("ciaso sto uscendo")
            localStorage.removeItem("utente");
            return isLogged;
        default:
            return isLogged;
    }
}