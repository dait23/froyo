import React, {Component} from 'react';
import {withRouter, Link } from 'react-router-dom'
import {Image} from 'cloudinary-react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropzone from 'react-dropzone'
import request from 'superagent';
import { toast, ToastContainer } from 'react-toastify';
import Select from 'react-select';
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import NotFound from'../../../404/'

import Sidebar from '../../Sidebar/'

import {Cloudinary_Name, MainApi, Cloudinary_Code, Cloudinary_Link} from '../../../Api/';


//import 'react-select-plus/dist/react-select-plus.css';


const CLOUDINARY_UPLOAD_PRESET = Cloudinary_Code;
const CLOUDINARY_UPLOAD_URL = Cloudinary_Link;


class EditBrand extends Component {

 constructor(props) {
    super(props)
    this.state = { 
      id: '',
      address: '',
      uId:'',
      name: '',
      company:'',
      phone: '',
      source: '',
      follower: '',
      picName:'',
      picPhone:'',
      ownerName:'',
      ownerPhone:'',
      email: '',
      categoryId: '',
      categoryName: '',
      userId: localStorage.getItem('uid'),
      typeId: '',
      typeName: '',
      remarks: '',
      facebook: '',
      instagram: '',
      twitter: '',
      status:'',
      website: '',
      imageUrl:'',
      imageId:'',
      link:'',
      uploadedFile: null,
      loading: true,
       datax:[],
       dataz:[]
    }


     this.onUpdatePress = this.onUpdatePress.bind(this);


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


  componentDidMount() {
    var that = this;
    that.getData();
    that.getCategory();
    that.getType();
      
  }

   getData(){
     var that = this;
     that.setState({
          loading: true
      });
     var fetch = require('graphql-fetch')(MainApi)

          var query = `
            query Brand($id: ID!) {
              Brand(id: $id){
              id
              name
              company
              picName
              picPhone
              ownerPhone
              ownerName
              description
              uId
              follower
              phone
              address
              email
              imageUrl
              imageId
              status
              source
              facebook
              instagram
              twitter
              website
              remarks
              user{
                id
              }
              type{
                id
                name
              }
              category{
                id
                name
              }
                      }
            }
          `
          var queryVars = {
            id: this.props.match.params.id
          }
          var opts = {
            // custom fetch options
          }


          fetch(query, queryVars, opts).then(function (results) {
            if (results.errors) {
              //...
              return
            }
            //var BlogCategory = results.data.BlogCategory

            that.setState({
              data : results.data.Brand,
              id:results.data.Brand.id,
              uId:results.data.Brand.uId,
              name:results.data.Brand.name,
              company:results.data.Brand.company,
              email:results.data.Brand.email,
              source:results.data.Brand.source,
              follower:results.data.Brand.follower,
              imageUrl:results.data.Brand.imageUrl,
              imageId:results.data.Brand.imageId,
              description:results.data.Brand.description,
              picName:results.data.Brand.picName,
              picPhone:results.data.Brand.picPhone,
              ownerName:results.data.Brand.ownerName,
              ownerPhone:results.data.Brand.ownerPhone,
              phone:results.data.Brand.phone,
              address:results.data.Brand.address,
              remarks:results.data.Brand.remarks,
              website:results.data.Brand.website,
              status:results.data.Brand.status,
              facebook:results.data.Brand.facebook,
              instagram:results.data.Brand.instagram,
              twitter:results.data.Brand.twitter,
              typeId:results.data.Brand.type.id,
              userId:results.data.Brand.user.id,
              typeName:results.data.Brand.type.name,
              categoryId:results.data.Brand.category.id,
              categoryName:results.data.Brand.category.name,
              loading:false
             });
            //...console.log(that.state.dataz);
           
          })
          console.log(this.state.id);

  }

  /////////////////////

  getCategory(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allBrandCategories{
              allBrandCategories (orderBy: createdAt_DESC) {
                id
                name

              }
            }
          `
          var queryVars = {
            
          }
          var opts = {
            // custom fetch options
          }


          fetch(query, queryVars, opts).then(function (results) {
            if (results.errors) {
              //...
              return
            }
            //var BlogCategory = results.data.BlogCategory

            that.setState({
              datax : results.data.allBrandCategories,
              loading: false

             });
            //...
           // console.log(that.state.datax);
          })
  }
  ///////
   
    getType(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allBrandTypes{
              allBrandTypes (orderBy: createdAt_DESC) {
                id
                name

              }
            }
          `
          var queryVars = {
            
          }
          var opts = {
            // custom fetch options
          }


          fetch(query, queryVars, opts).then(function (results) {
            if (results.errors) {
              //...
              return
            }
            //var BlogCategory = results.data.BlogCategory

            that.setState({
              dataz : results.data.allBrandTypes,
              loading: false

             });
            //...
           // console.log(that.state.dataz);
          })
  }


  ///////
 onUpdatePress() {

     var that = this;
     var fetch = require('graphql-fetch')(MainApi)

          var query = `
            mutation updateBrand (
              $id: ID!,
              $name: String,
              $company: String, 
              $email: String, 
              $address: String, 
              $phone: String, 
              $picName: String,
              $picPhone: String, 
              $imageId: String,
              $imageUrl: String,  
              $categoryId: ID, 
              $typeId: ID, 
              $facebook: String, 
              $instagram: String, 
              $website: String,
              $twitter: String,
              $description: String, 
              $ownerName: String,
              $ownerPhone: String,
            ){
              updateBrand (
              id: $id,
              name: $name,
              company:$company, 
              email:$email,
              phone: $phone,
              picName:$picName,
              picPhone:$picPhone,
              imageUrl: $imageUrl,
              imageId:$imageId,
              address: $address,
              categoryId :$categoryId,
              typeId: $typeId,
              facebook: $facebook,
              instagram: $instagram,
              twitter: $twitter,
              website: $website,
              description: $description,
              ownerName: $ownerName,
              ownerPhone: $ownerPhone,
      
              ){
                id           
              }
            }
          `
          var queryVars = {
            id: this.state.id,
            name: this.state.name,
            company: this.state.company,
            picName: this.state.picName,
            picPhone: this.state.picPhone,
            email: this.state.email,
            phone: this.state.phone,
            source: this.state.source,
            imageId: this.state.imageId,
            imageUrl: this.state.imageUrl,
            address: this.state.address,
            description: this.state.description,
            categoryId: this.state.categoryId,
            typeId: this.state.typeId, 
            facebook: this.state.facebook, 
            instagram: this.state.instagram,
            twitter: this.state.twitter,
            website: this.state.website, 
            picName: this.state.picName, 
           picPhone: this.state.picPhone, 
           ownerName: this.state.ownerName, 
           ownerPhone:this.state.ownerPhone, 
          }
          var opts = {
            // custom fetch options
          }


          fetch(query, queryVars, opts).then(function (results) {
            if (results.errors) {
              //...
              return
            }
            //var BlogCategory = results.data.BlogCategory

            toast('Update  Success', { type: toast.TYPE.SUCCESS, autoClose: 2000 }, setTimeout("location.href = '/me/dashboard/brand';",2000))
            //...
          })


  } 
   
  /////

  renderKategori(){

  if (this.state.loading) {
      return (<div></div>)
    }
    

      return(
      
        <select id="select" value={this.state.categoryId}  name="categoryId" className="chosen-select-no-single"  onChange={(e) => this.setState({categoryId: e.target.value})}>
                        

            {this.state.datax.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                       ))}   
        </select>
      )
    
 }

 ////////////

