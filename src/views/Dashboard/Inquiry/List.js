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


renderMessage(){

 if(this.props.inquiry.status == '1'){
   
   return(

      <a href="#small-dialog" className="rate-review popup-with-zoom-anim"><i className="sl sl-icon-envelope-open"></i> Send Message</a>

    )

 }

 else{

   return

 }

}



renderStatus(){

  if(this.props.inquiry.status == '0'){
 
   return(
   
    <span className="booking-status" style={{background:'#61b2db'}}>Pending</span>


    )

  }if(this.props.inquiry.status == '2'){
 
   return(
   
    <span className="booking-status" style={{background:'#ee3535'}}>Canceled</span>


    )

  }
  else{

    return(
     <span className="booking-status" style={{background:'#64bc36'}}>Approved</span>
    )

  }

}
  

   renderImage(){

    if(this.props.inquiry.space.imageId == ''){

       return(
           <img src={No_Image} alt={this.props.inquiry.space.title}/>

        )

    }else{

      return(
        <Image cloudName={Cloudinary_Name} publicId={this.props.inquiry.space.imageId} crop="thumb"  width="300"/>

      )
    }

  }


  render() {


    
   
   
    return (
  

            
               <li className="approved-pending">
                            <div className="list-box-listing bookings">
                              <div className="list-box-listing-img" style={{borderRadius:'0', maxWidth:'300px', maxHeight:'100%'}}>
                                {this.renderImage()}

                              </div>
                              <div className="list-box-listing-content">
                                <div className="inner">
                                  <h3>{this.props.inquiry.space.title} {this.renderStatus()}</h3>
                                  <span className="margin-bottom-20">Rp. {this.props.inquiry.price}</span>
                                  <div className="inner-booking-list" style={{fontSize:'14px'}}>
                                   <strong>Masuk &nbsp; &nbsp;: &nbsp;</strong>
                                    <ul className="booking-list">
                                      <li className="highlightedx">&nbsp;{moment(this.props.inquiry.startAt).format('ll')}</li>
                                    </ul>
                                  </div>


                                        
                                  <div className="inner-booking-list" style={{fontSize:'14px'}}>
                                    <strong>Keluar &nbsp; &nbsp;: &nbsp;</strong>
                                    <ul className="booking-list">
                                      <li className="highlightedx">&nbsp;{moment(this.props.inquiry.endAt).format('ll')}</li>
                                    </ul>
                                  </div>   

                                  <div className="inner-booking-list" style={{fontSize:'14px'}}>
                                    <strong>Brand &nbsp; &nbsp; : &nbsp;</strong>
                                    <ul className="booking-list">
                                      <li className="highlightedx">&nbsp;{this.props.inquiry.brand.name}</li>
                                    </ul>
                                  </div>   

                                 {this.renderMessage()}

                                </div>
                              </div>
                            </div>
                            <div className="buttons-to-right">
                              <a href="#" className="button gray reject" style={{display:'none'}}><i className="sl sl-icon-close"></i> Cancel</a>
                            </div>
                          </li>
           

            

    )
  }

  handleDelete = async () => {
    await this.props.mutateBanner({
      variables: {
        id: this.props.post.id,
      }
    })

    window.location.reload();
  }
}

List.propTypes = {
  inquiry: PropTypes.object,
  refresh: PropTypes.func,
  mutatePost: PropTypes.func,
};


const deleteBanner = gql`
  mutation deleteBanner($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const SliderWithMutation = graphql(deleteBanner, {name : 'mutateBanner'})(List)

export default SliderWithMutation
