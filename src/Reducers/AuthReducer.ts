export const AuthReducer = (
    isLogged: boolean = false,
    action: any
) => {
    switch(action.type) {
        case "LOGIN":
            isLogged = true;
            return isLogged;
        case "LOGOUT":
            isLogged = false;
            return isLogged;
        default:
            return isLogged;
    }
}