import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {Cloudinary_Name, No_Image, MainApi} from '../Api/';
import {Image} from 'cloudinary-react';
import Select from 'react-select';
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

class List extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      id: this.props.cart.id,
      startAt: this.props.cart.startAt,
      endAt: this.props.cart.endAt,
      price: this.props.cart.price,
      spaceId:this.props.cart.space.id,
      title: this.props.cart.space.title + ' ' + localStorage.getItem('uid'),
      userId:localStorage.getItem('uid'),
      isSend: true,
      loading:true,
      selectedOption: '',
      datax:[]
    }
    this.handleChangex = this.handleChangex.bind(this)
      this.onUpdatePress = this.onUpdatePress.bind(this);
  }
  /////////
   
     handleChangex = (selectedOption) => {
        this.setState({ brandId : selectedOption.value});
        console.log(`brand: ${selectedOption.value}`);
      }


  ////////
   componentDidMount() {
    var that = this;
    that.getBrand();
  }
  /////////
  getBrand(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allBrands($id: ID){
              allBrands (filter:{
                user:{
                  id: $id
                }
              },orderBy: createdAt_DESC) {
                id
                name

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
            if (results.errors) {
              //...
              return
            }
            //var BlogCategory = results.data.BlogCategory

            that.setState({
              datax : results.data.allBrands,
              loading: false

             });
            //...
           console.log(that.state.datax);
          })
  }
  /////
   onUpdatePress() {

     var that = this;
     var fetch = require('graphql-fetch')(MainApi)

          var query = `
            mutation createInquiry (

              $endAt: String
              $startAt: String
              $title: String
              $price: String
              $brandId: ID
              $spaceId: ID
              $userId: ID

     
            ){
              createInquiry (
              endAt: $endAt,
              startAt: $startAt,
              title: $title,
              price: $price,
              brandId: $brandId,
              spaceId: $spaceId,
              userId: $userId
      
              ){
                id           
              }
              
            }
          `
          var queryVars = {
            startAt: this.state.startAt,
            endAt: this.state.endAt,
            title: this.state.title,
            brandId: this.state.brandId,
            spaceId: this.state.spaceId,
            userId: this.state.userId,
            price: this.state.price

         
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

            // toast('Confirm  Success', { type: toast.TYPE.SUCCESS, autoClose: 2000 }, setTimeout("location.href = '/space-list';",2000))

            that.getUpdate();
            //...
          })


  } 
  ///////////////
   getUpdate() {

     var that = this;
     var fetch = require('graphql-fetch')(MainApi)

          var query = `
            mutation updateCart (
              $id: ID!,
              $isSend: Boolean
            ){
              updateCart (
              id: $id,
               isSend: $isSend
              ){
                id           
              }
            }
          `
          var queryVars = {
            id: this.state.id,
            isSend: this.state.isSend
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

            toast('Confirm  Success', { type: toast.TYPE.SUCCESS, autoClose: 2000 }, setTimeout("location.href = '/space-list';",2000))
            //...
          })


  } 

  ///////////////
  renderBrand(){
const { selectedOption } = this.state;
  if (this.state.loading) {
      return (<div></div>)
    }
     const inList = this.state.datax || []

      return(
      
         <select id="select" value={this.state.brandId}  name="brandId" className="chosen-select-no-single"  onChange={(e) => this.setState({brandId: e.target.value})}>
                        
            <option>Pilih Brand / Idea anda</option>
            {inList.map((brand) => (
                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                       ))}   
        </select>
      )
    
 }

  ////
  

   renderImage(){

    if(this.props.cart.space.imageId == ''){

       return(
           <img src={No_Image} alt={this.props.cart.space.title}/>

        )

    }else{

      return(
        <Image cloudName={Cloudinary_Name} publicId={this.props.cart.space.imageId} crop="thumb"  width="400"/>

      )
    }

  }


  render() {


    
   
   
    return (
  

            <div className="row padding-bottom-50">
             <ToastContainer autoClose={2000} />
              <div className="col-lg-12 col-md-12">
              <div className="listing-item-container list-layout">
                <div className="listing-item" style={{overflow:'inherit'}}>
                
                  <div className="listing-item-image">
                    {this.renderImage()}
                    <span className="tag">{this.props.cart.space.partner.category.name}</span>
                  </div>
                  

                  <div className="listing-item-content">
                    

                    <div className="listing-item-inner">
                      <h3>{this.props.cart.space.title}</h3>
                      <span>{moment(this.props.cart.startAt).format('ll')} - {moment(this.props.cart.endAt).format('ll')}</span>
                      <p>Rp. {this.props.cart.price}</p>
                      <div className="star-rating margin-top-10" style={{width:'300px'}}>
                        {this.renderBrand()}
                      </div>
                     {this.state.brandId &&
                      <a  onClick={this.onUpdatePress} className="button margin-top-20 " style={{color:'#fff'}}>Confirm</a>
                    }
                    </div>

                    <span className="del-icon"><span className="im im-icon-Close" onClick={this.handleDelete} style={{fontSize:'22px', padding:'5px 10px', color:'#000'}}></span></span>
                  </div>
                </div>
              </div>
            </div> </div>
            

    )
  }

  handleDelete = async () => {
    await this.props.mutateBanner({
      variables: {
        id: this.props.cart.id,
      }
    })

    window.location.reload();
  }
}

List.propTypes = {
  cart: PropTypes.object,
  refresh: PropTypes.func,
  mutatePost: PropTypes.func,
};


const deleteBanner = gql`
  mutation deleteCart($id: ID!) {
    deleteCart(id: $id) {
      id
    }
  }
`

const SliderWithMutation = graphql(deleteBanner, {name : 'mutateBanner'})(List)

export default SliderWithMutation
