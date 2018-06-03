import React, {Component} from 'react';
import {withRouter, Link } from 'react-router-dom'
import {Image} from 'cloudinary-react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropzone from 'react-dropzone'
import request from 'superagent';
import { toast, ToastContainer } from 'react-toastify';

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
    }


  }


  componentDidMount() {
    var that = this;
    that.getData();
    that.getCategory();
    // that.getType();
      
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
              uId
              follower
              phone
              address
              email
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


  render() {
    if (this.state.loading) {
      return (<div></div>)
    }
   
    return (


      
  
     <div id="dashboard">

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
                    <h5>Email </h5>
                    <input type="email" placeholder="Email" value={this.state.email}  onChange={(e) => this.setState({email: e.target.value})}/>
                  </div>

                </div>


                
                


                
             <button className="button margin-top-15" onClick={this.handleSave}>Update</button>

              </div>
            </div>
          </div>


          

            
          </div>

          
          

       {/* row content*/}

       </div>

     </div>

    )
  }
}




export default EditBrand;
