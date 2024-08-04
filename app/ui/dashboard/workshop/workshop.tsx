import styles from './workshop.module.css'

const Workshop = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>UPCOMING WORKSHOP DETAILS</h2>
            <table className={styles.table}>
                <thead>
                    <td>CLIENT NAME</td>
                    <td>Adress</td>
                    <td>Date</td>
                    <td>Time</td>
                    <td>Description</td>
                    
                    
                </thead>
                <tbody>
                    <tr>
                        <td><div className={styles.user}>Sabita Mitra</div></td>
                        <td>Kolkata Sector V</td>
                        <td>9/8/2024</td>
                        <td>10 AM</td>
                        <td><span className={`${styles.description} ${styles.individual}`}>Individual</span></td>

                    </tr>
                    <tr>
                        <td><div className={styles.user}>RenGoods PVT. CO.</div></td>
                        <td>Kolkata Sector V</td>
                        <td>15/8/2024</td>
                        <td>10 AM</td>
                        <td><span className={`${styles.description} ${styles.corporategroup}`}>Corporate Group</span></td>

                    </tr>
                    <tr>
                        <td><div className={styles.user}>Gupta Family</div></td>
                        <td>Kolkata Sector V</td>
                        <td>22/8/2024</td>
                        <td>10 AM</td>
                        <td><span className={`${styles.description} ${styles.family}`}>Family</span></td>

                    </tr>
                    <tr>
                        <td><div className={styles.user}>Sabita Mitra</div></td>
                        <td>Kolkata Sector V</td>
                        <td>9/8/2024</td>
                        <td>10 AM</td>
                        <td><span className={`${styles.description} ${styles.individual}`}>Individual</span></td>

                    </tr>
                    <tr>
                        <td><div className={styles.user}>Sabita Mitra</div></td>
                        <td>Kolkata Sector V</td>
                        <td>9/8/2024</td>
                        <td>10 AM</td>
                        <td><span className={`${styles.description} ${styles.individual}`}>Individual</span></td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Workshop