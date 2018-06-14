import React, {Component} from 'react';

import { Link} from 'react-router-dom'
import {MainApi, Cloudinary_Name, No_Thumb} from '../Api/';
import {Image} from 'cloudinary-react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';
// import Gallery from 'react-photo-gallery';
// import Lightbox from 'react-images';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import Maps from './Map'
import Share from './Share';
import List from './List';
// import formatMoney from 'accounting-js/lib/formatMoney.js'
import Street from './Street'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import Select from 'react-select';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/id';
// import 'react-datepicker/dist/react-datepicker.css';

// import 'moment/locale/id';
// moment.locale('id');
// const photos = [
//   { src: 'https://res.cloudinary.com/spazeeid/image/upload/v1526409104/listing-image-high_ppzl6t.jpg', width: 3, height: 2.5 },
//   { src: 'https://res.cloudinary.com/spazeeid/image/upload/g_center/v1526411324/tangcity-listing-image2_psyjfv.jpg', width: 4, height: 2.5 },
//   { src: 'https://res.cloudinary.com/spazeeid/image/upload/g_center/v1526411820/tangcity-feature-image_mroqz4.jpg', width: 3, height: 2.5 }
// ];

const images = [
      {
        original: No_Thumb,
      }
    ];

class Single extends Component {

 static propTypes = {
    router: PropTypes.object
  }


  constructor(props) {
    super(props)
    this.state = {
     // startDate: moment(),
     facilities:[],
     collabs:[],
     galleries:[],
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
    this.handleChange = this.handleChange.bind(this);
    this.handleChangex = this.handleChangex.bind(this);
  
  }

  handleChange(day) {

        
        this.setState({ startAt: day });

         console.log('startAt:', day);
    }

    handleChangex(day) {

        
        this.setState({ endAt: day });

         console.log('endAt:', day);
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
			      imageUrl
			      imageId
            
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
			  galleries{
			      id
			      imageId
			      imageUrl
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
	              galleries:results.data.Partner.galleries,
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


renderGaleri(){

 const galleries = this.state.galleries || [ ]


 if(this.state.galleries == ''){

 	return(
        
         <ImageGallery items={images} 
            showThumbnails={false}
            infinite={true}
            showPlayButton={false}
		   />

 		)

 }else{

return(

       <ImageGallery items={galleries.map((galeri) => (
                           
                           { original: galeri.imageUrl}

                         
                          ))} 
            showThumbnails={false}
            infinite={true}
            showPlayButton={false}
		   />



  	)

 }


  
 
    

}

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

                           <List
		                      key={space.id}
		                      space={space}
		                      refresh={() => this.props.data.refetch()}
		                    />
                            
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
                Tidak ada Deskripsi
             </p>

			)


	}else{

     return(


    <p dangerouslySetInnerHTML={{ __html: this.state.description }}></p>

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

	     	 

		


		 <div className="container padding-bottom-50">

		   <div className="row">
           <div className="col-md-12">
                {this.renderGaleri()}

           </div>

		   </div>
		   
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

						
         <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Street View</h3>

          <div id="singleListing Map-container">
            <div id="singleListingMap">

                       <Street

                        lat={this.state.lat}
                        lng={this.state.lng}
                        name={this.state.name}
                       />



            </div>
					
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
							
							

			
						<div className="boxed-widget booking-widget ">
		
							<div className="row with-forms  margin-top-0">

							
							

								

				</div>

		
			</div>
			
                            
                            <div className="boxed-widget margin-top-35">
								<div className="hosted-by-title">
									<h4><span>Hosted by</span> <a><img src="https://res.cloudinary.com/spazeeid/image/upload/lhukm16yizg5dl58e2vi" alt="logo" /></a></h4>
									
								</div>
								


								

								
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
