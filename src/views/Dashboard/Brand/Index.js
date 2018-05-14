import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import Sidebar from '../Sidebar/'


class Brand extends Component {


  render() {
   
   
    return (


      
  
     <div id="dashboard">

       <a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder"></i> Dashboard Navigation</a>
       <Sidebar />
       <div className="dashboard-content padding-bottom-50">

          <div id="titlebar">
            <div className="row">
              <div className="col-md-12">
                <h2>Brand Listings</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Brands</li>
                  </ul>
                </nav>
              </div>
            </div>
         </div>


        {/* row content*/}


          <div className="row">

          <div className="col-lg-12 col-md-12">
             <div className="dashboard-list-box margin-top-0">

               
              <h4>Active Listings</h4>
                <ul>
                    
                    <li>
                      <div className="list-box-listing">
                        <div className="list-box-listing-img"><a href="#"><img src="../../images/listing-item-01.jpg" alt="" /></a></div>
                        <div className="list-box-listing-content">
                          <div className="inner">
                            <h3><a href="#">Tom's Restaurant</a></h3>
                            <span>964 School Street, New York</span>
                            <div className="star-rating" data-rating="3.5">
                              <div className="rating-counter">(12 reviews)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="buttons-to-right">
                        <a href="#" className="button gray"><i className="sl sl-icon-note"></i> Edit</a>
                        <a href="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</a>
                      </div>
                    </li>

                     <li>
                      <div className="list-box-listing">
                        <div className="list-box-listing-img"><a href="#"><img src="../../images/listing-item-02.jpg" alt="" /></a></div>
                        <div className="list-box-listing-content">
                          <div className="inner">
                            <h3><a href="#">Tom's Restaurant</a></h3>
                            <span>964 School Street, New York</span>
                            <div className="star-rating" data-rating="3.5">
                              <div className="rating-counter">(12 reviews)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="buttons-to-right">
                        <a href="#" className="button gray"><i className="sl sl-icon-note"></i> Edit</a>
                        <a href="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</a>
                      </div>
                    </li>

                     <li>
                      <div className="list-box-listing">
                        <div className="list-box-listing-img"><a href="#"><img src="../../images/listing-item-03.jpg" alt="" /></a></div>
                        <div className="list-box-listing-content">
                          <div className="inner">
                            <h3><a href="#">Tom's Restaurant</a></h3>
                            <span>964 School Street, New York</span>
                            <div className="star-rating" data-rating="3.5">
                              <div className="rating-counter">(12 reviews)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="buttons-to-right">
                        <a href="#" className="button gray"><i className="sl sl-icon-note"></i> Edit</a>
                        <a href="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</a>
                      </div>
                    </li>

                </ul>

             </div>
          </div>
      
            
          </div>

          
          

       {/* row content*/}

       </div>

     </div>

    )
  }
}




export default Brand;
