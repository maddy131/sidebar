import styles from './activesubscription.module.css'
import {UserActivity} from '@carbon/icons-react'
const ActiveSubscription = () => {
    return (
        <div className={styles.container}>
            <UserActivity size={50} />
            <div className={styles.texts}>
               <div className={styles.userdetail}><span className={styles.title}>Active Subcription</span></div> 
               <div className={styles.userdetail1}> <span className={styles.number}>50,123</span></div>
               <div className={styles.userdetail2}> <span className={styles.details}><span className={styles.positive}>20%</span> more than previous month</span></div>
            </div>
        </div>
    )
}

export default ActiveSubscription