import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import NotFound from'../../../views/404/'
import Sidebar from '../Sidebar/'
import List from './List'


class Dspace extends Component {


renderList(){
 const inList = this.props.data.allPartners || []

  if(this.props.data.allPartners == ''){
   
    return(
 
       <li>
        
          Belum ada Space

       </li>


      )

  }else{

   return(

    <div>
    
     {inList.map((partner) => (
                    <List
                      key={partner.id}
                      partner={partner}
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
                <h2>Space Listings</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/me/dashboard">Dashboard</a></li>
                    <li>Space</li>
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
              <div className="sort-by-select">
                  <a href="/me/dashboard/space/new" className="button">Add New <i className="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>

               
              <h4>Listings</h4>
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

const QueryBrandx = gql`query allPartners($id: ID!) {
 allPartners(filter:{
    user:{
      id: $id
    }
  }, orderBy:updatedAt_DESC){
    
    id
    name
    address
    nearby
    imageId
    imageUrl
    picName
    picPhone
    inclusions{
      id
      name
    }
    exclusions{
      id
      name
    }
     website
    status
    workingHour
    facebook
    instagram
    area{
      id
      name
    }
    visitors{
      id
      name
    }
    facilities{
      id
      name
    }
    category{
      id
      name
    }
    spaces{
      id
      title
    }
    user{
      id
    }

  }

     
}`



const ListPageWithData = graphql(QueryBrandx, {
  options: { variables: { id: Uid } }
})(Dspace)

export default ListPageWithData
