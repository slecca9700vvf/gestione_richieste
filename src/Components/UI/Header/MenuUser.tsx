import React from 'react';
import { CheckAuth, RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IMenuItem } from '../../../Interfaces/IMenu';
import { getLabelByName } from '../../Exports/Labels';

//TODO per menu user statico decommentare la riga sotto 
//import { defusermenu } from './defaultTopMenu';

const MenuUser = () => {
    const isLogged = CheckAuth(); 
    const user = RetrieveUserData();

    let renderedElement = <div><a href="/login">{ getLabelByName("auth_login") }</a></div>;  
    //TODO attualmente esiste un problema di sincronizzazione con il menu da BE
    //si risolverà quando il menu sarà passato nel json di login
    if(isLogged) {
        let menuUserItems : Array<IMenuItem> = [];

        //TODO per collegarsi al menu statico commentare la riga sotto e decommentare la seconda riga
        menuUserItems = user.menu !== null ? JSON.parse(user.menu) : menuUserItems;
        //menuUserItems = defusermenu
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
                            <MenuItem 
                                onClick={popupState.close} 
                                key={index}
                                component="a"
                                href={item.url}
                                >
                                    {item.titolo}
                            </MenuItem>
                        ))
                    }
                </Menu>
            </React.Fragment>
            )}
        </PopupState>
        }
    const avatarname = (user.name ? user.name.charAt(0) : '-')+( user.surname ? user.surname.charAt(0) : '-')
    
    return (
        renderedElement
    )
}

    

export default MenuUser;