import React, {Component} from 'react';

import { Link} from 'react-router-dom'
import {MainApi, Cloudinary_Name} from '../Api/';
import {Image} from 'cloudinary-react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Maps from './Map'
import Share from './Share';
// import formatMoney from 'accounting-js/lib/formatMoney.js'
// // import Street from './Street'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

const photos = [
  { src: 'https://res.cloudinary.com/spazeeid/image/upload/v1526409104/listing-image-high_ppzl6t.jpg', width: 3, height: 2.5 },
  { src: 'https://res.cloudinary.com/spazeeid/image/upload/g_center/v1526411324/tangcity-listing-image2_psyjfv.jpg', width: 4, height: 2.5 },
  { src: 'https://res.cloudinary.com/spazeeid/image/upload/g_center/v1526411820/tangcity-feature-image_mroqz4.jpg', width: 3, height: 2.5 }
];

class Single extends Component {

 static propTypes = {
    router: PropTypes.object
  }


  constructor(props) {
    super(props)
    this.state = { 
     facilities:[],
     collabs:[],
     inclusions:[],
     exclusions:[],
     spaces:[],
     currentImage: 0,
      data:'',
      loading: true,
    }

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,

      });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

   
////////////////// did mount 
  componentDidMount() {
    var that = this;
    that.getData();
  }
////////////////////////

////////////////////get data

  getData(){
     var that = this;
     that.setState({
          loading: true
      });
     var fetch = require('graphql-fetch')(MainApi)

          var query = `
            query Partner($slug: String) {
              Partner(slug: $slug){
                id
                uId
			    name
			    slug
			    address
			    description
			    nearby
			    imageUrl
			    imageId
			    read
			    lat
			    lng
			    spaces{
			      title
			      price1
			      slug
			       wide{
				        size
				      }
			    }
			    category{
			      name
			    }
			    area{
			      name
			    }
			    facilities{
			      name
			    }
			    inclusions{
			      name
			    }
			    exclusions{
			      name
			    }
			   collabs{
			    name
			  }
              
             
             
              }
            }
          `
          var queryVars = {
            slug: this.props.match.params.slug
          }
          var opts = {
            // custom fetch options
          }


          fetch(query, queryVars, opts).then(function (results) {

            //console.log(results)
            if (results.errors) {
             // console.log('cccc')
              //...
             // window.location= "/";
            }
            //var BlogCategory = results.data.BlogCategory


           if ( results.data.Partner == null){

               window.location= "/404";

           }else{

              that.setState({
	              data: results.data.Partner,
	              id:results.data.Partner.id,
	              uid:results.data.Partner.uid,
	              name:results.data.Partner.name,
	              read:results.data.Partner.read,
	              address:results.data.Partner.address,
	              slug:results.data.Partner.slug,
	              description:results.data.Partner.description,
	              nerby:results.data.Partner.nearby,
	              imageId:results.data.Partner.imageId,
	              imageUrl:results.data.Partner.imageUrl,
	              lng:results.data.Partner.lng,
	              lat:results.data.Partner.lat,
	              facilities:results.data.Partner.facilities,
	              category:results.data.Partner.category.name,
	              area:results.data.Partner.area.name,
	              collabs:results.data.Partner.collabs,
	              inclusions:results.data.Partner.inclusions,
	              exclusions:results.data.Partner.exclusions,
	              spaces:results.data.Partner.spaces,
	              loading:false
             });

            //console.log(that.state.facebookUserId);

           }

             that.onRead();
           
           
          })
 

  }
  //////////////////

  onRead() {

     var that = this;
     var fetch = require('graphql-fetch')(MainApi)

          var query = `
            mutation updatePartner ($id: ID!, $read: Int){
              updatePartner(id: $id, read: $read){
                id           
              }
            }
          `
          var queryVars = {
            id: this.state.id,
            read: parseInt(this.state.read + 1),
          }
          var opts = {
            // custom fetch options
          }


          fetch(query, queryVars, opts).then(function (results) {
            if (results.errors) {
              //...
              return
            }
            //var BlogCategory = results.data.BlogCategory

             //that.getData();
            //...
          })


  } 
  /////////////////////////

renderFacility(){
	 const facilities = this.state.facilities || [ ]

	 if(facilities == ''){

        return(

              <p>No Facility Yet</p>

        	)

	 }else{

   return(
            <ul className="listing-features checkboxes margin-top-0">
      
                          {facilities.map((facility, i) => (

                            <li key={i}>{facility.name}</li>
                            
                          ))}

             </ul>

   	)
   }

}

renderInc(){
	 const inclusions = this.state.inclusions || [ ]

	 if(inclusions == ''){

        return(

              <p>No Inclusion Yet</p>

        	)

	 }else{

   return(
            <ul className="listing-features checkboxes margin-top-0">
      
                          {inclusions.map((inc, i) => (

                            <li key={i}>{inc.name}</li>
                            
                          ))}

             </ul>

   	)
   }

}


