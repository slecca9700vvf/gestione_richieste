import React from 'react';
import CheckAuth from '../../Authentication/CheckAuth';
import labels from '../../../API-Labels/labels.json'


function Header() {
    const isLogged = CheckAuth();
    return (
        <header className='header'>
            <nav className='header-top'>
               { labels.header.title } 
            </nav>
            {/* TODO: Gestire voce di menu active 
                <a className='nav-link active' ...>
            */}
            <nav className='navbar navbar-expand-lg navbar-light navbar-top'>
                <div className='container-fluid'>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse navbar-container' id='navbarNavDropdown'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' aria-current='page' href='/'>
                                    <img src='/homepage.svg' title={labels.home_page.menu} alt={labels.home_page.menu}/> 
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/richiesta'>{  labels.forms.request.menu }</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/settore'>{  labels.forms.sector.menu }</a>
                            </li>
                        </ul>
                        <span className='nav-item'>
                            <a className='nav-link' href='/login'>{ isLogged ? 'Nome Cognome' : 'Login' }</a>
                        </span>
                    </div>
                </div>
            </nav>

            <div className='flag-container'>
                <table className='flag-container-table'>
                    <thead>
                        <tr>
                            <th className='flag-green'></th>
                            <th className='flag-white'></th>
                            <th className='flag-red'></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </header>
    );
}

export default Header;
