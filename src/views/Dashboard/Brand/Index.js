import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import NotFound from'../../../views/404/'
import Sidebar from '../Sidebar/'
import List from './List'


class Brand extends Component {


renderList(){
 const inList = this.props.data.allBrands || []

  if(this.props.data.allBrands == ''){
   
    return(
 
       <li>
        
          Belum ada Brands / Idea

       </li>


      )

  }else{

   return(

    <div>
    
     {inList.map((brand) => (
                    <List
                      key={brand.id}
                      brand={brand}
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
                <h2>Brand / Idea Listings</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Brands</li>
                  </ul>
                </nav>
              </div>
            </div>
         </div>


        {/* row content*/}


          <div className="row">

          <div className="col-lg-12 col-md-12">
             <div className="dashboard-list-box margin-top-0">

             <div class="sort-by">
              <div class="sort-by-select">
                  <a href="/me/dashboard/brand/new" class="button">Add New <i class="fa fa-arrow-circle-right"></i></a>
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

const QueryBrand = gql`query allBrands($id: ID!) {
  allBrands(filter:{
    user:{
      id: $id
    }
  }, orderBy:updatedAt_DESC){
    
    id
    name
    phone
    createdAt
    updatedAt
    category{
      id
      name
    }
    email
    address
    company
    picName
    picPhone
    ownerName
    ownerPhone
    segments{
      id
      name
    }
    imageId
    imageUrl
    user{
      id
    }

  }

     
}`



const ListPageWithData = graphql(QueryBrand, {
  options: { variables: { id: Uid } }
})(Brand)

export default ListPageWithData
