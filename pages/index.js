import Image from 'next/image'

import { useState } from 'react'

import { Body, TopContainer, Sidebar, Overlay, PageContent, Header, InfoCard } from '../components/layout'

const user = {
    name: 'Eduardo',
    avatar: '/images/profile.jpeg'
}

export default function Dashboard () {
    const [sidebarVisibility,setSidebarVisibility] = useState (false)
    const [sidebarOverlay,setSidebarOverlay] = useState (false)

    function toggleSidebar () {
        setSidebarVisibility (!sidebarVisibility)
        setSidebarOverlay (!sidebarOverlay)
    }


    return (
        <Body>

            {/* <!-- Top container --> */}
            <TopContainer>
                <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={toggleSidebar}><i className="fa fa-bars"></i>  Menu</button>
                <span className="w3-bar-item w3-right">Collective-Stock (alpha)</span>
            </TopContainer>

            {/* <!-- Sidebar/menu --> */}
            <Sidebar visible={sidebarVisibility}>
                <br />
                <div className="w3-container w3-row">
                    <div className="w3-col s4">
                        <Image alt="" src={user.avatar} className="w3-circle" width={46} height={46} />
                    </div>
                    <div className="w3-col s8 w3-bar">
                        <span>Welcome, <strong>{user.name}</strong></span>
                        <br />
                        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
                        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
                        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
                    </div>
                </div>
                <hr />
                <div className="w3-container">
                    <h5>Dashboard</h5>
                </div>
                <div className="w3-bar-block">
                    <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={toggleSidebar} title="close menu"><i className="fa fa-remove fa-fw"></i>  Close Menu</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw"></i>  Overview</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i>  Views</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw"></i>  Traffic</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bullseye fa-fw"></i>  Geo</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-diamond fa-fw"></i>  Orders</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw"></i>  News</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw"></i>  General</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-history fa-fw"></i>  History</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw"></i>  Settings</a>
                    <br />
                    <br />
                </div>
            </Sidebar>

            {/* <!-- Sidebar overlay --> */}
            <Overlay overlay={sidebarOverlay} onClick={toggleSidebar} />

            {/* <!-- !PAGE CONTENT! --> */}
            <PageContent>
                <Header caption='My collection' icon='diamond' />

                <div className="w3-row-padding w3-margin-bottom">
                    <div className="w3-quarter">
                        <InfoCard caption="Commics" value="52" color="white" icon="comment" img="comics.jpeg" />
                    </div>
                    <div className="w3-quarter">
                        <InfoCard caption="Watches" value="99" color="white" icon="clock-o" img="watches.jpg" />
                    </div>
                    <div className="w3-quarter">
                        {/* <InfoCard caption="Shares" value="23" color="teal" icon="share-alt" image="" /> */}
                    </div>
                    <div className="w3-quarter">
                        {/* <InfoCard caption="Users" value="358" color="orange" icon="users" image="" /> */}
                    </div>
                </div>

            </PageContent>

        </Body>
    )
}