
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css"
import { Close,PiggyBank,CloudServiceManagement,MediaLibrary,DataAnalytics,ChartEvaluation,UserData,Analytics,Blog,UserFavoriteAlt,Add,UserFollow,Video,TableOfContents,TableBuilt, VideoAdd,Menu,ArrowDown,ArrowUp, Grid,UserAccess,UserSettings, UserAvatarFilledAlt,  Settings,  Logout, Headset, Report, UserFavorite, VideoChat,SettingsView } from "@carbon/icons-react";
const menuItems = [
    {
        title: "Dashboard",
        
        list: [
            {
            title: "overview",
            path: "./dashboard",
            icon:  <Grid/>,
            }
            
            ],
    },
    {
        title: "User Management",icon: <UserAvatarFilledAlt />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        list: [
            {
                title: "Viewallusers",
                path: "/Users/viewalluser",
                icon: <UserAccess />
            },
            {
                title: "AddEdituser",
                path: "/Users/AddEdituser",
                icon: <UserSettings />,
            },
        ],
    },
    {
        title: "Classes_Workshop",
        icon: <VideoChat />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        list: [
            {
                title: "View_all_classes",
                path: "/Workshop/viewallclasses",
                icon: <Video />,
            },
            {
                title: "Add_Edit_classes",
                path: "/Workshop/AddEditclasses",
                icon: <VideoAdd />,
            },
            {
                title: "View_all_Workshop",
                path: "/Workshop/viewallworkshop",
                icon: <TableOfContents />,
            },
            {
                title: "Add_Edit_Workshop",
                path: "/Workshop/AddEditWorkshop",
                icon: <TableBuilt />,
            },
        ],
    },
    {
        title: "Corporate_Wellness_program",
        icon: <UserFollow />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        list: [
            {
                title: "View_all_programs",
                path: "/Users/viewallprogram",
                icon: <UserFavoriteAlt />,
            },
            {
                title: "Add_Edit_Program",
                path: "/Users/AddEditprogram",
                icon: <Add />,
            },
        ],
    },
    {
        title: "Content_management",
        icon: <CloudServiceManagement />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        list:[
            {
                title: "View_all_programs",
                path: "/Users/viewallprogram",
                icon: <UserFavoriteAlt />,
            },
            {
                title: "Add_Edit_Program",
                path: "/Users/AddEditprogram",
                icon: <Add />,
            },
        ],
    },
    {
        title: "Content_management",
        icon: <CloudServiceManagement />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        list:[
            {
                title: "Blog_management",
                path: "/content/blogmanagement",
                icon: <Blog />,
            },
            {
                title: "Media_Library",
                path: "/content/medialibrary",
                icon: <MediaLibrary />,
            },
        ],
    },
    {
        title: "Reports_and_analytics",
        con: <Report />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        list:[
            {
                title: "User_analysis",
                path: "/report/Useranalysis",
                icon: <Analytics />,
            },
            {
                title: "Financial_Analysis",
                path: "/Report/FinancialAnalysis",
                icon: <DataAnalytics />,
            },
            {
                title: "Performance_Metrics",
                path: "/Report/performancemetrics",
                icon: <ChartEvaluation />,
            },
        ],
    },
    {
        title: "Settings",
        icon: <Settings />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        list: [
            {
                title: "General_Settings",
                path: "/Settings/generalsettings",
                icon: <SettingsView />,
            },
            {
                title: "Subscription_Plans",
                path: "/Settings/subscriptionplans",
                icon: <UserSettings />,
            },
            {
                title: "Payment_Settings",
                path: "/Settings/paymentsettings",
                icon: <PiggyBank />,
            },
            {
                title: "User_Roles_and_permissions",
                path: "/Settings/userroles",
                icon: <UserData />,
            },
        ],
    },
    
]


const Sidebar = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.user}>
               <Image className={styles.userImage} src={"/adminpic.jpeg"} alt =" "  width="50" height="50" />
               <div className={styles.userDetail}>
                <span className={styles.username}>UdayPad</span>
                <span className={styles.userTitle}>Admin Panle</span>
               </div>

                 
            </div>
            <ul>

                {menuItems.map(cat=> (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list && cat.list.map((item) => (
                            <MenuLink item={item} key={item.title}/>))}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Sidebar