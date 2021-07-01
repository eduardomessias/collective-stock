import styles from './pageContent.module.css'

const PageContent = ({children}) =>
    <div className={styles.pageContent + " w3-main"}>
        {children}
    </div>

export default PageContent