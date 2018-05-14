import React, {Component} from 'react';



class Single extends Component {
  render() {
    return (
      <div>
	      <div className="listing-slider mfp-gallery-container margin-bottom-0">
			<a href="images/single-listing-01.jpg" data-background-image="images/single-listing-01.jpg" className="item mfp-gallery" title="Title 1"><img src="images/single-listing-01.jpg" className="item mfp-gallery" alt=""/></a>
			<a href="images/single-listing-01.jpg" data-background-image="images/single-listing-01.jpg" className="item mfp-gallery" title="Title 1"><img src="images/single-listing-02.jpg" className="item mfp-gallery" alt=""/></a>
			<a href="images/single-listing-01.jpg" data-background-image="images/single-listing-01.jpg" className="item mfp-gallery" title="Title 1"><img src="images/single-listing-01.jpg" className="item mfp-gallery" alt=""/></a>
			<a href="images/single-listing-01.jpg" data-background-image="images/single-listing-01.jpg" className="item mfp-gallery" title="Title 1"><img src="images/single-listing-01.jpg" className="item mfp-gallery" alt=""/></a>
			<a href="images/single-listing-01.jpg" data-background-image="images/single-listing-01.jpg" className="item mfp-gallery" title="Title 1"><img src="images/single-listing-01.jpg" className="item mfp-gallery" alt=""/></a>
		 </div>


		 <div className="container">
			<div className="row sticky-wrapper">
				<div className="col-lg-8 col-md-8 padding-right-30">

				  <div id="titlebar" className="listing-titlebar">
					<div className="listing-titlebar-title">
						<h2>Burger House <span className="listing-tag">Eat & Drink</span></h2>
						<span>
							<a href="#listing-location" className="listing-address">
								<i className="fa fa-map-marker"></i>
								2726 Shinn Street, New York
							</a>
						</span>
						<div className="star-rating" data-rating="5">
							<div className="rating-counter"><a href="#listing-reviews">(31 reviews)</a></div>
						</div>
					</div>
				</div>

				<div id="listing-nav" className="listing-nav-container">
					<ul className="listing-nav">
						<li><a href="#listing-overview" className="active">Overview</a></li>
						<li><a href="#listing-pricing-list">Pricing</a></li>
						<li><a href="#listing-location">Location</a></li>
						<li><a href="#listing-reviews">Reviews</a></li>
						<li><a href="#add-review">Add Review</a></li>
					</ul>
				</div>

				<div id="listing-overview" className="listing-section">

				

					<p>
						Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.
					</p>

					<p>
						 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
					</p>

					<h3 className="listing-desc-headline">Amenities</h3>
					<ul className="listing-features checkboxes margin-top-0">
						<li>Elevator in building</li>
						<li>Friendly workspace</li>
						<li>Instant Book</li>
						<li>Wireless Internet</li>
						<li>Free parking on premises</li>
						<li>Free parking on street</li>
					</ul>
				</div>


				<div id="listing-pricing-list" className="listing-section">
				   <h3 class="listing-desc-headline margin-top-70 margin-bottom-30">Pricing</h3>

				   <div className="show-more">
					 <div className="pricing-list-container">

					     <h4>Burgers</h4>
							<ul>
								<li>
									<h5>Classic Burger</h5>
									<p>Beef, salad, mayonnaise, spicey relish, cheese</p>
									<span>$6</span>
								</li>
								<li>
									<h5>Cheddar Burger</h5>
									<p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
									<span>$6</span>
								</li>
								<li>
									<h5>Veggie Burger</h5>
									<p>Panko crumbed and fried, grilled peppers and mushroom</p>
									<span>$6</span>
								</li>
								<li>
									<h5>Chicken Burger</h5>
									<p>Cheese, chicken fillet, avocado, bacon, tomatoes, basil</p>
									<span>$6</span>
								</li>
							</ul>

						<h4>Drinks</h4>
						<ul>
							<li>
								<h5>Frozen Shake</h5>
								<span>$4</span>
							</li>
							<li>
								<h5>Orange Juice</h5>
								<span>$4</span>
							</li>
							<li>
								<h5>Beer</h5>
								<span>$4</span>
							</li>
							<li>
								<h5>Water</h5>
								<span>Free</span>
							</li>
						</ul>


					 </div>
				   </div>
				   <a href="#" className="show-more-button" data-more-title="Show More" data-less-title="Show Less"><i className="fa fa-angle-down"></i></a>
				  </div>

				  <div id="listing-location" className="listing-section">
					<h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Location</h3>

					<div id="singleListingMap-container">
						<div id="singleListingMap" data-latitude="40.70437865245596" data-longitude="-73.98674011230469" data-map-icon="im im-icon-Hamburger"></div>
						<a href="#" id="streetView">Street View</a>
					</div>
				</div>

				 






				</div>
					<div className="col-lg-4 col-md-4 margin-top-75 sticky">
	                 
		                 <div className="verified-badge with-tip" data-tip-content="Listing has been verified and belongs the business owner or manager.">
							<i className="sl sl-icon-check"></i> Verified Listing
						</div>
						 <div className="boxed-widget booking-widget margin-top-35">
							<h3><i className="fa fa-calendar-check-o "></i> Booking</h3>
							<div className="row with-forms  margin-top-0">

							   <a href="pages-booking.html" className="button book-now fullwidth margin-top-5">Book Now</a>

							    
							</div>

							<div className="boxed-widget opening-hours margin-top-35">
								<div className="listing-badge now-open">Now Open</div>
								<h3><i className="sl sl-icon-clock"></i> Opening Hours</h3>
								<ul>
									<li>Monday <span>9 AM - 5 PM</span></li>
									<li>Tuesday <span>9 AM - 5 PM</span></li>
									<li>Wednesday <span>9 AM - 5 PM</span></li>
									<li>Thursday <span>9 AM - 5 PM</span></li>
									<li>Friday <span>9 AM - 5 PM</span></li>
									<li>Saturday <span>9 AM - 3 PM</span></li>
									<li>Sunday <span>Closed</span></li>
								</ul>
							</div>
                            
                            <div className="boxed-widget margin-top-35">
								<div className="hosted-by-title">
									<h4><span>Hosted by</span> <a href="pages-user-profile.html">Tom Perrin</a></h4>
									<a href="pages-user-profile.html" className="hosted-by-avatar"><img src="images/dashboard-avatar.jpg" alt="" /></a>
								</div>
								<ul className="listing-details-sidebar">
									<li><i className="sl sl-icon-phone"></i> (123) 123-456</li>

									<li><i className="fa fa-envelope-o"></i> <a href="#"><span className="__cf_email__" data-cfemail="01756e6c416479606c716d642f626e6c">[email&#160;protected]</span></a></li>
								</ul>

								<ul className="listing-details-sidebar social-profiles">
									<li><a href="#" className="facebook-profile"><i className="fa fa-facebook-square"></i> Facebook</a></li>
									<li><a href="#" className="twitter-profile"><i className="fa fa-twitter"></i> Twitter</a></li>
								
								</ul>

								
								<div id="small-dialog" className="zoom-anim-dialog mfp-hide">
									<div className="small-dialog-header">
										<h3>Send Message</h3>
									</div>
									<div className="message-reply margin-top-0">
										<textarea cols="40" rows="3" placeholder="Your message to Tom"></textarea>
										<button className="button">Send Message</button>
									</div>
								</div>

								<a href="#small-dialog" class="send-message-to-owner button popup-with-zoom-anim"><i className="sl sl-icon-envelope-open"></i> Send Message</a>
							</div>


							<div className="listing-share margin-top-40 margin-bottom-40 no-border">
								<button className="like-button"><span className="like-icon"></span> Bookmark this listing</button> 
								<span>159 people bookmarked this place</span>

								
									<ul className="share-buttons margin-top-40 margin-bottom-0">
										<li><a className="fb-share" href="#"><i className="fa fa-facebook"></i> Share</a></li>
										<li><a className="twitter-share" href="#"><i className="fa fa-twitter"></i> Tweet</a></li>
										<li><a className="gplus-share" href="#"><i className="fa fa-google-plus"></i> Share</a></li>
										
									</ul>
									<div class="clearfix"></div>
							</div>







					    </div>


				    </div>





		    </div>
		    

		 </div>

      </div>
    )
  }
}

export default Single;
