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
import PropTypes from 'prop-types';
import { connectHits, connectRange } from 'react-instantsearch/connectors';

import Rheostat from 'rheostat';

import Sidebar from './Sidebar'
import List from './Alist'



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


class ListingArea extends Component {




 static propTypes = {
    router: PropTypes.object
  }


  render() {
  	const area = this.props.match.params.slug;
 var newarea = area.replace( '-' , ' ') ;

    return (

    	<div>

         <div id="titlebar" className="gradient">
			<div className="container">
				<div className="row">
					<div className="col-md-12">

						<h2>Listings space {newarea}</h2>
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

					




					 <div className="col-lg-12 col-md-8 padding-right-30">
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
		          
		           <Configure hitsPerPage={12} />
				

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
					<div style={{display:'none'}}>
					<RefinementList 
								            attribute="area.name"
								            defaultRefinement={[
										      newarea
										    ]}
								            translations={{ noResults: 'No matching Category' }}
                                           
								            />

					</div>

					 </div>


				


                 </div>
			        






				
		       </InstantSearch>


               
 
	    
           
              

    	</div>
    </div>
      
    )
  }
}

export default ListingArea;
