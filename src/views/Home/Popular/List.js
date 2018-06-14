import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Cloudinary_Name, No_Image, No_Thumb} from '../../Api/';
import {Image} from 'cloudinary-react';


class List extends Component {


renderImage(){

    if(this.props.partner.imageId == ''){

       return(
           <img src={No_Thumb} alt={this.props.partner.name}  alt={this.props.partner.name}/>

        )

    }else{

      return(
        <Image cloudName={Cloudinary_Name} publicId={this.props.partner.imageId} crop="thumb"  width="400"  alt={this.props.partner.name}/>

      )
    }

  }



  render() {

    return (

    	

						<div className="col-md-4" >
	                     
	                     <div className="carousel-itemx">
								<a href={`/space/detail/${this.props.partner.slug}`} className="listing-item-container">
									<div className="listing-item">
										{this.renderImage()}
										<div className="listing-item-details">
											<ul>
												<li>{this.props.partner.area.name}</li>
											</ul>
										</div>

										<div className="listing-badge now-open">Available</div>
										
										<div className="listing-item-content">
											<span className="tag">{this.props.partner.category.name}</span>
											<h3>{this.props.partner.name} <i className="verified-icon"></i></h3>
											<span></span>
										</div>
										
									</div>
									
								</a>
							</div>

						</div>


      
    )
  }
}

List.propTypes = {
  partner: PropTypes.object,
  refresh: PropTypes.func,
  mutatePost: PropTypes.func,
};


export default List;
