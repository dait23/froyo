import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import Sidebar from '../Sidebar/'


class Profile extends Component {


  render() {
   
   
    return (


      
  
     <div id="dashboard">

       <a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder"></i> Dashboard Navigation</a>
       <Sidebar />
       <div className="dashboard-content padding-bottom-50">

          <div id="titlebar">
            <div className="row">
              <div className="col-md-12">
                <h2>My Profile</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Profile</li>
                  </ul>
                </nav>
              </div>
            </div>
         </div>


        {/* row content*/}


          <div className="row">

              <div className="col-lg-6 col-md-12">
                  <div className="dashboard-list-box margin-top-0">

                    <h4 className="gray">Profile Details</h4>
                      <div className="dashboard-list-box-static">

                        <div className="edit-profile-photo">
                          <img src="../../images/user-avatar.jpg" alt="" />
                          <div className="change-photo-btn">
                            <div className="photoUpload">
                                <span><i className="fa fa-upload"></i> Upload Photo</span>
                                <input type="file" className="upload" />
                            </div>
                          </div>
                        </div>
               

                      </div>

                      <div className="my-profile">

                        <label>Your Name</label>
                        <input value="Tom Perrin" type="text" />

                        <label>Phone</label>
                        <input value="(123) 123-456" type="text" />

                        <label>Email</label>
                        <input value="tom@example.com" type="text" />

                        <label>Notes</label>
                        <textarea name="notes" id="notes" cols="30" rows="10">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea>

                        <label><i className="fa fa-twitter"></i> Twitter</label>
                        <input placeholder="https://www.twitter.com/" type="text" />

                        <label><i className="fa fa-facebook-square"></i> Facebook</label>
                        <input placeholder="https://www.facebook.com/" type="text" />

                        <label><i className="fa fa-google-plus"></i> Google+</label>
                        <input placeholder="https://www.google.com/" type="text" />
                      </div>
                    <button className="button margin-top-15">Save Changes</button>




                  </div>
              </div>
               <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box margin-top-0">
            <h4 className="gray">Change Password</h4>
            <div className="dashboard-list-box-static">

              <div className="my-profile">
                <label className="margin-top-0">Current Password</label>
                <input type="password" />

                <label>New Password</label>
                <input type="password" />

                <label>Confirm New Password</label>
                <input type="password" />

                <button className="button margin-top-15">Change Password</button>
              </div>

            </div>
          </div>
        </div>

         
            
          </div>

         

          
          

       {/* row content*/}

       </div>

     </div>

    )
  }
}




export default Profile;
