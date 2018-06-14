import React, {Component} from 'react';


class Sidebar extends Component {

_logout = () => {

     window.localStorage.clear()
     // window.localStorage.removeItem('nordic');
     //localStorage.removeItem('uid');
    // localStorage.removeItem('uid')
    //localStorage.removeItem('nordic')
    // localStorage.removeItem('nordic');
     window.location.reload()
     
  }

  
  render() {
   
   
    return (

  

       <div className="dashboard-nav">

           <div className="dashboard-nav-inner">

              <ul data-submenu-title="Main">
                <li className="active"><a href="/me/dashboard"><i className="sl sl-icon-settings"></i> Dashboard</a></li>
                <li><a href="/me/dashboard/messages"><i className="sl sl-icon-envelope-open"></i> Messages </a></li>
               
              </ul>

              <ul data-submenu-title="Inquiry">
                  <li><a href="/me/dashboard/brand-inquiry"><i className="fa fa-calendar-check-o"></i> Brand Inquiry</a></li>
                   <li><a href="/me/dashboard/space-inquiry"><i className="fa fa-calendar-check-o"></i> Space Inquiry</a></li>
              </ul>
              
              <ul data-submenu-title="Listings">
              <li><a href="/me/dashboard/space"><i className="sl sl-icon-layers"></i> My Space </a></li>
              <li><a href="/me/dashboard/brand"><i className="sl sl-icon-layers"></i> My Brand / Idea</a></li>
                

               
              </ul> 

              <ul data-submenu-title="Account">
                <li><a href="/me/dashboard/profile"><i className="sl sl-icon-user"></i> My Profile</a></li>
                <li><a onClick={this._logout}><i className="sl sl-icon-power"></i> Logout</a></li>
              </ul>
              
            </div>

       </div>
       

    )
  }
}




export default Sidebar;
