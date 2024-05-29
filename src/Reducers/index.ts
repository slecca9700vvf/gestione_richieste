import { AuthReducer as Auth } from "./AuthReducer";
// import { SpesaReducer } from "./SpesaReducer";

import { combineReducers } from "redux";

export default combineReducers(
    {
        Auth,
        // SpesaReducer
    }
)