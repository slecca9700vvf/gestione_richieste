import React, { useState } from 'react';
import { CheckAuth } from '../../Authentication/RetrieveAuthUser';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
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
                                    <img src={ logo } width="20%" height="20%" title={ getLabelByName("home_page_menu") } alt={ getLabelByName("home_page_menu") }/> 
                                </a>
                            </li>
                        </ul>
						{/*<span className='nav-item'>
							<a className='nav-link' href='/login'>{ isLogged ? name + " " + surname : 'Login' }</a>
                        </span>
						
                        <span className='nav-item'>
							<a className='nav-link' href='/login'>{ isLogged ? <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> : 'Login' }</a>
                        </span>*/}
						
						{/* inserire menu di 3 voci contenente Dettaglio utente - Info - Logout visibile al click sull'Avatar*/}
						 <div>
						  <Button style={{backgroundColor: 'transparent', color: '#000', padding: '10px 20px'}} variant="contained"  onClick={handleClick} startIcon={<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>}>
							{ isLogged ? name + " " + surname : 'Login' }
						  </Button>
						  <Collapse in={open} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
							  <ListItemButton href="/user-details">
								  {/* Add icon for "Dettaglio Utente" */}
								<ListItemText primary="Dettaglio Utente" />
							  </ListItemButton>
							  <ListItemButton href="/info">
								  {/* Add icon for "Info" */}
								<ListItemText primary="Info" />
							  </ListItemButton>
							  <ListItemButton href="/logout">
								  {/* Add icon for "Logout" */}
								<ListItemText primary="Logout" />
							  </ListItemButton>
							</List>
						  </Collapse>
						</div>
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
