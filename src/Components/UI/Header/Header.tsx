import React, { useState } from 'react';
import { CheckAuth } from '../../Common/RetrieveData';
import logo from '../../../assets/icons/logo.png'
import logo_vvf_bianco from '../../../assets/icons/logo_vvf_bianco.png'
import MenuMobile from './MenuMobile';
import MenuUser from './MenuUser';
import { getLabelByName } from "../../Exports/Labels";

const Header = () => {
    const isLogged = CheckAuth(); 
	const [open, setOpen] = useState(false); 

	const handleClick = () => {
	    setOpen(!open);
	};
		  
    return (
        <header className='header'>
            
                <div id="logovvf">
                    <a className='nav-link' aria-current='page' href='/'>
                        <img src={ logo } title={ getLabelByName("home_page_menu") } alt={ getLabelByName("home_page_menu") }/> 
                    </a>
                </div>
                
                <div id="headwrap"></div>
                
                <div id="menutop">
                    <MenuMobile />
                </div>

                <div id="logocentrale">
                    <a className='nav-link' aria-current='page' href='/'>
                        <img src={logo_vvf_bianco} title={ getLabelByName("home_page_menu") } alt={ getLabelByName("home_page_menu") }/> 
                    </a>
                </div>
                
                <div id="menuuser">
                    <MenuUser />
                </div>

                 

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