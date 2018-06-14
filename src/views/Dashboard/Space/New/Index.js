import React, {Component} from 'react';
import {withRouter, Link } from 'react-router-dom'
import {Image} from 'cloudinary-react';
import slugify from 'slugify';
import PropTypes from 'prop-types';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropzone from 'react-dropzone'
import request from 'superagent';
import { toast, ToastContainer } from 'react-toastify';
import Select from 'react-select';
import { graphql, compose } from 'react-apollo'
import { Multiselect } from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css';
import {Cloudinary_Name, MainApi, Cloudinary_Code, Cloudinary_Link} from '../../../Api/';

import gql from 'graphql-tag'

import NotFound from'../../../404/'

import Sidebar from '../../Sidebar/'


const CLOUDINARY_UPLOAD_PRESET = Cloudinary_Code;
const CLOUDINARY_UPLOAD_URL = Cloudinary_Link;

class NewSpace extends Component {
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
      dataz:[],
      dataSeg:[],
      dataFac:[],
      dataInc:[],
      dataEx:[],
      dataEv:[],
      dataCol:[]
    }
   
     this.handleChangeSec = this.handleChangeSec.bind(this)
     this.handleSelectChange = this.handleSelectChange.bind(this)
     this.handleChangeInc = this.handleChangeInc.bind(this)
     this.handleChangeExc = this.handleChangeExc.bind(this)
     this.handleSelectChangeEvent = this.handleSelectChangeEvent.bind(this)
     this.handleSelectChangeCollab = this.handleSelectChangeCollab.bind(this)

  }
   ///////////////////////
      
      handleChangeSec (value) {

      const map1 = value.map(x => x.id);

      this.setState({ segmentsIds: map1 });


       console.log('Segment:', map1);
    }
    //////
   
     handleSelectChange (value) {

    const map1 = value.map(x => x.id);
    this.setState({ facilitiesIds: map1 });


     console.log('You\'ve selectedxx:', map1);
  }

   handleChangeInc (value) {

      const map1 = value.map(x => x.id);

      this.setState({ inclusionsIds: map1 });


       console.log('Inclusions:', map1);
    }

     handleChangeExc (value) {

      const map1 = value.map(x => x.id);

      this.setState({ exclusionsIds: map1 });


       console.log('exclusions:', map1);
    }


    handleSelectChangeEvent (value) {

    const map1 = value.map(x => x.id);

    this.setState({ typesIds: map1 });


     console.log('You\'ve selected type:', map1);
  }
  

  handleSelectChangeCollab (value) {

    const map1 = value.map(x => x.id);

    this.setState({ collabsIds: map1 });


     console.log('You\'ve selected collab:', map1);
  }


   //////////////////

  componentDidMount() {
    var that = this;
    // that.getData();
    that.getCategory();
    that.getArea();
    that.getSegment();
    that.getFacility();
    that.getInc();
    that.getEx();
    that.getEvent();
    that.getCollabs();
      
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
   
    getArea(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allAreas{
              allAreas {
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
              dataz : results.data.allAreas,
              loading: false

             });
            //...
           // console.log(that.state.dataz);
          })
  }

///////////////////////
 getSegment(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allSegments{
              allSegments {
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
              dataSeg : results.data.allSegments,
              loading: false

             });
            //...
           // console.log(that.state.dataz);
          })
  }
  ///////////////////////

   getFacility(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allFacilities{
              allFacilities {
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
              dataFac : results.data.allFacilities,
              loading: false

             });
            //...
           // console.log(that.state.dataz);
          })
  }

  ///////
   getInc(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allInclusions{
              allInclusions {
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
              dataInc : results.data.allInclusions,
              loading: false

             });
            //...
           // console.log(that.state.dataz);
          })
  }

  //////////////
    ///////
   getEx(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allExclusions{
              allExclusions {
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
              dataEx : results.data.allExclusions,
              loading: false

             });
            //...
           // console.log(that.state.dataz);
          })
  }

  /////////////
 getEvent(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allEventTypes{
              allEventTypes {
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
              dataEv : results.data.allEventTypes,
              loading: false

             });
            //...
           // console.log(that.state.dataz);
          })
  }

  ////////////////////


  getCollabs(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allCollabs{
              allCollabs {
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
              dataCol : results.data.allCollabs,
              loading: false

             });
            //...
           // console.log(that.state.dataz);
          })
  }


  /////////

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

