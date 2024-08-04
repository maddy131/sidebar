"use client"

import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import {NotificationFilled,Chat,Search,AsleepFilled,LightFilled} from "@carbon/icons-react"
import { useContext } from 'react'
import { useTheme, ThemeProvider } from '@/app/context/ThemeContext'
const Navbar = () =>{
    
        const { switchDark, switchLight, theme } = useTheme();
    
      
    const pathname= usePathname();
    return(
        <div className={styles.container}>
            <div className={styles.title}>{pathname.split("/").pop()}</div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <Search/>
                    <input type="text" placeholder="Search..." className={styles.input}/>
                </div>
                <div className={styles.icons}>
                    <NotificationFilled/>
                    <Chat/>
                    <button className={`${styles.themebtns}`} 
                    onClick={theme === "Dark" ? switchLight :switchDark}>
                        {theme ===  "Dark" ? <AsleepFilled /> : <LightFilled />}
                        
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Navbar