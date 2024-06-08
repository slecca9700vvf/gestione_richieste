import React, { useState } from 'react';
import { CheckAuth } from '../../Authentication/RetrieveAuthUser';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import defultMenu from '../../../API-Labels/defaultMenu.json'

// Definizione delle interfacce per i props
interface SidebarProps {
  menuItems: MenuItem[];
}

interface MenuItem {
  title: string;
  url?: string;
  subItems?: SubItem[];
}

interface SubItem {
  title: string;
  url: string;
}

// Componente Sidebar principale
function Sidebar() {

  let menuItems = defultMenu.menu;
  const isLogged = CheckAuth();
  if(isLogged) {
    let menu = localStorage.getItem("menu");
    menuItems = menu !== null ? JSON.parse(menu) : menuItems;
  }
  
  return (
    <div className="sidebar-container">
      {menuItems.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

// Componente per ogni voce principale del menu
function SidebarItem ( item:any ) {
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
            {item.sottovoci.map((subItem:any, index:any) => (
              <SubItem key={index} subItem={subItem} />
            ))}
          </div>
        )}
      </div>
  );
};

// Componente per ogni voce del sotto-menu
function SubItem(subItem:any) {
  subItem = subItem.subItem;
  return (
    <div className="subitem">
      <a className="item-link" href={subItem.url}>{subItem.titolo}</a>
    </div>
  );
};

export default Sidebar;