renderArea(){

  if (this.state.loading) {
      return (<div></div>)
    }


      return(
      
        <select id="select" value={this.state.areaId}  name="areaId" className="form-control" onChange={(e) => this.setState({areaId: e.target.value})}>
                        
               <option>Pilih Lokasi anda</option>
            {this.state.dataz.map((area) => (

                        <option key={area.id} value={area.id}>{area.name}</option>
                       ))}   
        </select>
      )
    
 }
 //////////////

 renderSegment(){
  
   if(this.state.loading){
    
     return(<div></div>)
   }else{

      return(

            
             <Multiselect
                       onChange={this.handleChangeSec}
                        data={this.state.dataSeg.map((segment) => (
                           
                           {id: segment.id, name: segment.name}

                         
                          ))}
                        valueField='id'
                        textField='name'
                        placeholder="Select Segment Market"
                        defaultValue={[]}
                      />


        )
   }


 }

 /////////////

 renderFacility(){

  if(this.state.loading){

    return(<div></div>)

  }else{

    return(
    
         <Multiselect
                       onChange={this.handleSelectChange}
                        data={this.state.dataFac.map((facility) => (
                           
                           {id: facility.id, name: facility.name}

                         
                          ))}
                        valueField='id'
                        textField='name'
                        placeholder="Select Facility Space anda"
                        defaultValue={[]}
                      />

    )

  }
 }

 ///////////

 renderInc(){

  
  if(this.state.loading){
     
     return(<div></div>)
  }else{
    
     return(
             
             <Multiselect
                       onChange={this.handleChangeInc}
                        data={this.state.dataInc.map((inclusionx) => (
                           
                           {id: inclusionx.id, name: inclusionx.name}

                         
                          ))}
                        valueField='id'
                        textField='name'
                        placeholder="Pilih yang boleh dari space anda"
                        defaultValue={[]}
                      />
 
      )
  }



 }

 ////////////

 renderEx(){

  if(this.state.loading){
     
     return(<div></div>)

  }else{

    return(

      <Multiselect
                       onChange={this.handleChangeExc}
                        data={this.state.dataEx.map((exclusionx) => (
                           
                           {id: exclusionx.id, name: exclusionx.name}

                         
                          ))}
                        valueField='id'
                        textField='name'
                        placeholder="Pilih yang dilarang dari Space anda"
                        defaultValue={[]}
                      />


    )
  }
 

 }
 ////

renderEvent(){

  if(this.state.loading){
     
     return(<div></div>)
  }else{

   return(

       <Multiselect
                       onChange={this.handleSelectChangeEvent}
                        data={this.state.dataEv.map((eventx) => (
                           
                           {id: eventx.id, name: eventx.name}

                         
                          ))}
                        valueField='id'
                        textField='name'
                        placeholder="Select Tipe Event Space anda"
                        defaultValue={[]}
                      />
    )

  }
}

////////////

renderCollab(){

 if(this.state.loading){

 return(<div></div>)

 }else{

   return(

       <Multiselect
                       onChange={this.handleSelectChangeCollab}
                        data={this.state.dataCol.map((collabx) => (
                           
                           {id: collabx.id, name: collabx.name}

                         
                          ))}
                        valueField='id'
                        textField='name'
                        placeholder="Pilih Tipe Kerjasama dari Space anda"
                        defaultValue={[]}
                      />
                      
   )

 }


}

