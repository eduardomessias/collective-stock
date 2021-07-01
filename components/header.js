import styles from './header.module.css'

const Header = () =>
    <header className={styles.overlay + " w3-container"}>
        <h5><b><i className="fa fa-dashboard"></i> My Dashboard</b></h5>
    </header>

export default Header