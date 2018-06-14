import React, {Component} from 'react';

import { Link, withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import NotFound from'../404/'
import List from './List'


class Cart extends Component {

 renderList(){
 const inList = this.props.data.allCarts || []

  if(this.props.data.allCarts == ''){
   
    return(
 
       <div className="col-lg-12 col-md-12">
           <div className="listing-item-container list-layout">
        
         <p style={{padding:'20px'}}> Belum ada listing</p>

          </div>

       </div>


      )

  }else{

   return(

    <div>
    
     {inList.map((cart) => (
                    <List
                      key={cart.id}
                      cart={cart}
                      refresh={() => this.props.data.refetch()}
                    />
                  ))}


      </div>


   )

  }


}



  render() {
  	if (this.props.data.loading) {
      return (

          <div>Loading...</div>
        )

    }

    return (
           <div>
	            <div id="titlebar">
					<div className="container">
						<div className="row">
							<div className="col-md-12">

								<h2>Space List</h2>

			
								<nav id="breadcrumbs">
									<ul>
										<li><a href="/">Home</a></li>
										<li>Space List</li>
									</ul>
								</nav>

							</div>
						</div>
					</div>
				</div>


				<div className="container">
		           

		              {this.renderList()}

		          
		           
			<a href="/listing" className="button booking-confirmation-btn margin-top-40 margin-bottom-65">Tambah Space</a>
		         </div>



	      </div>
    

    )
  }
}

const Uid = window.localStorage.getItem('uid');

const QueryCart = gql`query allCarts($id: ID!) {
  allCarts(filter:{
    AND:[{
      user:{
        id: $id
      }
    },{
      isSend:false
    }]
  }, orderBy:updatedAt_DESC){
    id
    startAt
    endAt
    isSend
    price
    space{
      id
      slug
      title
      imageId
      imageUrl
      wide{
        size
      }
      partner{
        id
        category{
          name
        }
      }
    }
    
    user{
      id
      name
    }
  }

     
}`

const ListPageWithData = graphql(QueryCart, {
  options: { variables: { id: Uid } }
})(Cart)

export default ListPageWithData
