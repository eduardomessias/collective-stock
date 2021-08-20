import Image from 'next/image'

import styles from './layout.module.css'

export function Body ({children}) {    
    return (
        <div className="w3-light-grey">
            {children}
        </div>
    )    
}

export const TopContainer = ({children}) =>      
  <div className={styles.topContainer + " w3-bar w3-top w3-black w3-large"}>
    {children}
  </div>

export const Header = ({caption,icon}) =>
    <header className={styles.overlay + " w3-container"}>
        <h5><i className={"fa fa-"+icon}></i> {caption}</h5>
    </header>

export const Sidebar = ({visible,children}) =>
    <nav className={"w3-sidebar w3-white w3-animate-left " + styles.sidebar + (visible ? " displayBlock w3-expand" : " displayNone w3-collapse")}>
        {children}
    </nav>

export const Overlay = ({overlay, onClick}) =>
    <div className={(overlay ? "displayBlock " : "displayNone ") + styles.overlay + " w3-overlay w3-hide-large w3-animate-opacity"} onClick={onClick} title="close side menu" />

export const PageContent = ({children}) =>
    <div className={styles.pageContent + " w3-main"}>
        {children}
    </div>

export const InfoCard = ({ caption, value, color, icon, img }) =>    
    <div style={{
        backgroundImage: `url('/images/${img}')`,
        backgroundSize: '100%',
        boxShadow: '4px 2px rgba(0,0,0,0.2)',
        color: color
    }}>
        <div className={"w3-container w3-padding-16 w3-box-shadow"}>        
            <i className={"fa fa-"+icon+" w3-xxxlarge"}></i>
            <h3>{caption}</h3>
            <h4>{value} items</h4>
        </div>
    </div>
    

