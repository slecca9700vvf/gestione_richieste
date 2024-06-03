import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
const Sidebar: React.ComponentType<SidebarProps> = ({ menuItems }) => {
  return (
    <div className="sidebar-container">
      {menuItems.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

// Componente per ogni voce principale del menu
const SidebarItem: React.ComponentType<{ item: MenuItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false); // Stato per gestire l'apertura/chiusura del sotto-menu

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="item-container">
        <div className="item-header" onClick={toggleOpen}>
          {/* Se l'oggetto ha subItems, l'URL deve essere vuoto */}
          {item.subItems ? (
            <span className="item-title">{item.title}</span>
          ) : (
            <a className="item-link" href={item.url}>{item.title}</a>
          )}
          {item.subItems && (isOpen ? <FaChevronUp /> : <FaChevronDown />)}
        </div>
        {isOpen && item.subItems && (
          <div className="subitem-container">
            {item.subItems.map((subItem, index) => (
              <SidebarSubItem key={index} subItem={subItem} />
            ))}
          </div>
        )}
      </div>
  );
};

// Componente per ogni voce del sotto-menu
const SidebarSubItem: React.ComponentType<{ subItem: SubItem }> = ({ subItem }) => {
  return (
    <div className="subitem">
      <a className="item-link" href={subItem.url}>{subItem.title}</a>
    </div>
  );
};

export default Sidebar;
