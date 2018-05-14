import React, {Component} from 'react';

class Popular extends Component {
  render() {
    return (
       
       <section className="fullwidth margin-top-65 padding-top-75 padding-bottom-70"  style={{background: '#f8f8f8'}}>

			<div className="container">
				<div className="row">

					<div className="col-md-12">
						<h3 className="headline centered margin-bottom-45">
							Most Visited Places
							<span>Discover top-rated local businesses</span>
						</h3>
					</div>

					<div className="col-md-4">
                     
                     <div className="carousel-item">
							<a href="listings-single-page.html" className="listing-item-container">
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
								
							</a>
						</div>

					</div>

					<div className="col-md-4">
                     
                     <div className="carousel-item">
							<a href="listings-single-page.html" className="listing-item-container">
								<div className="listing-item">
									<img src="images/listing-item-02.jpg" alt="" />

									<div className="listing-badge now-open">Now Open</div>
									
									<div className="listing-item-content">
										<span className="tag">Eat & Drink</span>
										<h3>Tom's Restaurant <i className="verified-icon"></i></h3>
										<span>964 School Street, New York</span>
									</div>
									<span className="like-icon"></span>
								</div>
								
							</a>
						</div>

					</div>

					<div className="col-md-4">
					
						<div className="carousel-item">
							<a href="listings-single-page.html" className="listing-item-container">
								<div className="listing-item">
									<img src="images/listing-item-03.jpg" alt="" />

									<div className="listing-badge now-closed">Now Closed</div>

									<div className="listing-item-content">
										<span className="tag">Eat & Drink</span>
										<h3>Think Coffee</h3>
										<span>215 Terry Lane, New York</span>
									</div>
									<span className="like-icon"></span>
								</div>
								
							</a>
						</div>
					
						
					</div>
					<div className="col-md-4">
					
						<div className="carousel-item">
							<a href="listings-single-page.html" className="listing-item-container">
								<div className="listing-item">
									<img src="images/listing-item-04.jpg" alt="" />

									<div className="listing-badge now-closed">Now Closed</div>

									<div className="listing-item-content">
										<span className="tag">Eat & Drink</span>
										<h3>Think Coffee</h3>
										<span>215 Terry Lane, New York</span>
									</div>
									<span className="like-icon"></span>
								</div>
								
							</a>
						</div>
					
						
					</div>
					<div className="col-md-4">
					
						<div className="carousel-item">
							<a href="listings-single-page.html" className="listing-item-container">
								<div className="listing-item">
									<img src="images/listing-item-05.jpg" alt="" />

									<div className="listing-badge now-closed">Now Closed</div>

									<div className="listing-item-content">
										<span className="tag">Eat & Drink</span>
										<h3>Think Coffee</h3>
										<span>215 Terry Lane, New York</span>
									</div>
									<span className="like-icon"></span>
								</div>
								
							</a>
						</div>
					
						
					</div>
					<div className="col-md-4">
					
						<div className="carousel-item">
							<a href="listings-single-page.html" className="listing-item-container">
								<div className="listing-item">
									<img src="images/listing-item-06.jpg" alt="" />

									<div className="listing-badge now-closed">Now Closed</div>

									<div className="listing-item-content">
										<span className="tag">Eat & Drink</span>
										<h3>Think Coffee</h3>
										<span>215 Terry Lane, New York</span>
									</div>
									<span className="like-icon"></span>
								</div>
								
							</a>
						</div>
					
						
					</div>

				</div>
			</div>

		</section>

    )
  }
}

export default Popular;
