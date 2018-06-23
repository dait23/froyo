import React, {Component} from 'react';
import {
  InstantSearch,
  SearchBox,
  Pagination,
  RefinementList,
  Highlight,
  Configure,
  connectHits,
   MenuSelect,
  connectNumericMenu,
  connectRefinementList,
  connectRange,
} from 'react-instantsearch/dom';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';


import { withUrlSync } from './urlSync';

import Search from './Search'
import List from './List'

class ListingMap extends Component {
  render() {
    return (

    	<div className="fs-container">

        <InstantSearch
           apiKey="0822bfbefb32945d57e7f3bed5117088"
                        appId="X0RKYDMJ0J"
                        indexName="partners_space"
          searchState={props.searchState}
          createURL={props.createURL}
          onSearchStateChange={props.onSearchStateChange}
        >
          <Configure aroundLatLngViaIP={true} aroundRadius="all" />
         
        </InstantSearch>

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

                    <div className="col-lg-4 col-md-12">
                      <a href="listings-single-page.html" className="listing-item-container" data-marker-id="1">
                        <div className="listing-item">
                          <img src="images/listing-item-01.jpg" alt="" />

                          <div className="listing-badge now-open">Now Open</div>
                          
                          <div className="listing-item-content">
                            <span className="tag">Eat & Drink</span>
                            <h3>Tom's Restaurant <i className="verified-icon"></i></h3>
                            <span>964 School Street, New York</span>
                          </div>
                          <span className="like-icon"></span>
                        </div>
                        <div className="star-rating" data-rating="3.5">
                          <div className="rating-counter">(12 reviews)</div>
                        </div>
                      </a>
                    </div>



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


export default withUrlSync(ListingMap);
