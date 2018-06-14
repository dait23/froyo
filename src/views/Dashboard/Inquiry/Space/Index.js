import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import NotFound from'../../../404/'
import Sidebar from '../../Sidebar/'
import List from './List'

class Inquiryx extends Component {


renderList(){
 const inList = this.props.data.allInquiries || []

  if(this.props.data.allInquiries == ''){
   
    return(
 
       <li>
        
          Belum ada inquiry

       </li>


      )

  }else{

   return(

    <div>
    
     {inList.map((inquiry) => (
                    <List
                      key={inquiry.id}
                      inquiry={inquiry}
                      refresh={() => this.props.data.refetch()}
                    />
                  ))}


      </div>


   )

  }


}






  render() {
   
        if(window.localStorage.getItem('uid') == null && window.localStorage.getItem('space') == null ){


    return(

               <NotFound />

      )


  }

   if (this.props.data.loading) {
      return (

          <div>Loading...</div>
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
                <h2>Inquiry</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Inquiry</li>
                  </ul>
                </nav>
              </div>
            </div>
         </div>


        {/* row content*/}


          <div className="row">
      
            <div className="col-lg-12 col-md-12">
               <div className="dashboard-list-box margin-top-0">

                  <div className="sort-by">
                    
                  </div>

                  <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                    <div className="small-dialog-header">
                      <h3>Send Message</h3>
                    </div>
                    <div className="message-reply margin-top-0">
                      <textarea cols="40" rows="3" placeholder="Your Message to Kathy"></textarea>
                      <button className="button">Send</button>
                    </div>
                  </div>

                  <h4>Inquiry List</h4>
                     <ul>
                        
                      {this.renderList()}

                       
                    </ul>




               </div>
            </div>
          </div>

          
          

       {/* row content*/}

       </div>

     </div>

    )
  }
}


const Uid = window.localStorage.getItem('uid');

const QueryDraft = gql`query allPostsDraft($id: ID!) {
  allInquiries(filter:{
    partner:{
      user:{
        id: $id
      }
    }
  }, orderBy:updatedAt_DESC){
    id
    startAt
    endAt
    title
    status
    isApprove
    partner{
      id
      name
      imageUrl
      imageId
    }
    brand{
      id
      name
    }
    user{
      id
      name
    }
  }

     
}`



const ListPageWithData = graphql(QueryDraft, {
  options: { variables: { id: Uid } }
})(Inquiryx)

export default ListPageWithData
