"use client";

import styles from "./menuLink.module.css"
import Link from 'next/link'
import { ReactNode, useState } from 'react';
import { usePathname } from "next/navigation";
interface SubMenuItem {
    title: string;
    path: string;
    icon: ReactNode;
  }
interface MenuItems {
    title: string;
    path: string;
    icon: ReactNode;
    iconClosed?: ReactNode;
    iconOpened?: ReactNode;
    list?: SubMenuItem[];
    
}
interface MenuLinkProps {
    item: MenuItems;
}

const MenuLink:React.FC<MenuLinkProps> = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    console.log(pathname);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
      <div onClick={item.list ? toggleDropdown : undefined} className={`${styles.container} ${pathname === item.path && styles.active}`} style={{ cursor: item.list ? 'pointer' : 'default' }}>
            {item.icon}
            {item.title}
            {item.list && (isOpen ? item.iconOpened : item.iconClosed)}
        </div>
        {isOpen && item.list && (
        <div className={styles.submenu}>
          {item.list.map((subItem, index) => (
            <Link key={index} href={subItem.path} className={styles.submenuItem}>
              {subItem.icon}
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
    );
};
    

export default MenuLink