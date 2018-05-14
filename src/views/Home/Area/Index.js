import React, {Component} from 'react';

class Area extends Component {
  render() {
    return (
     <div className="container padding-bottom-70">
			<div className="row">

				<div className="col-md-12">
					<h3 className="headline centered margin-bottom-35 margin-top-70">Popular Cities <span>Browse listings in popular places</span></h3>
				</div>
				
				<div className="col-md-4">
					<a href="">
					  <img className="img-box" src="images/popular-location-01.jpg" alt="" />
						<div className="img-box-content visible">
							<h4>New York </h4>
							<span>14 Listings</span>
						</div>
					</a>

				</div>	
					
				<div className="col-md-8">

					<a href="listings-list-with-sidebar.html">
					   <img className="img-box" src="images/popular-location-02.jpg" alt="" />
						<div className="img-box-content visible">
							<h4>Los Angeles</h4>
							<span>24 Listings</span>
						</div>
					</a>

				</div>	

				<div className="col-md-8">
					<a href="listings-list-with-sidebar.html">
					<img className="img-box" src="images/popular-location-03.jpg" alt="" />
						<div className="img-box-content visible">
							<h4>San Francisco </h4>
							<span>12 Listings</span>
						</div>
					</a>

				</div>	
					
				<div className="col-md-4">

					<a href="listings-list-with-sidebar.html">
					<img className="img-box" src="images/popular-location-04.jpg" alt="" />
						<div className="img-box-content visible">
							<h4>Miami</h4>
							<span>9 Listings</span>
						</div>
					</a>

				</div>

			</div>
		</div>

    )
  }
}

export default Area;
