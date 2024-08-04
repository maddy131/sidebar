import ActiveSubscription from "../ui/dashboard/card/activesubscription"
import RecentRegistration from "../ui/dashboard/card/recentregistration"
import TotalUsers from "../ui/dashboard/card/totalusers"
import styles from "../ui/dashboard/dashboard.module.css"
import Revenu from "../ui/dashboard/revenu/revenu"
import Workshop from "../ui/dashboard/workshop/workshop"
import Footer from "../ui/dashboard/footer/footer"
const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.cards}>
            <TotalUsers/>
            <ActiveSubscription/>
            <RecentRegistration/>
        </div>
        <Workshop/>
        <Revenu/>
        <Footer/>
        </div>
    )
}

export default Dashboard
