import React, {Component} from 'react';


class Sidebar extends Component {




  render() {


    return(
            <div>            
         
                <div className="widget margin-bottom-40">
						<h3 className="margin-top-0 margin-bottom-30">Filters</h3>

						<div className="row with-forms">
						
							<div className="col-md-12">
								<input type="text" placeholder="What are you looking for?" value=""/>
							</div>
						</div>


						<div className="row with-forms">
							<div className="col-md-12">
								<select data-placeholder="All Categories" className="chosen-select" >
									<option>All Categories</option>	
									<option>Shops</option>
									<option>Hotels</option>
									<option>Restaurants</option>
									<option>Fitness</option>
									<option>Events</option>
								</select>
							</div>
						</div>
                  
							<div className="row with-forms">
			
								<div className="col-md-12">

									<div className="input-with-icon location">
										<div id="autocomplete-container">
											<input id="autocomplete-input" type="text" placeholder="Location" />
										</div>
										<a href="#"><i className="fa fa-map-marker"></i></a>
									</div>

								</div>
							</div>
			
							<br />


							<div className="range-slider">
								<input className="distance-radius" type="range" min="1" max="100" step="1" value="50" data-title="Radius around selected destination" />
							</div>

							<a href="#" className="more-search-options-trigger margin-bottom-5 margin-top-20" data-open-title="More Filters" data-close-title="More Filters"></a>

							<div className="more-search-options relative">

								<div className="checkboxes one-in-row margin-bottom-15">
							
									<input id="check-a" type="checkbox" name="check" />
									<label for="check-a">Elevator in building</label>

									<input id="check-b" type="checkbox" name="check" />
									<label for="check-b">Friendly workspace</label>

									<input id="check-c" type="checkbox" name="check" />
									<label for="check-c">Instant Book</label>

									<input id="check-d" type="checkbox" name="check" />
									<label for="check-d">Wireless Internet</label>

									<input id="check-e" type="checkbox" name="check" />
									<label for="check-e">Free parking on premises</label>

									<input id="check-f" type="checkbox" name="check" />
									<label for="check-f">Free parking on street</label>

									<input id="check-g" type="checkbox" name="check" />
									<label for="check-g">Smoking allowed</label>	

									<input id="check-h" type="checkbox" name="check" />
									<label for="check-h">Events</label>
							
								</div>
						

					       </div>
					       <button className="button fullwidth margin-top-25">Update</button>







				  </div>

		   </div>


    	)

 

   }


 }

 export default Sidebar;