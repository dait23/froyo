import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {Cloudinary_Name, No_Image} from '../../Api/';
import {Image} from 'cloudinary-react';

import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

class List extends Component {



  

   renderImage(){

    if(this.props.brand.imageId == ''){

       return(
           <img src={No_Image} alt={this.props.brand.name}/>

        )

    }else{

      return(
        <Image cloudName={Cloudinary_Name} publicId={this.props.brand.imageId} crop="thumb"  width="150"/>

      )
    }

  }


  render() {


    
   
   
    return (
  

            
               <li>
                      <div className="list-box-listing">
                        <div className="list-box-listing-img"><a href="#">{this.renderImage()}</a></div>
                        <div className="list-box-listing-content">
                          <div className="inner">
                            <h3><a href="#">{this.props.brand.name}</a></h3>
                            <span>{this.props.brand.category.name}</span>
                            <span>{this.props.brand.address}</span>
                          </div>
                        </div>
                      </div>
                      <div className="buttons-to-right">
                        <a href={`/me/dashboard/brand/edit/${this.props.brand.id}`} className="button gray"><i className="sl sl-icon-note"></i> Edit</a>
                        <a onClick={this.handleDelete} className="button gray"><i className="sl sl-icon-close"></i> Delete</a>
                      </div>
                    </li>
           

            

    )
  }

  handleDelete = async () => {
    await this.props.mutateBrand({
      variables: {
        id: this.props.brand.id,
      }
    })

    window.location.reload();
  }
}

List.propTypes = {
  brand: PropTypes.object,
  refresh: PropTypes.func,
  mutateBrand: PropTypes.func,
};


const deleteBrand = gql`
  mutation deleteBrand($id: ID!) {
    deleteBrand(id: $id) {
      id
    }
  }
`

const SliderWithMutation = graphql(deleteBrand, {name : 'mutateBrand'})(List)

export default SliderWithMutation