renderSpace(){

 const spaces = this.state.spaces || [ ]

   if(spaces == ''){

        return(

              <p>No Spaces Available</p>

        	)

	 }else{


   return(
            <div className="row">
      
                          {spaces.map((space, i) => (

                           <div className="col-lg-6 col-md-12">
							<a href="" className="listing-item-container">
								<div className="listing-item">
									<img src="https://res.cloudinary.com/spazeeid/image/upload/v1526409104/listing-image-high_ppzl6t.jpg" alt={space.title} />

									<div className="listing-badge now-open">Now Open</div>
									
									<div className="listing-item-content">
										<span className="tag">{space.wide.size} M </span>
										<h3>{space.title} <i className="verified-icon"></i></h3>
										<span>Rp. {space.price1}</span>
									</div>
									<span className="like-icon"></span>
								</div>
								
							</a>
						 </div>
                            
                          ))}

             </div>

   	)
  }



}


renderEx(){
	 const exclusions = this.state.exclusions || [ ]

    if(exclusions == ''){

        return(

              <p>No Exclusion Yet</p>

        	)

	 }else{


   return(
            <ul className="listing-features checkboxes margin-top-0">
      
                          {exclusions.map((ex, i) => (

                            <li key={i}>{ex.name}</li>
                            
                          ))}

             </ul>

   	)
  }
}


///////////////////////

renderDes(){

	if(this.state.description == ''){

		return(
             
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
             </p>

			)


	}else{

     return(

    <p>
     {this.state.description}
    </p>

     )

	}
}

//////////////////////////////

  render() {
  	if (this.state.loading) {
      return (

      	<div></div>

      	)

    } 
    return (
      <div>
	      
		   <Gallery photos={photos}  onClick={this.openLightbox} className="listing-slider mfp-gallery-container margin-bottom-0"/>
		   <Lightbox images={photos}
	          onClose={this.closeLightbox}
	          onClickPrev={this.gotoPrevious}
	          onClickNext={this.gotoNext}
	          currentImage={this.state.currentImage}
	          isOpen={this.state.lightboxIsOpen}
	        />

		


		 <div className="container padding-bottom-50">
			<div className="row sticky-wrapper">
				<div className="col-lg-8 col-md-8 padding-right-30">

				  <div id="titlebar" className="listing-titlebar">
					<div className="listing-titlebar-title">
						<h2>{this.state.name} <span className="listing-tag">{this.state.category}</span> </h2>
						<span>
							<a className="listing-address">
								
								{this.state.address}
                                
							</a>
						</span>

						<div className="star-rating" data-rating="5">
							<a style={{color:'#1B9F6A'}}><i className="fa fa-map-marker"></i> {this.state.area}</a>
						</div>
						
					</div>
				</div>

				<div id="listing-nav" className="listing-nav-container">
					<ul className="listing-nav">
						<li><a href="#listing-overview" className="active">Description</a></li>
						
					</ul>
				</div>

				<div id="listing-overview" className="listing-section">

				

					{this.renderDes()}

					
				<h3 className="listing-desc-headline">Fasilitas</h3>
					{this.renderFacility()}

				<h3 className="listing-desc-headline">Inclusion</h3>
					{this.renderInc()}

			    <h3 className="listing-desc-headline">Exclusion</h3>
					{this.renderEx()}


				</div>



				  <div id="listing-location" className="listing-section">

					<h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Location Map</h3>

					<div id="singleListing Map-container">
						<div id="singleListingMap">

                       <Maps 

                        lat={this.state.lat}
                        lng={this.state.lng}
                        name={this.state.name}
                       />

						</div>
						
					</div>



				  <div id="listing-location" className="listing-section">

					<h3 className="listing-desc-headline margin-top-60 margin-bottom-30">{this.state.name} space available </h3>

					{this.renderSpace()}

				  </div>



					





				</div>

				 






				</div>
					<div className="col-lg-4 col-md-4 margin-top-75 sticky">
	                 
		                 <div className="verified-badge with-tip" data-tip-content="Listing has been verified and belongs the business owner or manager.">
							<i className="sl sl-icon-check"></i> Verified Listing
						</div>
						 <div className="boxed-widget booking-widget">
							
							

							<div className="boxed-widget opening-hours">
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
									<h4><span>Hosted by</span> <a><img src="https://res.cloudinary.com/spazeeid/image/upload/lhukm16yizg5dl58e2vi" alt="logo" /></a></h4>
									
								</div>
								

								<ul className="listing-details-sidebar social-profiles">
									<li><a href="#" className="facebook-profile"><i className="fa fa-facebook-square"></i> Facebook</a></li>
									<li><a href="#" className="instagram-profile"><i className="fa fa-instagram"></i> Instagram</a></li>
								
								</ul>

								

								
							</div>


							<div className="listing-share margin-top-40 margin-bottom-40 no-border">
								<button className="like-button"><span className="like-icon"></span> Bookmark this listing</button> 
								<span>159 people bookmarked this place</span>

								
									<ul className="share-buttons margin-top-40 margin-bottom-0">
										<Share />
										
									</ul>
									<div className="clearfix"></div>
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
