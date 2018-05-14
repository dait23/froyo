import React, {Component} from 'react';

import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";


class Banner extends Component {

	constructor(props) {
    super(props)
    this.state = { 
      loading: true,
    }
  
  }

    componentDidMount() {
       setTimeout(() => this.setState({ loading: false }), 1000);
    }




  render() {
  	 if (this.state.loading) {
      return (
          <div className="main-search-container dark-overlay">
		   <div className="main-search-inner">
               <ReactPlaceholder type='rect' showLoadingAnimation={true} delay={2000} ready={false} color='#E0E0E0' style={{ width: '100%', height: 620 }}>
                      <div></div>
                    </ReactPlaceholder>
             
          </div>
          </div>
        )


    }
    return (
      <div className="main-search-container dark-overlay">
		<div className="main-search-inner">

			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2>Cari Lapak Jualan untuk Usahamu</h2>
						<h4>Expolore top-rated attractions, activities and more</h4>

						<div className="main-search-input">

							<div className="main-search-input-item">
								<input type="text" placeholder="What are you looking for?" value=""/>
							</div>

							<div className="main-search-input-item location">
								<div id="autocomplete-container">
									<input id="autocomplete-input" type="text" placeholder="Location" />
								</div>
								<a href="#"><i className="fa fa-map-marker"></i></a>
							</div>

							<div className="main-search-input-item">
								<select data-placeholder="All Categories" className="chosen-select" >
									<option>All Categories</option>	
									<option>Shops</option>
									<option>Hotels</option>
									<option>Restaurants</option>
									<option>Fitness</option>
									<option>Events</option>
								</select>
							</div>

							<button className="button" >Search</button>

						</div>
					</div>
				</div>
			</div>

		</div>
		
		<div className="video-container">
			<video poster="images/main-search-video-poster.jpg" loop autoPlay muted>
				<source src="https://a0.ah-assets.net/uploads/homepage/ambient.mp4" type="video/mp4" />
			</video>
		</div>

	</div>

    )
  }
}

export default Banner;
