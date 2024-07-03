import React from 'react';
import { CheckAuth } from '../../Authentication/RetrieveAuthUser';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const MenuUser = () => {
    const isLogged = CheckAuth(); 
    const name = localStorage.getItem("user_name");
    const surname = localStorage.getItem("user_surname");
    //const avatarname = Array.from(name?name:'-')[0]+Array.from(surname?surname:'-');
    const avatarname = (name?name.charAt(0):'-')+(surname?surname.charAt(0):'-')
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
            <React.Fragment>
                    
                {
                isLogged ? (
                    <Button  variant="contained" startIcon={<Avatar sx={{color: '#911d1b' , backgroundColor: '#fff'  }}>{avatarname}</Avatar>} {...bindTrigger(popupState)} />                                    
                )
                :
                (
                    <a href="/login">Login</a>
                )
            }
                <Menu 
                    {...bindMenu(popupState)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem onClick={popupState.close}>Dettaglio Utente</MenuItem>
                    <MenuItem onClick={popupState.close}>Info</MenuItem>
                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
            </React.Fragment>
            )}
        </PopupState>
    )
}

export default MenuUser;