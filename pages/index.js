import React, { Component } from 'react'
import Image from 'next/image'

import Body from '../components/body'
import TopContainer from '../components/topContainer'
import Sidebar from '../components/sidebar'
import Overlay from '../components/overlay'
import PageContent from '../components/pageContent'
import Header from '../components/header'
import Footer from '../components/footer'

import TopVolumeTable from '../components/topVolume'

class Home extends Component {
  constructor (props) {
    super (props)

    this.state = {
      showSidebar: false,
      showOverlay: false
    }
    this.toggleSidebar = this.toggleSidebar.bind (this)
  }

  toggleSidebar () {
    this.setState ({ showSidebar: !this.state.showSidebar, showOverlay: !this.state.showOverlay })
  }

  render = () =>
    <Body>
      <TopContainer toggleSidebar={this.toggleSidebar} />
      <Sidebar showSidebar={this.state.showSidebar} toggleSidebar={this.toggleSidebar} />
      <Overlay showOverlay={this.state.showOverlay} toggleSidebar={this.toggleSidebar} />
  
      <PageContent>
  
        <Header />
  
        <div className="w3-row-padding w3-margin-bottom">
          <div className="w3-quarter">
            <div className="w3-container w3-red w3-padding-16">
              <div className="w3-left"><i className="fa fa-comment w3-xxxlarge"></i></div>
              <div className="w3-right">
                <h3>52</h3>
              </div>
              <div className="w3-clear"></div>
              <h4>Messages</h4>
            </div>
          </div>
          <div className="w3-quarter">
            <div className="w3-container w3-blue w3-padding-16">
              <div className="w3-left"><i className="fa fa-eye w3-xxxlarge"></i></div>
              <div className="w3-right">
                <h3>99</h3>
              </div>
              <div className="w3-clear"></div>
              <h4>Views</h4>
            </div>
          </div>
        <div className="w3-quarter">
            <div className="w3-container w3-teal w3-padding-16">
              <div className="w3-left"><i className="fa fa-share-alt w3-xxxlarge"></i></div>
              <div className="w3-right">
                <h3>23</h3>
              </div>
              <div className="w3-clear"></div>
              <h4>Shares</h4>
            </div>
          </div>
          <div className="w3-quarter">
            <div className="w3-container w3-orange w3-text-white w3-padding-16">
              <div className="w3-left"><i className="fa fa-users w3-xxxlarge"></i></div>
              <div className="w3-right">
                <h3>50</h3>
              </div>
              <div className="w3-clear"></div>
              <h4>Users</h4>
            </div>
          </div>
        </div>
  
        <div className="w3-panel">
          <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
  
            <div className="w3-third">
              <h5>Regions</h5>
              <Image src="/images/region.jpg" width={525} height={389} style={{ width: 100 + '%' }} alt="Google Regional Map" />
            </div>
  
            <div className="w3-twothird">
              <h5>Top volume</h5>
              <TopVolumeTable />
            </div>
          </div>
        </div>
  
        <hr />
  
        <div className="w3-container">
          <h5>General Stats</h5>
          <p>New Visitors</p>
          <div className="w3-grey">
            <div className="w3-container w3-center w3-padding w3-green" style={{ width: 25 + '%' }}>+25%</div>
          </div>
  
          <p>New Users</p>
          <div className="w3-grey">
            <div className="w3-container w3-center w3-padding w3-orange" style={{ width: 50 + '%' }}>50%</div>
          </div>
  
          <p>Bounce Rate</p>
          <div className="w3-grey">
            <div className="w3-container w3-center w3-padding w3-red" style={{ width: 75 + '%' }}>75%</div>
          </div>
        </div>
  
        <hr />
  
        <div className="w3-container">
          <h5>Countries</h5>
          <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
            <thead>
              <tr>
                <th>#</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>United States</td>
                <td>65%</td>
              </tr>
              <tr>
                <td>UK</td>
                <td>15.7%</td>
              </tr>
              <tr>
                <td>Russia</td>
                <td>5.6%</td>
              </tr>
              <tr>
                <td>Spain</td>
                <td>2.1%</td>
              </tr>
              <tr>
                <td>India</td>
                <td>1.9%</td>
              </tr>
              <tr>
                <td>France</td>
                <td>1.5%</td>
              </tr>
            </ tbody>
          </table>
          <br />
          <button className="w3-button w3-dark-grey">More Countries  <i className="fa fa-arrow-right"></i></button>
        </div>
  
        <hr />
  
        <div className="w3-container">
          <h5>Recent Users</h5>
          <ul className="w3-ul w3-card-4 w3-white">
            <li className="w3-padding-16">
              <img src="/w3images/avatar2.png" className="w3-left w3-circle w3-margin-right" style={{ width: 35 + 'px' }} />
              <span className="w3-xlarge">Mike</span>
              <br />
            </li>
            <li className="w3-padding-16">
              <img src="/w3images/avatar5.png" className="w3-left w3-circle w3-margin-right" style={{ width: 35 + 'px' }} />
              <span className="w3-xlarge">Jill</span>
              <br />
            </li>
            <li className="w3-padding-16">
              <img src="/w3images/avatar6.png" className="w3-left w3-circle w3-margin-right" style={{ width: 35 + 'px' }} />
              <span className="w3-xlarge">Jane</span>
              <br />
            </li>
          </ul>
        </div>
  
        <hr />
  
        <div className="w3-container">
          <h5>Recent Comments</h5>
          <div className="w3-row">
            <div className="w3-col m2 text-center">
              <img className="w3-circle" src="/w3images/avatar3.png" style={{ width: 96 + 'px', height: 96 + 'px' }} />
            </div>
            <div className="w3-col m10 w3-container">
              <h4>John <span className="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span></h4>
              <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <br />
            </div>
          </div>
  
          <div className="w3-row">
            <div className="w3-col m2 text-center">
              <img className="w3-circle" src="/w3images/avatar1.png" style={{ width: 96 + 'px', height: 96 + 'px' }} />
            </div>
            <div className="w3-col m10 w3-container">
              <h4>Bo <span className="w3-opacity w3-medium">Sep 28, 2014, 10:15 PM</span></h4>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <br />
            </div>
          </div>
        </div>
  
        <br />
  
        <div className="w3-container w3-dark-grey w3-padding-32">
          <div className="w3-row">
            <div className="w3-container w3-third">
              <h5 className="w3-bottombar w3-border-green">Demographic</h5>
              <p>Language</p>
              <p>Country</p>
              <p>City</p>
            </div>
            <div className="w3-container w3-third">
              <h5 className="w3-bottombar w3-border-red">System</h5>
              <p>Browser</p>
              <p>OS</p>
              <p>More</p>
            </div>
            <div className="w3-container w3-third">
              <h5 className="w3-bottombar w3-border-orange">Target</h5>
              <p>Users</p>
              <p>Active</p>
              <p>Geo</p>
              <p>Interests</p>
            </div>
          </div>
        </div>
  
        <Footer />
  
      </PageContent>
    </Body>
    
}

export default Home