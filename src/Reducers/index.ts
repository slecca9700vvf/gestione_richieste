import { AuthReducer } from "./AuthReducer";
// import { SpesaReducer } from "./SpesaReducer";

import { combineReducers } from "redux";

export default combineReducers(
    {
        AuthReducer,
        // SpesaReducer
    }
)