renderTipe(){

  if (this.state.loading) {
      return (<div></div>)
    }


      return(
      
        <select id="select" value={this.state.typeId}  name="typeId" className="form-control" onChange={(e) => this.setState({typeId: e.target.value})}>
                        

            {this.state.dataz.map((tipe) => (
                        <option key={tipe.id} value={tipe.id}>{tipe.name}</option>
                       ))}   
        </select>
      )
    
 }


  render() {
    if (this.state.loading) {
      return (<div></div>)
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
                <h2>Edit</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/me/dashboard">Dashboard</a></li>
                     <li><a href="/me/dashboard/brand">Brand</a></li>
                    <li>Edit</li>
                  </ul>
                </nav>
              </div>
            </div>
         </div>


        {/* row content*/}


          <div className="row">

          <div className="col-lg-12">

            <div id="add-listing">

              <div className="add-listing-section">

                <div className="add-listing-headline">
                  <h3><i className="sl sl-icon-doc"></i> Basic Informations</h3>
                </div>

                <div className="row with-forms">
                  <div className="col-md-12">
                    <h5>Brand / Idea Name </h5>
                    <input className="search-field" type="text" value={this.state.name}  onChange={(e) => this.setState({name: e.target.value})}/>
                  </div>
                </div>

                <div className="row with-forms">

                  <div className="col-md-6">
                    <h5>Category</h5>
                   {this.renderKategori()}
                  </div>

                  <div className="col-md-6">
                    <h5>Type </h5>
                   {this.renderTipe()}
                  </div>

                </div>


                 

                 <div className="row with-forms">

                 <div className="col-md-6">
                    <h5>Company </h5>
                    <input type="text" placeholder="Company" value={this.state.company}  onChange={(e) => this.setState({company: e.target.value})}/>
                  </div>

                   
                 <div className="col-md-6">
                    <h5>Address</h5>
                    <input type="text" placeholder="Address" value={this.state.address}  onChange={(e) => this.setState({address: e.target.value})}/>
                  </div>


                 </div>


                 <div className="row with-forms">

                 <div className="col-md-6">
                    <h5>Owner Name</h5>
                    <input type="text" placeholder="Owner Name" value={this.state.ownerName}  onChange={(e) => this.setState({ownerName: e.target.value})}/>
                  </div>

                   
                 <div className="col-md-6">
                    <h5>Owner Phone</h5>
                    <input type="text" placeholder="Owner Phone" value={this.state.ownerPhone}  onChange={(e) => this.setState({ownerPhone: e.target.value})}/>
                  </div>


                 </div>

                 <div className="row with-forms">

                 <div className="col-md-6">
                    <h5>Pic Name</h5>
                    <input type="text" placeholder="Pic Name" value={this.state.picName}  onChange={(e) => this.setState({picName: e.target.value})}/>
                  </div>

                   
                 <div className="col-md-6">
                    <h5>Pic Phone</h5>
                    <input type="text" placeholder="Pic Phone" value={this.state.picPhone}  onChange={(e) => this.setState({picPhone: e.target.value})}/>
                  </div>


                 </div>


                 </div>

              

                  <div className="add-listing-section margin-top-45">

          
                    <div className="add-listing-headline">
                      <h3><i className="sl sl-icon-docs"></i> Details</h3>
                    </div>

          
                    <div className="form">
                      <h5>Description</h5>
                      <textarea className="WYSIWYG" name="description" cols="40" rows="3" id="summary" spellCheck="true" value={this.state.description}  onChange={(e) => this.setState({description: e.target.value})}>{this.state.description}</textarea>
                    </div>

        
                    <div className="row with-forms">

    
                      <div className="col-md-4">
                        <h5>Phone <span>(optional)</span></h5>
                        <input type="text" name="phone" value={this.state.phone}  onChange={(e) => this.setState({phone: e.target.value})}/> 
                      </div>

                      <div className="col-md-4">
                        <h5>Website <span>(optional)</span></h5>
                        <input type="text" name="website" value={this.state.website}  onChange={(e) => this.setState({website: e.target.value})}/>
                      </div>


                      <div className="col-md-4">
                        <h5>E-mail <span>(optional)</span></h5>
                        <input type="text" name="email" value={this.state.email}  onChange={(e) => this.setState({email: e.target.value})}/>
                      </div>


                      <div className="col-md-4">
                        <h5 className="fb-input"><i className="fa fa-facebook-square"></i> Facebook <span>(optional)</span></h5>
                        <input type="text" placeholder="https://www.facebook.com/" name="facebook" value={this.state.facebook}  onChange={(e) => this.setState({facebook: e.target.value})}/>
                      </div>


                      <div className="col-md-4">
                        <h5 className="twitter-input"><i className="fa fa-twitter"></i> Twitter <span>(optional)</span></h5>
                        <input type="text" placeholder="https://www.twitter.com/" name="twitter" value={this.state.twitter}  onChange={(e) => this.setState({twitter: e.target.value})}/>
                      </div>

                      <div className="col-md-4">
                        <h5 className="gplus-input"><i className="fa fa-instagram"></i> Instagram <span>(optional)</span></h5>
                        <input type="text" placeholder="https://instagram.com/" name="instagram" value={this.state.instagram}  onChange={(e) => this.setState({instagram: e.target.value})}/>
                      </div>

                   
                    
                    </div>
                   
   

                
                


                
            
             
            </div>

             <div className="add-listing-section margin-top-45">


                    <div className="add-listing-headline">
                      <h3><i className="sl sl-icon-picture"></i> Image</h3>
                    </div>

                 
                    <div className="submit-section">
                       <Dropzone
                           className="dropzone"
                            onDrop={this.onImageDrop.bind(this)}
                            multiple={false}
                            accept="image/*">
                            <div>Drop an image or click to select a file to upload.</div>
                          </Dropzone>
                           <br/>
           {this.state.imageUrl == '' ? null :
          
            <Image cloudName={Cloudinary_Name} publicId={this.state.imageId} width="200" crop="scale"/>
          }
                          
                    </div>

                  </div>
          </div>

 <button className="button margin-top-15" onClick={this.onUpdatePress}>Update</button>


            
          </div>

          
          

       {/* row content*/}

       </div>

     </div>

     </div>

    )
  }
}




export default EditBrand;
