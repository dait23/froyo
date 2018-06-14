import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {Cloudinary_Name, No_Image, No_Avatar} from '../../Api/';
import {Image} from 'cloudinary-react';

import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

class List extends Component {




  render() {

 const pic = "https://res.cloudinary.com/nomadic-id/image/facebook/c_scale,r_100,w_100,h_100/"+ this.props.pesan.user.facebookUserId + ".jpg" ;
   
    return (
  

            
              <div>
               
                    <div className="message-bubble">
                      <div className="message-avatar"><img src={pic} alt={this.props.pesan.user.name}/></div>
                      <div className="message-text"><p>{this.props.pesan.content}</p></div>
                    </div>

              </div>
           

            

    )
  }

 
}

List.propTypes = {
  pesan: PropTypes.object,
};






export default List
