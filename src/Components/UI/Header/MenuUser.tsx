import React from 'react';
import { CheckAuth } from '../../Authentication/RetrieveAuthUser';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IMenuItem } from '../../../Interfaces/IMenu';

//TODO per menu user statico decommentare la riga sotto 
//import { defusermenu } from './defaultTopMenu';

const MenuUser = () => {
    const isLogged = CheckAuth(); 
    const name = localStorage.getItem("user_name");
    const surname = localStorage.getItem("user_surname");
    
    const menuUtente = localStorage.getItem("menuUser");

    let renderedElement = <div><a href="/login">Login</a></div>;



    //TODO attualmente esiste un problema di sincronizzazione con il menu da BE
    //si risolverà quando il menu sarà passato nel json di login
    if(isLogged) {
        
        
        let menuUserItems : Array<IMenuItem> = [];

        //TODO per collegarsi al menu statico commentare la riga sotto e decommentare la seconda riga
        menuUserItems = menuUtente !== null ? JSON.parse(menuUtente) : menuUserItems;
        //menuUserItems = defusermenu
        console.log(menuUserItems)
        renderedElement = 
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
            <React.Fragment>
                <Button  variant="contained" startIcon={<Avatar sx={{color: '#911d1b' , backgroundColor: '#fff'  }}>{avatarname}</Avatar>} {...bindTrigger(popupState)} />                                    
                <Menu 
                    {...bindMenu(popupState)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                       
                    {
                        menuUserItems.map((item,index) => (
                            <MenuItem onClick={popupState.close} key={index} component="a" href={item.url}>{item.titolo}</MenuItem>
                        
                        
                    
                    ))
                    }
                </Menu>
            </React.Fragment>
            )}
        </PopupState>
        }
    
    
    //menuUserItems = menuutente !== null ? JSON.parse(menuutente) : menuUserItems;
    

    //console.log(menuUserItems)
    
    const avatarname = (name?name.charAt(0):'-')+(surname?surname.charAt(0):'-')
    
    return (
        renderedElement
    )
}

    

export default MenuUser;