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


renderImage(){

    if(this.props.pesan.partner.imageId == ''){

       return(
           <img src={No_Image} alt={this.props.pesan.partner.name}/>

        )

    }else{

      return(
        <Image cloudName={Cloudinary_Name} publicId={this.props.pesan.partner.imageId} crop="thumb"  width="150"/>

      )
    }

  }


  render() {


    
   
   
    return (
  

            
               <li className="unread">
                          <Link to={`/me/dashboard/messages/detail/${this.props.pesan.user.id}/${this.props.pesan.partner.id}`}>
                            <div className="message-avatar">{this.renderImage()}</div>

                            <div className="message-by">
                              <div className="message-by-headline">
                                <h5>{this.props.pesan.partner.name}</h5>
                                <span>{moment(this.props.pesan.updatedAt).startOf('day').fromNow()}</span>
                              </div>
                              <p>{this.props.pesan.content}</p>
                            </div>
                          </Link>
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
  pesan: PropTypes.object,
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
