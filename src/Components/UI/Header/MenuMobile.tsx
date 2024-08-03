import React, { useState } from 'react';
import { CheckAuth } from '../../Authentication/RetrieveAuthUser';
import { Button, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { IMenuItem } from '../../../Interfaces/IMenu';
import { deftopmenu } from './defaultTopMenu';

const MenuMobile = () => {
    const isLogged = CheckAuth();
    //let menuItems : Array<IMenuItem> = [];
    let menuItemsTemp : Array<IMenuItem> = [];

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if(isLogged) {
        // TODO collegarsi a menu reale e verificare il funzionamento delle sottovoci
        //let menu = localStorage.getItem("menu");
       // menuItems = menu !== null ? JSON.parse(menu) : menuItems;
        let menuItems = deftopmenu
        
        {menuItems.map((item) => (
            menuItemsTemp.push(item)
        ))}
      }
    
      //console.log(menuItemsTemp)

    function getIdMenu(indice:number)  {
        let getIdMenu = "nested-menu"+indice.toString()
       //console.log(getIdMenu)
        return getIdMenu
    }
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
                   {
                    menuItemsTemp.map((item,index) => (
                        <div key={index}>
                        
                        {item.sottovoci ? (
                            <div key={index}>
                                <MenuItem  onClick={handleClick}>{item.titolo}</MenuItem>
                                <Menu
                                    id={getIdMenu(index)}
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                     {
                                    item.sottovoci.map((subItem,subIndex) => (
                                        <MenuItem key={subIndex} 
                                        onClick={(ev) => {
                                            popupState.close();
                                            handleClose();
                                          }}
                                         component="a" href={subItem.url}>{subItem.titolo}</MenuItem>
                            
                                    ))
                                }
                                </Menu>
                            </div>
                            ) : (
                            <div>
                                <MenuItem key={index} onClick={popupState.close} component="a" href={item.url}>{item.titolo}</MenuItem>
                            </div>
                            )}
                        </div>
                    ))
                   }
                </Menu>
                </React.Fragment>
            )}
        </PopupState>
    )
}

export default MenuMobile;