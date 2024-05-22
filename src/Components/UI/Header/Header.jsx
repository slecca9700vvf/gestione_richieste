import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav class="navbar" id="navbar-top">
                Navbar Top
            </nav>
            <div className="header-block">
                Header Block
                <nav>
                <ul>
                        <li><a href="/">home page</a></li>
                        <li><a href="/login">login</a></li>
                        <li><a href="/richiesta">richiesta</a></li>
                        <li><a href="/settore">settore</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
