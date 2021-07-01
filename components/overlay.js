import styles from './overlay.module.css'

const Overlay = () =>
    <div className={styles.overlay + " w3-overlay w3-hide-large w3-animate-opacity"} onClick="w3_close()" title="close side menu" id="myOverlay"></div>

export default Overlay