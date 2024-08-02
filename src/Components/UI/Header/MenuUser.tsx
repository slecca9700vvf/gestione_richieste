import React from 'react';
import { CheckAuth } from '../../Authentication/RetrieveAuthUser';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//import { getMenuUser } from '../../Common/GetMenuUser';
import { IMenuItem } from '../../../Interfaces/IMenu';

const MenuUser = () => {
    const isLogged = CheckAuth(); 
    const name = localStorage.getItem("user_name");
    const surname = localStorage.getItem("user_surname");
    /*
    {
        isLogged ? (
            getMenuUser()
        )
        :
        (
            console.log("non loggato")
        )
       
    }
*/
    const menuutente = localStorage.getItem("menuUser");
    let menuUserItems : Array<IMenuItem> = [];
    
    //console.log(menuutente)
    menuUserItems = menuutente !== null ? JSON.parse(menuutente) : menuUserItems;
        
    console.log(menuUserItems)
    

 
      
    
      

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

{
                isLogged ? (
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
                </Menu>)
                :
                (
                    <div></div>   
                )
            }
            </React.Fragment>
            )}
        </PopupState>
    )
}

    

export default MenuUser;