import React, { useState } from 'react';
import { CheckAuth } from '../../Authentication/RetrieveAuthUser';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../assets/icons/logo.png'

import { getLabelByName } from "../../Exports/Labels";

const Header = () => {
    const isLogged = CheckAuth(); 
    const name = localStorage.getItem("user_name");
    const surname = localStorage.getItem("user_surname");

	const [open, setOpen] = useState(false); 

	const handleClick = () => {
	    setOpen(!open);
	};
		  
    return (
        <header className='header'>
            <nav className='navbar navbar-expand-lg navbar-light navbar-top'>
                <div className='container-fluid'>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse navbar-container' id='navbarNavDropdown'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' aria-current='page' href='/'>
                                    <img src={ logo } width="20%" height="20%" title={ getLabelByName("home_page_menu") } alt={ getLabelByName("home_page_menu") }/> 
                                </a>
                            </li>
                        </ul>
				
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                            <React.Fragment>
                                <Button style={{backgroundColor: '#911d1b'}} variant="contained" startIcon={<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>} {...bindTrigger(popupState)}>                                    
                                    { isLogged ? name + " " + surname : 'Login' }
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Dettaglio Utente</MenuItem>
                                    <MenuItem onClick={popupState.close}>Info</MenuItem>
                                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                            )}
                        </PopupState>

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