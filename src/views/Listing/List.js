import React, {Component} from 'react';

import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Cloudinary_Name, No_Image, No_Thumb} from '../Api/';
import {Image} from 'cloudinary-react'






class List extends Component {

renderImage(){

    if(this.props.hit.imageId == ''){

       return(
           <img src={No_Thumb} alt={this.props.hit.name}/>

        )

    }else{

      return(
        <Image cloudName={Cloudinary_Name} publicId={this.props.hit.imageId} crop="thumb"  width="400"  alt={this.props.hit.name}/>

      )
    }

  }


  render() {
    return (

    	

    	  <div className="col-lg-6 col-md-12">
					

                   <a href={`/space/detail/${this.props.hit.slug}`} className="listing-item-container compact">
						<div className="listing-item">
							{this.renderImage()}
							<div className="listing-item-details">
                      <ul>
                        <li>{this.props.hit.area.name}</li>
                      </ul>
                    </div>


							<div className="listing-badge now-open">Now Open</div>

							<div className="listing-item-content">
								<div className="numerical-rating" >{this.props.hit.category.name}</div>
								<h3>{this.props.hit.name} <i className="verified-icon"></i></h3>
								<span></span>
							</div>
							
						</div>
					</a>

				 </div>



      
    )
  }
}

List.propTypes = {
  hit: PropTypes.object,
  refresh: PropTypes.func
};

export default List;
