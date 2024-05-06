
import styles from './Header.module.css'
const Header = () => {
    return (
    <header>
        <h2>This is Header</h2>
        <div className={styles.container}>
            <div className={styles.divElment}>Div 1</div>
            <div className={styles.divElment}>Div 2</div>
            <div className={`${styles.divElment} ${styles.divElmentOdd}`}>Div 3</div>
            <div className={styles.divElment}>Div 3</div>
            <div className={styles.divElment}>Div 3</div>
        </div>
    </header>
    )
}

export default Header