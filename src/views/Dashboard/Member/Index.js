import React, {Component} from 'react';

import Sidebar from '../Sidebar/'
import NotFound from'../../../views/404/'
import {MainApi, Cloudinary_Name} from '../../Api/';




var myDate = new Date();


class DashboardMember extends Component {

   constructor(props) {
    super(props)
    this.state = { 
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
            query User($id: ID!) {
              User(id: $id){
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

            //console.log(results)
            if (results.errors) {
             // console.log('cccc')
              //...
             // window.location= "/";
            }
            //var BlogCategory = results.data.BlogCategory


           if ( results.data.User == null){

               window.location= "/404";

           }else{

              that.setState({
                data: results.data.User,
                id:results.data.User.id,
                name:results.data.User.name,
                loading:false
             });

            //console.log(that.state.facebookUserId);

           }

           
           
          })
 

  }
  //////////////

  renderGreting(){

    if ( myDate.getHours() < 12 ) 
    {
        return(


                <h2>Selamat Pagi, {this.state.name}</h2>
         

          );
    }
    if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
    {
        return(

     

                <h2>Selamat sore, {this.state.name}</h2>
      
          );
    }else{

    
        return(

  

                <h2>Selamat Malam, {this.state.name}</h2> 
       

          );


    }


  }

///////////

  render() {

      if(window.localStorage.getItem('uid') == null && window.localStorage.getItem('space') == null ){


    return(

               <NotFound />

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
                    {this.renderGreting()}

                    <nav id="breadcrumbs">
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li>Dashboard</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

             
             

            {/* content*/}
            <div className="row">

             
            {/* Item*/}
              <div className="col-lg-3 col-md-6">
                <div className="dashboard-stat color-1">
                  <div className="dashboard-stat-content"><h4>6</h4> <span>Active Listings</span></div>
                  <div className="dashboard-stat-icon"><i className="im im-icon-Map2"></i></div>
                </div>
              </div>

             {/* Item*/}
              <div className="col-lg-3 col-md-6">
                <div className="dashboard-stat color-2">
                  <div className="dashboard-stat-content"><h4>726</h4> <span>Total Views</span></div>
                  <div className="dashboard-stat-icon"><i className="im im-icon-Line-Chart"></i></div>
                </div>
              </div>

              
               {/* Item*/}
              <div className="col-lg-3 col-md-6">
                <div className="dashboard-stat color-3">
                  <div className="dashboard-stat-content"><h4>95</h4> <span>Total Reviews</span></div>
                  <div className="dashboard-stat-icon"><i className="im im-icon-Add-UserStar"></i></div>
                </div>
              </div>

              {/* Item*/}
              <div className="col-lg-3 col-md-6">
                <div className="dashboard-stat color-4">
                  <div className="dashboard-stat-content"><h4>126</h4> <span>Times Bookmarked</span></div>
                  <div className="dashboard-stat-icon"><i className="im im-icon-Heart"></i></div>
                </div>
              </div>
            </div>
        
        <div className="row">
      
     
        <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box with-icons margin-top-20">
            <h4>Recent Activities</h4>
            <ul>
              
            </ul>
          </div>
        </div>

         

         <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box invoices with-icons margin-top-20">
            <h4>Invoices</h4>
            <ul>
              
             

            </ul>
          </div>
        </div>







       </div>

       </div>

     </div>

    )
  }
}




export default DashboardMember;
