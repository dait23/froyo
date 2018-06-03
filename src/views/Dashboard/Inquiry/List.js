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

    if(this.props.inquiry.partner.imageId == ''){

       return(
           <img src={No_Image} alt={this.props.inquiry.partner.name}/>

        )

    }else{

      return(
        <Image cloudName={Cloudinary_Name} publicId={this.props.inquiry.partner.imageId} crop="thumb"  width="150"/>

      )
    }

  }


  render() {


    
   
   
    return (
  

            
               <li className="approved-pending">
                            <div className="list-box-listing bookings">
                              <div className="list-box-listing-img" style={{borderRadius:'0'}}>
                                {this.renderImage()}

                              </div>
                              <div className="list-box-listing-content">
                                <div className="inner">
                                  <h3>{this.props.inquiry.partner.name} {this.renderStatus()}</h3>

                                  <div className="inner-booking-list">
                                    <h5>Mulai Tanggal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;: &nbsp;</h5>
                                    <ul className="booking-list">
                                      <li className="highlighted">&nbsp;{moment(this.props.inquiry.startAt).format('ll')}</li>
                                    </ul>
                                  </div>
                                        
                                  <div className="inner-booking-list">
                                    <h5>Berakhir Tanggal &nbsp; &nbsp;: &nbsp;</h5>
                                    <ul className="booking-list">
                                      <li className="highlighted">&nbsp;{moment(this.props.inquiry.endAt).format('ll')}</li>
                                    </ul>
                                  </div>   

                                  <div className="inner-booking-list">
                                    <h5>Brand / Idea &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp;</h5>
                                    <ul className="booking-list">
                                      <li className="highlighted">&nbsp;{this.props.inquiry.brand.name}</li>
                                    </ul>
                                  </div>   

                                 {this.renderMessage()}

                                </div>
                              </div>
                            </div>
                            <div className="buttons-to-right">
                              <a href="#" className="button gray reject"><i className="sl sl-icon-close"></i> Cancel</a>
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
