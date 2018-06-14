import React, {Component} from 'react';
import {withRouter, Link } from 'react-router-dom'
import {Image} from 'cloudinary-react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropzone from 'react-dropzone'
import request from 'superagent';
import { toast, ToastContainer } from 'react-toastify';
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import NotFound from'../../../views/404/'
import Sidebar from '../Sidebar/'

import {Cloudinary_Name, MainApi, Cloudinary_Code, Cloudinary_Link} from '../../Api/';



const CLOUDINARY_UPLOAD_PRESET = Cloudinary_Code;
const CLOUDINARY_UPLOAD_URL = Cloudinary_Link;

class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = { 
       id:'',
       name:'',
       email:'',
       firstName:'',
       lastName:'',
       userId:localStorage.getItem('uid'),
       memberId:'',
       phone:'',
       bio:'',
       company:'',
       loading: true,
       uploadedFile: null,
    }


  }
 
onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        console.log(response.body);
        this.setState({
           imageUrl: response.body.secure_url,
           imageId: response.body.public_id
        });
      }
    });
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
            query User($id: ID!) {
              User(id: $id){
                id
                name
                email
                facebookUserId
                member{
                  id
                  imageId
                  firstName
                  lastName
                  imageUrl
                  company
                  bio
                  phone
                }
             
              }
            }
          `
          var queryVars = {
            id: localStorage.getItem('uid')
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


           if ( results.data.User == null){

               window.location= "/404";

           }else{

              that.setState({
                data: results.data.User,
                id:results.data.User.id,
                name:results.data.User.name,
                email:results.data.User.email,
                facebookUserId:results.data.User.facebookUserId,
                bio:results.data.User.member.bio,
                memberId:results.data.User.member.id,
                company:results.data.User.member.company,
                firstName:results.data.User.member.firstName,
                lastName:results.data.User.member.lastName,
                phone:results.data.User.member.phone,
                imageUrl:results.data.User.member.imageUrl,
                imageId:results.data.User.member.imageId,
                loading:false
             });

            //console.log(that.state.facebookUserId);

           }

           
           
          })
 

  }
 /////////////////

 renderThumb(){
     const pic = "https://res.cloudinary.com/spazeeid/image/facebook/c_thumb,w_240/" + this.state.facebookUserId + ".jpg"

    if(this.state.imageUrl == '' ){

     return(
        
         <img src={pic} alt={this.state.name}/>
         
      )

    }else{

        return(
       
         <Image cloudName={Cloudinary_Name} publicId={this.state.imageId} width="240" crop="scale"/>

      )

    }


  }




  render() {

        if(window.localStorage.getItem('uid') == null && window.localStorage.getItem('space') == null ){


    return(

               <NotFound />

      )


  }

   
   
    return (


      
  
     <div id="dashboard">
       <ToastContainer autoClose={2000} />

       <a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder"></i> Dashboard Navigation</a>
       <Sidebar />
       <div className="dashboard-content padding-bottom-50">

          <div id="titlebar">
            <div className="row">
              <div className="col-md-12">
                <h2>Profile</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/me/dashboard">Dashboard</a></li>
                    <li>Profile</li>
                  </ul>
                </nav>
              </div>
            </div>
         </div>


        {/* row content*/}


          <div className="row">

              <div className="col-lg-6 col-md-12">
                  <div className="dashboard-list-box margin-top-0">


                    <h4 className="gray">Profile Details</h4>
                      <div className="dashboard-list-box-static">

                       <div className="row">
                         
                         <div className="col-md-6">
                            
                        <div className="edit-profile-photo">
                          {this.renderThumb()}
                         
                        </div>

                         </div>
                         <div className="col-md-6">
                        

                         <Dropzone
                            onDrop={this.onImageDrop.bind(this)}
                            multiple={false}
                            accept="image/*">
                            <div>Drop an image or click to select a file to update avatar.</div>
                          </Dropzone>
                          


                         </div>

                       </div>

               

                      

                      

                      <div className="my-profile">

                        <label>FirstName</label>
                        <input value={this.state.firstName} type="text" name="firstName"
                          onChange={(e) => this.setState({firstName: e.target.value})}

                        />

                         <label>LastName</label>
                        <input value={this.state.lastName} type="text" name="lastName"
                          onChange={(e) => this.setState({lastName: e.target.value})}

                        />
                        <label>Email</label>
                         <input value={this.state.email} type="email" name="email"
                           onChange={(e) => this.setState({email: e.target.value})}
                        />

                        <label>Phone</label>
                        <input value={this.state.phone} type="text" name="phone"
                           onChange={(e) => this.setState({phone: e.target.value})}
                        />

                        


                    
                        
                      </div>
                    




                  </div></div>
              </div>
               <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box margin-top-0">
           
            <div className="dashboard-list-box-static">

              <div className="my-profile">
                <label>Company</label>
                        <input value={this.state.company} type="text" name="company"
                           onChange={(e) => this.setState({company: e.target.value})}
                        /> 

              <label>Bio</label>
              <textarea name="bio" id="notes" cols="30" value={this.state.bio} rows="10" onChange={(e) => this.setState({bio: e.target.value})}></textarea>

                <button className="button margin-top-15" onClick={this.handleSave}>Save Profile</button>
              </div>

            </div>
          </div>
        </div>

         
            
          </div>

         

          
          

       {/* row content*/}

       </div>

     </div>

    )
  }

  handleSave = async () => {
  
    if (localStorage.getItem('uid') == null) {
      console.warn('only logged in users can create new posts')
      return
    }
     
    const userId = localStorage.getItem('uid');
    const { id, firstName, lastName, email, bio, phone, company, memberId } = this.state
  
    await this.props.saveUserMutation({variables: { id, firstName, lastName, email, bio, phone, company, memberId }})
     toast('Update profile Success', { type: toast.TYPE.SUCCESS, autoClose: 2000 }, setTimeout("location.href = '/me/dashboard/profile';",2000))
  }
}


const SAVE_USER_MUTATION = gql`
  mutation saveUserMutation (
      $id: ID!, 
      $firstName: String, 
      $lastName: String, 
      $email: String, 
      $memberId: ID!, 
      $imageId: String, 
      $imageUrl: String, 
      $phone: String,
      $company: String,
      $bio: String
  ) {
     updateUser(id: $id, name: $firstName, email: $email){
                id
              }
              updateMember( id: $memberId, imageId: $imageId, imageUrl: $imageUrl, firstName: $firstName, lastName: $lastName, phone: $phone, bio: $bio, company: $company){
                id
              }
  }
`



export default compose(

  graphql(SAVE_USER_MUTATION, { name: 'saveUserMutation' })
)(withRouter(Profile))
