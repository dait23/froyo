import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import Sidebar from '../../Sidebar/'


class NewBrand extends Component {


  render() {
   
   
    return (


      
  
     <div id="dashboard">

       <a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder"></i> Dashboard Navigation</a>
       <Sidebar />
       <div className="dashboard-content padding-bottom-50">

          <div id="titlebar">
            <div className="row">
              <div className="col-md-12">
                <h2>Add New</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Add New</li>
                  </ul>
                </nav>
              </div>
            </div>
         </div>


        {/* row content*/}


          <div className="row">

          <div className="col-lg-12">

            <div id="add-listing">

              <div className="add-listing-section">

                <div className="add-listing-headline">
                  <h3><i className="sl sl-icon-doc"></i> Basic Informations</h3>
                </div>

                <div className="row with-forms">
                  <div className="col-md-12">
                    <h5>Listing Title <i className="tip" data-tip-content="Name of your business"></i></h5>
                    <input className="search-field" type="text" value=""/>
                  </div>
                </div>

                <div className="row with-forms">

                  <div className="col-md-6">
                    <h5>Category</h5>
                    <select className="chosen-select-no-single" >
                      <option label="blank">Select Category</option>  
                      <option>Eat & Drink</option>
                      <option>Shops</option>
                      <option>Hotels</option>
                      <option>Restaurants</option>
                      <option>Fitness</option>
                      <option>Events</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <h5>Keywords <i className="tip" data-tip-content="Maximum of 15 keywords related with your business"></i></h5>
                    <input type="text" placeholder="Keywords should be separated by commas" />
                  </div>

                </div>


                <div className="add-listing-section margin-top-45">

                  <div className="add-listing-headline">
                    <h3><i className="sl sl-icon-location"></i> Location</h3>
                  </div>

                  
                  <div className="submit-section">

                    <div className="row with-forms">

                    <div className="col-md-6">
                      <h5>City</h5>
                      <select className="chosen-select-no-single" >
                        <option label="blank">Select City</option>  
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Houston</option>
                        <option>Phoenix</option>
                        <option>San Diego</option>
                        <option>Austin</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <h5>Address</h5>
                      <input type="text" placeholder="e.g. 964 School Street" />
                    </div>

                    <div className="col-md-6">
                      <h5>State</h5>
                      <input type="text" />
                    </div>

                    <div className="col-md-6">
                      <h5>Zip-Code</h5>
                      <input type="text" />
                    </div>


                    </div>


                  </div>







                </div>

                <div className="add-listing-section margin-top-45">

                    <div className="add-listing-headline">
                      <h3><i className="sl sl-icon-picture"></i> Gallery</h3>
                    </div>

                    <div className="submit-section">
                      <form action="" className="dropzone" ></form>
                    </div>

                </div>


                <div className="add-listing-section margin-top-45">

                  <div className="add-listing-headline">
                    <h3><i className="sl sl-icon-docs"></i> Details</h3>
                  </div>

                  <div className="form">
                    <h5>Description</h5>
                    <textarea className="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellcheck="true"></textarea>
                  </div>


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




export default NewBrand;
