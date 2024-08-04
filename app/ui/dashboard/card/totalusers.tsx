import styles from './totalusers.module.css'
import {UserAvatarFilledAlt} from '@carbon/icons-react'
const TotalUsers = () => {
    return (
        <div className={styles.container}>
            <UserAvatarFilledAlt size={50} />
            <div className={styles.texts}>
               <div className={styles.userdetail}><span className={styles.title}>Total User</span></div> 
               <div className={styles.userdetail1}> <span className={styles.number}>50,123</span></div>
               <div className={styles.userdetail2}> <span className={styles.details}><span className={styles.positive}>20%</span> more than previous month</span></div>
            </div>
        </div>
    )
}

export default TotalUsers