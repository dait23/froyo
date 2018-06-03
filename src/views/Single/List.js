import React, {Component} from 'react';

import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Cloudinary_Name, No_Image, No_Thumb} from '../Api/';
import {Image} from 'cloudinary-react'






class List extends Component {

renderImage(){

    if(this.props.space.imageId == ''){

       return(
           <img src={No_Thumb} alt={this.props.space.title}/>

        )

    }else{

      return(
        <Image cloudName={Cloudinary_Name} publicId={this.props.space.imageId} crop="thumb"  width="150"  alt={this.props.space.name}/>

      )
    }

  }


  render() {
    return (

    	

    	   <div className="col-lg-6 col-md-12">
              <a href={`/space/${this.props.space.slug}`} className="listing-item-container">
                <div className="listing-item">
                  {this.renderImage()}

                  <div className="listing-badge now-open">Now Open</div>
                  
                  <div className="listing-item-content">
                    <span className="tag">{this.props.space.wide.size} M </span>
                    <h3>{this.props.space.title} <i className="verified-icon"></i></h3>
                    <span>Rp. {this.props.space.priceFrom}</span>
                  </div>
             
                </div>
                
              </a>
             </div>



      
    )
  }
}

List.propTypes = {
  space: PropTypes.object,
  refresh: PropTypes.func
};

export default List;
