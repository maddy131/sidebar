import styles from './recentregistration.module.css'
import {Identification} from '@carbon/icons-react'
const RecentRegistration = () => {
    return (
        <div className={styles.container}>
            <Identification size={50} />
            <div className={styles.texts}>
               <div className={styles.userdetail}><span className={styles.title}>Recent Registration</span></div> 
               <div className={styles.userdetail1}> <span className={styles.number}>50,123</span></div>
               <div className={styles.userdetail2}> <span className={styles.details}><span className={styles.positive}>20%</span> more than previous month</span></div>
            </div>
        </div>
    )
}

export default RecentRegistration