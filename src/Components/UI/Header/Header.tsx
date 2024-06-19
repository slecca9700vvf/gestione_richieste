import React, { useState } from 'react';
import { CheckAuth, RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import { getLabelByName } from "../../Exports/Labels";

const Header = () => {
    const isLogged = CheckAuth(); 
    const name = localStorage.getItem("user_name");
    const surname = localStorage.getItem("user_surname");

    return (
        <header className='header'>
            <nav className='header-top'>
               { getLabelByName("header_title") } 
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
                                    <img src='/homepage.svg' title={ getLabelByName("home_page_menu") } alt={getLabelByName("home_page_menu")}/> 
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/richiesta'>{  getLabelByName("forms_request_menu") }</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/richiesta'>{  getLabelByName("forms_sector_menu") }</a>
                            </li>
                        </ul>
                        <span className='nav-item'>
                        <a className='nav-link' href='/login'>{ isLogged ? name + " " + surname : 'Login' }</a>
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