//////

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
                    <h5>Name Space </h5>
                    <input className="search-field" type="text" value={this.state.name}  onChange={(e) => this.setState({name: e.target.value})}/>
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

                    <div className="row with-forms">

                      <div className="col-md-6">
                        <h5>Kategori Space Anda</h5>
                       {this.renderKategori()}
                      </div>

                      <div className="col-md-6">
                        <h5>Area Lokasi </h5>
                       {this.renderArea()}
                      </div>

                    </div>

                     <div className="form">
                      <h5>Alamat Space Anda</h5>
                      <textarea className="WYSIWYG" name="address" cols="40" rows="3" placeholder="Alamat dari Space anda" id="summary"  value={this.state.address}  onChange={(e) => this.setState({address: e.target.value})}></textarea>
                    </div>

          
                    <div className="form">
                      <h5>Description</h5>
                      <textarea className="WYSIWYG" name="description" cols="40" placeholder="Deskripsi dari Space anda" rows="3" id="summary"  value={this.state.description}  onChange={(e) => this.setState({description: e.target.value})}></textarea>
                    </div>
                    <div className="row">

                      <div className="col-md-6">
                        <h5>Segment dari Space Anda</h5>
                       {this.renderSegment()}
                      </div>

                      <div className="col-md-6">
                        <h5>Fasilitas dari Space Anda</h5>
                       {this.renderFacility()}
                      </div>


                    </div>


                     <div className="row margin-top-20">
                      <div className="col-md-6">
                        <h5>Produk yang anjurkan dari Space Anda</h5>
                       {this.renderInc()}
                      </div>

                      <div className="col-md-6">
                        <h5>Produk yang dilarang dari Space Anda</h5>
                       {this.renderEx()}
                      </div>


                    </div>


                     <div className="row margin-top-20">
                      <div className="col-md-6">
                        <h5>Tipe Event dari Space Anda</h5>
                       {this.renderEvent()}
                      </div>

                      <div className="col-md-6">
                        <h5>Pilih Tipe Kerjasama dari Space anda</h5>
                       {this.renderCollab()}
                      </div>


                    </div>
        
                
                 
              




              </div>

              <div className="add-listing-section margin-top-45">

          
                    <div className="add-listing-headline">
                      <h3><i className="sl sl-icon-docs"></i>Social Account</h3>
                    </div>

          

        
                    <div className="row with-forms">

    
                   

                      <div className="col-md-4">
                        <h5>Website <span>(optional)</span></h5>
                        <input type="text" name="website" value={this.state.website}  onChange={(e) => this.setState({website: e.target.value})}/>
                      </div>



                      <div className="col-md-4">
                        <h5 className="fb-input"><i className="fa fa-facebook-square"></i> Facebook <span>(optional)</span></h5>
                        <input type="text" placeholder="https://www.facebook.com/" name="facebook" value={this.state.facebook}  onChange={(e) => this.setState({facebook: e.target.value})}/>
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
       company : this.state.company,
       email: this.state.email,
       phone: this.state.phone, 
       address: this.state.address, 
       website: this.state.website, 
       categoryId: this.state.categoryId, 
       typeId: this.state.typeId, 
       facebook: this.state.facebook, 
       imageId: this.state.imageId,
       imageUrl: this.state.imageUrl,  
       instagram: this.state.instagram, 
       twitter: this.state.twitter, 
       description: this.state.description, 
       userId: localStorage.getItem('uid'),
       picName: this.state.picName, 
       picPhone: this.state.picPhone, 
       ownerName: this.state.ownerName, 
       ownerPhone:this.state.ownerPhone, 

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
     $address: String,  
     $categoryId: ID,
     $areaId: ID,

     $facebook: String, 
     $instagram: String, 
     $website: String, 
     $description: String, 
     $imageId: String,
     $imageUrl: String, 
     $userId: ID,  
     $picName: String,
     $picPhone: String,
     $ownerName: String,
     $ownerPhone: String,

     ) {
    createPartner(
    name: $name, 
    address: $address,
    categoryId :$categoryId,
    typeId: $typeId,
    userId: $userId,
    imageUrl: $imageUrl,
    imageId:$imageId,
    facebook: $facebook,
    instagram: $instagram,
    website: $website,
    description: $description,
    picPhone: $picPhone,
    picName: $picName,
    ownerName: $ownerName,
    ownerPhone: $ownerPhone,

    
    ) {
      id

    }
  
  }
`


export default compose(
  graphql(addMutation, { name: 'addBanner' }),
)(NewSpace)
