import React, {Component} from 'react';


class Sidebar extends Component {


  render() {
   
   
    return (

  

       <div className="dashboard-nav">

           <div className="dashboard-nav-inner">

              <ul data-submenu-title="Main">
                <li className="active"><a href="dashboard.html"><i className="sl sl-icon-settings"></i> Dashboard</a></li>
                <li><a href="dashboard-messages.html"><i className="sl sl-icon-envelope-open"></i> Messages <span className="nav-tag messages">2</span></a></li>
                <li><a href="dashboard-bookings.html"><i className="fa fa-calendar-check-o"></i> Inquiry</a></li>
              </ul>
              
              <ul data-submenu-title="Listings">
              <li><a href="/me/brand"><i className="sl sl-icon-layers"></i> My Brand</a></li>
                
                <li><a href="dashboard-reviews.html"><i className="sl sl-icon-star"></i> Reviews</a></li>
                <li><a href="dashboard-bookmarks.html"><i className="sl sl-icon-heart"></i> Bookmarks</a></li>
              </ul> 

              <ul data-submenu-title="Account">
                <li><a href="dashboard-my-profile.html"><i className="sl sl-icon-user"></i> My Profile</a></li>
                <li><a href="index-2.html"><i className="sl sl-icon-power"></i> Logout</a></li>
              </ul>
              
            </div>

       </div>
       

    )
  }
}




export default Sidebar;
