import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import NotFound from'../../../views/404/'
import Sidebar from '../Sidebar/'
import List from './List'

class Messages extends Component {



   




renderList(){
 const inList = this.props.data.allMessages || []

  if(this.props.data.allMessages == ''){
   
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
                   
                   <div className="messages-headline">
                    <h4>Inbox</h4>
                  </div>

                  <div className="messages-inbox">

                     <ul>
                
                        {this.renderList()}


                     </ul>

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




const Uid = window.localStorage.getItem('uid');

const QueryMesage = gql`query allMessages($id: ID!) {
  allMessages(filter:{
    user:{
      id: $id
    }
  }, orderBy:updatedAt_DESC){
 
   id
    content
    createdAt
    updatedAt
    user{
      id
      name
      facebookUserId
      member{
        id
        imageId
        imageUrl
      }
    }
    partner{
      id
      name
      imageUrl
      imageId
      user{
        id
        name
      }
    }
    
  }

     
}`



const ListPageWithData = graphql(QueryMesage, {
  options: { variables: { id: Uid } }
})(Messages)

export default ListPageWithData
