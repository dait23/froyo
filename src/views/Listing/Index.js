import React, { Component } from 'react';

import {
  InstantSearch,
  SearchBox,
  RefinementList,
  ClearRefinements,
  Stats,
  Pagination,
  Highlight,
  Configure,
  ClearAll
} from 'react-instantsearch/dom';
import { connectHits, connectRange } from 'react-instantsearch/connectors';
import PropTypes from 'prop-types';
import Rheostat from 'rheostat';

import Sidebar from './Sidebar'
import List from './List'

const CustomHits = connectHits(({ hits }) =>

<div className="row">
  {hits.map(hit =>
   
        <div className="col-lg-6 col-md-12" key={hit.objectID}>
					<a href={`/space/detail/${hit.slug}`} className="listing-item-container">
						<div className="listing-item">
							<img src="https://res.cloudinary.com/spazeeid/image/upload/v1526409104/listing-image-high_ppzl6t.jpg" alt="thumb" />

							<div className="listing-badge now-open">Now Open</div>
							
							<div className="listing-item-content">
								<span className="tag">{hit.category.name}</span>
								<h3>{hit.name} <i className="verified-icon"></i></h3>
								<span>{hit.area.name}</span>
							</div>
							<span className="like-icon"></span>
						</div>
						
					</a>
				 </div>


  )}
</div>
);

const Content = () =>
  <div className="row">
 
  </div>;


class Listing extends Component {

  render() {
    return (

    	<div>

         <div id="titlebar" className="gradient">
			<div className="container">
				<div className="row">
					<div className="col-md-12">

						<h2>Listings Space</h2>
						<nav id="breadcrumbs">
							<ul>
								<li><a href="#">Home</a></li>
								<li>Listings</li>
							</ul>
						</nav>

					</div>
				</div>
			</div>
		 </div>


		  <div className="container">
              

                  <InstantSearch
			            apiKey="0822bfbefb32945d57e7f3bed5117088"
			            appId="X0RKYDMJ0J"
			            indexName="partners_space"
			            refresh={false}
			           
			          >
                 <div className="row">

					




					 <div className="col-lg-9 col-md-8 padding-right-30">
					 			<div className="row margin-bottom-25">

			       <div className="col-md-6 col-xs-6">
						<span style={{fontSize:'14px'}}><Stats /></span>
					</div>


					<div className="col-md-6 col-xs-6">
						<div className="sort-by">
							<div className="sort-by-select">
								<select data-placeholder="Default order" className="chosen-select-no-single">
									<option>Default Order</option>	
									<option>Highest Rated</option>
									<option>Most Reviewed</option>
									<option>Newest Listings</option>
									<option>Oldest Listings</option>
								</select>
							</div>
						</div>
					</div>



			     </div>
                    
                    <CustomHits />
		          
		           <Configure hitsPerPage={10} />
				

					<div className="clearfix"></div>
					<div className="row">
						<div className="col-md-12">
							<div className="pagination-container margin-top-20 margin-bottom-40">
								<nav className="pagination">
									<Pagination showLast />
								</nav>
							</div>
						</div>

					</div>

					 </div>


					  <div className="col-lg-3 col-md-4">
			            <div className="sidebar">
                          <div className="widget margin-bottom-40">

                                <div className="row with-forms">
							 <h3 className="margin-top-0 margin-bottom-20 margin-left-15">Find Listing</h3>
								<div className="col-md-12">
									 <SearchBox translations={{ placeholder: 'What are you looking for?' }} />
								</div>
							</div>
						
								<div className="row with-forms ">
                                 

								
									<div>
								      <div style={{marginLeft:'15px', marginTop:'10px'}}> <ClearRefinements /></div>
								      <h3 className="margin-top-30 margin-bottom-20 margin-left-15">Area</h3>
										<RefinementList 
								            attribute="area.name"
								            translations={{ noResults: 'No matching Category' }}
                                            className="checkboxes one-in-row margin-bottom-15"
								            />
									</div>
								</div>



						  </div>
			            </div>

			           </div>
				


                 </div>
			        






				
		       </InstantSearch>


               
 
	    
           
              

    	</div>
    </div>
      
    )
  }
}

export default Listing;
