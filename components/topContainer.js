import React, { Component } from 'react'

import styles from './topContainer.module.css'

class TopContainer extends Component {
    render () {
      return (
        <div className={styles.topContainer + " w3-bar w3-top w3-black w3-large"}>
          <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={this.props.toggleSidebar}><i className="fa fa-bars"></i>  Menu</button>
          <span className="w3-bar-item w3-right">Collective Stock</span>
        </div>
      )
    }
}

export default TopContainer