import React, {Component} from 'react';
import {withRouter, Link } from 'react-router-dom'
import {Image} from 'cloudinary-react';

import PropTypes from 'prop-types';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropzone from 'react-dropzone'
import request from 'superagent';
import { toast, ToastContainer } from 'react-toastify';
import Select from 'react-select';
import { graphql, compose } from 'react-apollo'

import {Cloudinary_Name, MainApi, Cloudinary_Code, Cloudinary_Link} from '../../../Api/';

import gql from 'graphql-tag'

import NotFound from'../../../404/'

import Sidebar from '../../Sidebar/'


const CLOUDINARY_UPLOAD_PRESET = Cloudinary_Code;
const CLOUDINARY_UPLOAD_URL = Cloudinary_Link;

class NewBrand extends Component {
   static propTypes = {
    router: PropTypes.object,
    addBanner: PropTypes.func,
  }


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
      tipeId: '',
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


  }


  componentDidMount() {
    var that = this;
    // that.getData();
    that.getCategory();
    that.getType();
      
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
            query allEventTypes{
              allEventTypes(orderBy: createdAt_DESC) {
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
              dataz : results.data.allEventTypes,
              loading: false

             });
            //...
           // console.log(that.state.dataz);
          })
  }


  ///////

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
      
        <select id="select" value={this.state.tipeId}  name="tipeId" className="form-control" onChange={(e) => this.setState({tipeId: e.target.value})}>
                        
               <option>Pilih Tipe</option>
            {this.state.dataz.map((tipe) => (

                        <option key={tipe.id} value={tipe.id}>{tipe.name}</option>
                       ))}   
        </select>
      )
    
 }

  render() {
   
   
    return (


      
  
     <div id="dashboard">
<ToastContainer autoClose={2000} />
       <a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder"></i> Dashboard Navigation</a>
       <Sidebar />
       <div className="dashboard-content padding-bottom-50">

          <div id="titlebar">
            <div className="row">
              <div className="col-md-12">
                <h2>Add New</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Add New</li>
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
                    <h5>Kategori dari Brand anda</h5>
                   {this.renderKategori()}
                  </div>

                  <div className="col-md-6">
                    <h5>Event apa yang anda mau lakukan di space ini ?</h5>
                   {this.renderTipe()}
                  </div>

                </div>


                


                 </div>

              

                  <div className="add-listing-section margin-top-45">

          
                    <div className="add-listing-headline">
                      <h3><i className="sl sl-icon-docs"></i> Details</h3>
                    </div>

          
                    <div className="form">
                      <h5>Space ini mau digunakan untuk apa ?</h5>
                      <textarea className="WYSIWYG" name="description" cols="40" rows="3" id="summary"  placeholder="Contoh: Perusahaan kita bergerak dibidang fashion untiuk wanita denagn merek abcd, space ini mau digunakan untuk branding merk kita, sekalian untuk jualan" value={this.state.description}  onChange={(e) => this.setState({description: e.target.value})}></textarea>
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
   

               
       
             <button className="button margin-top-15" onClick={this.handlePost}>Create</button>
            </div>
          </div>


          

            
          </div>

          
          

       {/* row content*/}

       </div>

     </div>

    )
  }

  handlePost = async () => {
   // const {name, email, phone, address, website, categoryId, typeId, facebook, instagram, twitter, remarks, userId, source, follower, company, picName, picPhone, ownerName, ownerPhone, uId} = this.state
    await this.props.addBanner({variables: { 
       name : this.state.name,
       email: this.state.email,
       phone: this.state.phone, 
       address: this.state.address, 
       website: this.state.website, 
       categoryId: this.state.categoryId, 
       tipeId: this.state.tipeId, 
       facebook: this.state.facebook, 
       imageId: this.state.imageId,
       imageUrl: this.state.imageUrl,  
       instagram: this.state.instagram, 
       twitter: this.state.twitter, 
       description: this.state.description, 
       userId: localStorage.getItem('uid'),

      // to: this.state.email,
      // text: "Hai",
      // html: "<html> Hai, Apakah Kamu Brand / Merchant Owner dari <strong>"  + this.state.name+ "</strong> <br /> Apakah bisa minta kontaknya! Thanks </html>"

}})

   toast('Create  Success', { type: toast.TYPE.SUCCESS, autoClose: 2000 }, setTimeout("location.href = '/me/dashboard/brand';",2000))
   //window.location.reload(true);
  }
}


const addMutation = gql`
  mutation addBanner(
     $name: String, 
     $email: String, 
     $address: String, 
     $phone: String, 
     $categoryId: ID,
     $tipeId: ID, 
     $facebook: String, 
     $instagram: String, 
     $website: String, 
     $twitter: String, 
     $description: String, 
     $imageId: String,
     $imageUrl: String, 
     $userId: ID,  

     ) {
    createBrand(
    name: $name, 
    email:$email,
    phone: $phone, 
    address: $address,
    categoryId :$categoryId,
    tipeId: $tipeId,
    userId: $userId,
    imageUrl: $imageUrl,
    imageId:$imageId,
    facebook: $facebook,
    instagram: $instagram,
    twitter: $twitter,
    website: $website,
    description: $description,

    
    ) {
      id

    }
  
  }
`


export default compose(
  graphql(addMutation, { name: 'addBanner' }),
)(NewBrand)
