import React, { Component } from 'react'

import styles from './overlay.module.css'

class Overlay extends Component {
    render () {
        return (
            <div className={(this.props.showOverlay ? "displayBlock " : "displayNone ") + styles.overlay + " w3-overlay w3-hide-large w3-animate-opacity"} onClick={this.props.toggleSidebar} title="close side menu"></div>
        )
    }
}

export default Overlay