import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import {MainApi} from '../../Api/';
import gql from 'graphql-tag'

import Sidebar from '../Sidebar/'
import List from './Dlist'

import Avatar from './dashboard-avatar.jpg'

class DetailMessages extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      loading: true,
    }
  
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
            query allMessages($userId: ID, $partnerId: ID) {
              allMessages(
               filter:{
                  AND:[{
                   user:{
                    id:$userId
                  },
                    partner:{
                      id: $partnerId
                    }
                    
                  }]
                },orderBy:updatedAt_DESC
              ){
                id
                 content
                 createdAt
                updatedAt 
                 partner{
                  id
                  name
                  imageId
                  imageUrl
                }
                user{
                  id
                  name
                  facebookUserId
                  member{
                    imageId
                    imageUrl
                  }
                } 
             
              }
            }
          `
          var queryVars = {
            userId: this.props.match.params.userId,
            partnerId: this.props.match.params.partnerId,
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


           if ( results.data.allMessages == ''){

               window.location= "/404";

           }else{

              that.setState({
                data: results.data.allMessages,
                id:results.data.allMessages.id,
                loading:false
             });

            //console.log(that.state.data);

           }

            
           
           
          })
 

  }

/////////////////

renderList(){
 const inList = this.state.data || []

  if(this.state.data == ''){
   
    return(
 
       <li>
        
          Belum ada Pesan

       </li>


      )

  }else{

   return(

    <div>
    
     {inList.map((pesan) => (
                    <List
                      key={pesan.id}
                      pesan={pesan}
                      
                    />
                  ))}


      </div>


   )

  }


}


////////////////

  render() {
    if (this.state.loading) {
      return (

        <div></div>

        )

    } 

    return (


      
  
     <div id="dashboard">

       <a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder"></i> Dashboard Navigation</a>
       <Sidebar />
       <div className="dashboard-content padding-bottom-50">

          <div id="titlebar">
            <div className="row">
              <div className="col-md-12">
                <h2>Messages</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Messages</li>
                  </ul>
                </nav>
              </div>
            </div>
         </div>


        {/* row content*/}
          
          <div className="row">
      
             <div className="col-lg-12 col-md-12">

                <div className="messages-container margin-top-0">
                   
                   

                  <div className="messages-container-inner">

        
                  <div className="message-content">

                       {this.renderList()}

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
}




export default DetailMessages;
