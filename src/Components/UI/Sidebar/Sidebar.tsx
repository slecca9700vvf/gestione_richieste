import React, { useState } from 'react';
import { CheckAuth, getItem } from '../../Common/RetrieveData';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import defultMenu from '../../../API-Labels/defaultMenu.json'

const Sidebar = () => {
  let menuItems = defultMenu.menu;
  const isLogged = CheckAuth();
  let renderedElement = <div></div>;
  if(isLogged) {
    let menu = getItem("menu");
    menuItems = menu !== null ? JSON.parse(menu) : menuItems;
    renderedElement = 
      <div className="sidebar-container">
        {menuItems.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
  }
  
  return (
      renderedElement
  );
};

// Componente per ogni voce principale del menu
const SidebarItem = ( item:any ) => {
  item = item.item;
  const [isOpen, setIsOpen] = useState(false); // Stato per gestire l'apertura/chiusura del sotto-menu
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="item-container">
      <div className="item-header" onClick={toggleOpen}>
        {/* Se l'oggetto ha subItems, l'URL deve essere vuoto */}
        {item.sottovoci ? (
          <span className="item-title">{item.titolo}</span>
        ) : (
          <a className="item-link" href={item.url}>{item.titolo}</a>
        )}
        {item.sottovoci && (isOpen ? <FaChevronUp /> : <FaChevronDown />)}
      </div>
      {isOpen && item.sottovoci && (
        <div className="subitem-container">
          {item.sottovoci.map((subItem:any, index:number) => (
            <SubItem key={index} subItem={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

// Componente per ogni voce del sotto-menu
const SubItem = (subItem:any) => {
  subItem = subItem.subItem;
  return (
    <div className="subitem">
      <a className="item-link" href={subItem.url}>{subItem.titolo}</a>
    </div>
  );
};

export default Sidebar;
