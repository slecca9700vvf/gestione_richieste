import React, { useState } from 'react';
import { CheckAuth } from '../../Authentication/RetrieveAuthUser';
import { Button, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


const MenuMobile = () => {
    const isLogged = CheckAuth();
    
    
    

    return (
        
        <PopupState variant="popover" popupId="muiTopMenu">
            {(popupState) => (
                <React.Fragment>
                {
                isLogged ? (
                    <Button  variant="contained" startIcon={<MenuIcon />} {...bindTrigger(popupState)} />                                    
                    
                )
                :
                (
                    <Button  variant="contained" startIcon={<MenuIcon />} {...bindTrigger(popupState)} disabled />                                    
                )
            }
                <Menu 
                    {...bindMenu(popupState)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                   
                    <MenuItem onClick={popupState.close} component="a" href="/dashboard">Dashboard</MenuItem>
                    <MenuItem onClick={popupState.close} component="a" href="#">Inserisci Richiesta</MenuItem>
                    <MenuItem onClick={popupState.close} component="a" href="#">Gestione Richieste</MenuItem>
                </Menu>
                </React.Fragment>
            )}
        </PopupState>
    )
}

export default MenuMobile;