
import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { IRoute } from "../../Interfaces/IRoute";

const UserMenu = () => {

    // TODO: Andrà fatta una chimata al BE per recuperare il menù in base all'utente selezionato
        // non viene passato nessun ID se utente anonimo ()
    let menu:Array<IRoute> = [
        {
            path: "/",
            name: "Home Page",
        },
        {
            path: "/richiesta",
            name: "Richiesta",
        },
        {
            path: "/settore",
            name: "Settore",
        },
    ]

    return menu;
};

export default UserMenu;