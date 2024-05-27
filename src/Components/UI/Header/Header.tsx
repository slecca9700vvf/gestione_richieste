import React from 'react';
import { useSelector } from "react-redux";
import './Header.css';

function Header() {

    const isLoggedStore = useSelector(
        (isLogged:any) => isLogged.AuthReducer
    )
    
    return (
        <header className="header">
            <nav className="navbar" id="navbar-top">
                Navbar Top
            </nav>
            <div className="header-block">
                Header Block
                <nav>
                <ul>
                        <li><a href="/">home page</a></li>
                        <li><a href="/login">{isLoggedStore ? "Utente" : "login"}</a></li>
                        <li><a href="/richiesta">richiesta</a></li>
                        <li><a href="/settore">settore</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
