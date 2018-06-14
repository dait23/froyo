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
  MenuSelect,
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
  

				 <List
	                      key={hit.objectID}
	                      hit={hit}
	                      refresh={() => this.props.data.refetch()}
	                    />

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
								<li><a href="/">Home</a></li>
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
								
							</div>
						</div>
					</div>



			     </div>
                    
                    <CustomHits />
		          
		           <Configure hitsPerPage={16} />
				

					<div className="clearfix"></div>
					<div className="row">
						<div className="col-md-12">
							<div className="pagination-container margin-top-20 margin-bottom-40">
								<nav className="pagination">
									<Pagination showLast />
								</nav>
							</div>
						</div>

						<div style={{display:'none'}}>
					<RefinementList 
								            attribute="status"
								            defaultRefinement={[
										      '1'
										    ]}
								            translations={{ noResults: 'No matching Category' }}
                                           
								            />

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
								      
								      <h3 className="margin-top-30 margin-bottom-20 margin-left-15">Area</h3>
	
								         <MenuSelect
										    attribute="area.name"
										    limit={10}
										    showMore={false}
										    showMoreLimit={20}

										  />

										 <h3 className="margin-top-30 margin-bottom-20 margin-left-15">Category</h3>
	
								         <MenuSelect
										    attribute="category.name"
										    limit={10}
										    showMore={false}
										    showMoreLimit={20}

										  />
										  <h3 className="margin-top-30 margin-bottom-20 margin-left-15">Types</h3>
										   <RefinementList
									          attribute="types.name"
									          translations={{ noResults: 'No matching Types' }}
									          className="checkboxes one-in-row margin-bottom-5"
									        />

										  <h3 className="margin-top-30 margin-bottom-20 margin-left-15">Fasilitas</h3>
										   <RefinementList
									          attribute="facilities.name"
									          translations={{ noResults: 'No matching facility' }}
									          className="checkboxes one-in-row margin-bottom-5"
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
