import React, {Component} from 'react';

import { Link} from 'react-router-dom'
import {MainApi, Cloudinary_Name, No_Thumb} from '../Api/';
import {Image} from 'cloudinary-react';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import MetaTags from 'react-meta-tags';
// import Gallery from 'react-photo-gallery';
// import Lightbox from 'react-images';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import Share from './Share';

// import formatMoney from 'accounting-js/lib/formatMoney.js'

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

class Space extends Component {

 static propTypes = {
    router: PropTypes.object
  }


  constructor(props) {
    super(props)
    this.state = {
     // startDate: moment(),
      startAt:'',
      endAt:'',
      spaceId:'',
      price:'',
      data:'',
      loading: true,
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleChangex = this.handleChangex.bind(this);
     this.onUpdate = this.onUpdate.bind(this);
this.handleChangez = this.handleChangex.bind(this)
  
  }

  handleChange(day) {

        
        this.setState({ startAt: day });

         console.log('startAt:', day);
    }

    handleChangex(day) {

        
        this.setState({ endAt: day });

         console.log('endAt:', day);
    }

 handleChangez = (price) => {
        this.setState({ price : price.value});
        console.log(`brand: ${price.value}`);
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
            query Space($slug: String) {
              Space(slug: $slug){
                id
                title
                slug
                description
                rules
                nearby
                visitor
                imageId
                imageUrl
                price1
                price7
                price30
                partner{
                  id
                  address
                  area{
                    name
                  }
                }
                wide{
                  id
                  size
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


           if ( results.data.Space == null){

               window.location= "/404";

           }else{

              that.setState({
	              data: results.data.Space,
	              id:results.data.Space.id,
                title:results.data.Space.title,
                description:results.data.Space.description,
                rules:results.data.Space.rules,
                address:results.data.Space.partner.address,
                partnerId:results.data.Space.partner.id,
                area:results.data.Space.partner.area.name,
                nearby:results.data.Space.nearby,
                price1:results.data.Space.price1,
                price7:results.data.Space.price7,
                price30:results.data.Space.price30,
                visitor:results.data.Space.visitor,
                imageUrl:results.data.Space.imageUrl,
                size:results.data.Space.wide.size,
	             
	              loading:false
             });

            //console.log(that.state.facebookUserId);

           }

            
           
           
          })
 

  }
  /////////////////////////

  onUpdate() {

     var that = this;
     var fetch = require('graphql-fetch')(MainApi)

          var query = `
            mutation createCart (
              $endAt: String
              $startAt: String
              $spaceId: ID
              $price: String
              $userId: ID
            ){
              createCart (
              endAt: $endAt,
              startAt: $startAt,
              spaceId: $spaceId,
              price: $price,
              userId: $userId
      
              ){
                id           
              }
            }
          `
          var queryVars = {
            spaceId: this.state.id,
            startAt: this.state.startAt,
            endAt: this.state.endAt,
            price: this.state.price,
            userId: localStorage.getItem('uid')
            
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

            toast('Inquiry Success', { type: toast.TYPE.SUCCESS, autoClose: 2000 }, setTimeout("location.href = '/space-list';",2000))
            //...
          })


  } 
   

  ///////////////////////
  

renderGaleri(){

const thumb = [
      {
        original: this.state.imageUrl,
      }
    ];


 if(this.state.imageUrl == ''){

 	return(
        
         <ImageGallery items={images} 
            showThumbnails={false}
            infinite={true}
            showPlayButton={false}
		   />

 		)

 }else{

return(

       <ImageGallery items={thumb}
 
            showThumbnails={false}
            infinite={true}
            showPlayButton={false}
		   />



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

renderRule(){

  if(this.state.rules == ''){

    return(
             
             <p>
                Tidak ada peraturan space
             </p>

      )


  }else{

     return(


    <p dangerouslySetInnerHTML={{ __html: this.state.rules }}></p>

     )

  }
}

renderVisitor(){

  if(this.state.visitor == ''){

    return(
             
             <p>
                Tidak ada Pengunjung
             </p>

      )


  }else{

     return(


    <p dangerouslySetInnerHTML={{ __html: this.state.visitor }}></p>

     )

  }
}

renderNearby(){

  if(this.state.nearby == ''){

    return(
             
             <p>
                Tidak ada Nearby Space
             </p>

      )


  }else{

     return(


    <p dangerouslySetInnerHTML={{ __html: this.state.nearby }}></p>

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
       <ToastContainer autoClose={2000} />
		   <div className="row">
           <div className="col-md-12">
                {this.renderGaleri()}

           </div>

		   </div>
		   
			<div className="row sticky-wrapper">
				<div className="col-lg-8 col-md-8 padding-right-30">

				  <div id="titlebar" className="listing-titlebar">
					<div className="listing-titlebar-title">
						<h2>{this.state.title} <span className="listing-tag">{this.state.size}</span> </h2>
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

					
				
				

				</div>


        <div id="listing-nav" className="listing-nav-container">
          <ul className="listing-nav">
            <li><a href="#listing-overview" className="active">Peraturan Space</a></li>
            
          </ul>
        </div>

        <div id="listing-overview" className="listing-section">

        

          {this.renderRule()}

          
        
        

        </div>
    


       <div id="listing-nav" className="listing-nav-container">
          <ul className="listing-nav">
            <li><a href="#listing-overview" className="active">Pengunjung Space</a></li>
            
          </ul>
        </div>

        <div id="listing-overview" className="listing-section">

        

          {this.renderVisitor()}

          
        
        

        </div>


       
       <div id="listing-nav" className="listing-nav-container">
          <ul className="listing-nav">
            <li><a href="#listing-overview" className="active">Nearby Space</a></li>
            
          </ul>
        </div>

        <div id="listing-overview" className="listing-section">

        

          {this.renderNearby()}

          
        
        

        </div>




				 






				</div>
					<div className="col-lg-4 col-md-4 margin-top-75 sticky">
	                 
		                 <div className="verified-badge with-tip" data-tip-content="Listing has been verified and belongs the business owner or manager.">
							<i className="sl sl-icon-check"></i> Verified Listing
						</div>
						 <div className="boxed-widget booking-widget">
							
							

			
						<div className="boxed-widget booking-widget ">
		
							<div className="row with-forms  margin-top-0">

								<div className="col-lg-6 col-md-12">
                <DayPickerInput 
                formatDate={formatDate}
                 parseDate={parseDate}
                   format="LL"
                  placeholder="Mulai"
                  dayPickerProps={{
                    locale: 'id',
                    localeUtils: MomentLocaleUtils,
                  }}

                onDayChange={this.handleChange} />
								</div>

								
								<div className="col-lg-6 col-md-12">

                 <DayPickerInput 
                formatDate={formatDate}
                 parseDate={parseDate}
                   format="LL"
                  placeholder="Berakhir"
                  dayPickerProps={{
                    locale: 'id',
                    localeUtils: MomentLocaleUtils
                  }}

                onDayChange={this.handleChangex} />
									
								</div>

								<div className="col-lg-12" style={{height:'50px'}}>
								
                       <select id="select" value={this.state.price}  name="price" className="chosen-select-no-single"  onChange={(e) => this.setState({price: e.target.value})}>
                        
                      <option>Pilih Harga</option>
                      <option value={this.state.price1 }>Rp. {this.state.price1 } / Hari</option>
                      <option value={this.state.price7 }>Rp. {this.state.price7 } / Minggu</option>
                       <option value={this.state.price30 }>Rp. {this.state.price30 } / Bulan</option>
                      
                       </select>
								</div>
								

				</div>

        {this.state.startAt && this.state.endAt && this.state.price &&

				<a onClick={this.onUpdate} className="button book-now fullwidth margin-top-25" style={{color:'#fff'}}>Send Enquiry</a>
      }
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

export default Space;
