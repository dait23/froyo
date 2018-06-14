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

renderStatus(){

  if(this.props.partner.status == '2'){
 
   return(
   
    <span className="booking-status" style={{background:'#61b2db', color:'#fff', padding:'2px 5px', fontSize:'12px'}}>Pending</span>


    )

  }if(this.props.partner.status == '3'){
 
   return(
   
    <span className="booking-status" style={{background:'#ee3535',color:'#fff', padding:'2px 5px', fontSize:'12px'}}>Expired</span>


    )

  }
  else{

    return(
     <span className="booking-status" style={{background:'#64bc36', color:'#fff', padding:'2px 5px', fontSize:'12px'}}>Publish</span>
    )

  }

}

  

   renderImage(){

    if(this.props.partner.imageId == ''){

       return(
           <img src={No_Image} alt={this.props.partner.name}/>

        )

    }else{

      return(
        <Image cloudName={Cloudinary_Name} publicId={this.props.partner.imageId} crop="thumb"  width="150"/>

      )
    }

  }


  render() {


    
   
   
    return (
  

            
               <li>
                      <div className="list-box-listing">
                        <div className="list-box-listing-img">{this.renderImage()} </div>
                        <div className="list-box-listing-content">
                          <div className="inner">
                            <h3>{this.props.partner.name} {this.renderStatus()}</h3>
                            <span>{this.props.partner.category.name}</span>
               
                            <p>{this.props.partner.area.name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="buttons-to-right">
                        <a href={`/me/dashboard/space/edit/${this.props.partner.id}`} className="button gray"><i className="sl sl-icon-note"></i> Edit</a>
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
  partner: PropTypes.object,
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
