import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import styles from "../ui/dashboard/dashboard.module.css"

import { ThemeProvider } from "../context/ThemeContext"
const Layout = ({children}) =>{
    return(
        <div className={styles.container}>
            
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <ThemeProvider>
            <div className={styles.content}>
                <Navbar/>
                {children}
            </div>
            </ThemeProvider>
            

        </div>
    )
}
export default Layout