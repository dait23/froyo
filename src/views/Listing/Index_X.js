import React, {Component} from 'react';

import Sidebar from './Sidebar'
import List from './List'


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
	         <div className="row">

	          <div className="col-lg-9 col-md-8 padding-right-30">	
			     <div className="row margin-bottom-25">

			       <div className="col-md-6 col-xs-6">
						<div className="layout-switcher">
							<a href="#" className="grid active"><i className="fa fa-th"></i></a>
							<a href="/listing-map" className="list"><i className="fa fa-align-justify"></i></a>
						</div>
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

                <div className="row">
                     
                
				<List />






                 </div>

					<div class="clearfix"></div>
					<div className="row">
						<div className="col-md-12">
							<div className="pagination-container margin-top-20 margin-bottom-40">
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
			

			   </div>

               <div className="col-lg-3 col-md-4">
			      <div className="sidebar">


					 <Sidebar />



			      </div>
			   </div>


	         </div>
	       </div>



    	</div>
      
    )
  }
}

export default Listing;
