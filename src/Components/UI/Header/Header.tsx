import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import './Header.css';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('utente');
     
        if (storedUserLoggedInInformation === "loggato") {
          setIsLoggedIn(true);
        }
    }, []);
    
    const ulStyle = {color: "black"};
    
    return (
        <header className="header">
            <nav className="navbar" id="navbar-top">
                Navbar Top
            </nav>
            <div className="header-block">
                Header Block

                <nav>
                    <ul>
                        <li><a style={ulStyle} href="/">home page</a></li>
                        <li><a style={ulStyle} href="/login">{isLoggedIn ? "Utente" : "login"}</a></li>
                        <li><a style={ulStyle} href="/richiesta">richiesta</a></li>
                        <li><a style={ulStyle} href="/settore">settore</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
