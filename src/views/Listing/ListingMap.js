import React, {Component} from 'react';

import Search from './Search'
import List from './List'

class ListingMap extends Component {
  render() {
    return (

    	<div className="fs-container">

    	   <div className="fs-inner-container content">
		      <div className="fs-content">
                  
                  <section className="search">
                      
                      <Search />

                  </section>

                  <section className="listings-container margin-top-30">


                    <div className="row fs-switcher">

                        <div className="col-md-6">
       
                          <p className="showing-results">14 Results Found </p>
                        </div>

                    </div>

                    <div className="row fs-listings">

                    <List />

                    </div>


                    <div className="row fs-listings">
                      <div className="col-md-12">

                        <div className="clearfix"></div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="pagination-container margin-top-15 margin-bottom-40">
                              <nav className="pagination">
                                <ul>
                                  <li><a href="#" className="current-page">1</a></li>
                                  <li><a href="#">2</a></li>
                                  <li><a href="#">3</a></li>
                                  <li><a href="#"><i className="sl sl-icon-arrow-right"></i></a></li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
            
                        
                        
                      </div>
                    </div>
                   


                  </section>

		      </div>
		    </div>

        <div className="fs-inner-container map-fixed">


        <div id="map-container">
            <div id="map" >
             
            </div>
        </div>

      </div>


  
    	</div>

      
    )
  }
}

export default ListingMap;
