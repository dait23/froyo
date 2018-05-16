/*global FB*/

import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

const FACEBOOK_APP_ID = '160433624650514'
const FACEBOOK_API_VERSION = 'v2.12' // e.g. v2.10

class Header extends React.Component {
 constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  
  
  componentDidMount() {
    this._initializeFacebookSDK()
  }

  _initializeFacebookSDK() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : FACEBOOK_APP_ID,
        cookie     : true,  // enable cookies to allow the server to access the session
        version    : FACEBOOK_API_VERSION // use Facebook API version 2.10
      });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  _handleFBLogin = () => {
    FB.login(response => {
      this._facebookCallback(response)
    }, {scope: 'public_profile,email'})
  }

  _facebookCallback = async facebookResponse => {
    if (facebookResponse.status === 'connected') {
      const facebookToken = facebookResponse.authResponse.accessToken
      const graphcoolResponse = await this.props.authenticateUserFbMutation({variables: { facebookToken }})
      const graphcoolToken = graphcoolResponse.data.authenticateUserFb.token
      localStorage.setItem('space', graphcoolToken)
      window.location.reload()
    } else {
      console.warn(`User did not authorize the Facebook application.`)
    }
  }

  _isLoggedIn = () => {



    return this.props.data.loggedInUserFb && 
      this.props.data.loggedInUserFb.id && 
      localStorage.setItem('uid', this.props.data.loggedInUserFb.id);
     


     
  }

  _logout = () => {

     window.localStorage.clear()
     // window.localStorage.removeItem('nordic');
     //localStorage.removeItem('uid');
    // localStorage.removeItem('uid')
    //localStorage.removeItem('nordic')
    // localStorage.removeItem('nordic');
     window.location.reload()
     
  }


  render () {
     if (this.props.data.loading) {
      return ( <div></div>)
           }
   if (this._isLoggedIn() ) {

       

      return this.renderLoggedIn()
    } else {
      
      return this.renderLoggedOut()

    }


                                  
                                     
                                  


  }


renderButton(){


   const pic = "https://res.cloudinary.com/nomadic-id/image/facebook/c_scale,r_40,w_40/" + this.props.data.loggedInUserFb.facebookUserId + ".jpg"
 
  if (window.localStorage.getItem('uid') !== null && window.localStorage.getItem('space') !== null ) {

     return(
        
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
         <img src={pic} alt="avatar"  style={{width:'40px', height:'40px', borderRadius:'100%'}}/>
        <DropdownToggle caret>
         My Account
        </DropdownToggle>
        <DropdownMenu >
         <DropdownItem><a href="/me/dashboard">Dashboard</a></DropdownItem>
          <DropdownItem><a onClick={this._logout} style={{cursor:'pointer'}}> Logout</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
      )

  }else{
    localStorage.removeItem('uid');
  return(
        
        
  <a onClick={this._handleFBLogin} className="button" style={{background:'#4a6d9d', color:'#fff'}}> <i className="fa fa-fw">&#xf230;</i>
                        Facebook Login</a>
      )

  }

}



  renderLoggedIn() {


     if (this.props.data.loading) {
      return ( <div></div>)
           }
    
   
    return (
       <div>
      <header id="header-container">

        <div id="header" className="cloned sticky">
          <div className="container">
            
            <div className="left-side">
              
              <div id="logo">
                <a href="/"><img src="https://res.cloudinary.com/spazeeid/image/upload/lhukm16yizg5dl58e2vi" alt="logo" /></a>
              </div>
              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>

              <nav id="navigation" className="style-1">
                <ul id="responsive">

                  <li><a className="current" href="#">Home</a>
                    
                  </li>

                  <li><a href="/listing">Listing</a>
                    
                  </li>

                  
                </ul>
              </nav>
              <div className="clearfix"></div>
         
              
            </div>
     
            <div className="right-side">
              <div className="header-widget">
               
               {this.renderButton()}
                       
                
              </div>
            </div>

            <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">

              <div className="small-dialog-header">
                <h3>Sign In</h3>
              </div>

              <div className="sign-in-form style-1">

                <ul className="tabs-nav">
                  <li className=""><a href="#tab1">Brand</a></li>
                  <li><a href="#tab2">Space Partners</a></li>
                </ul>

                <div className="tabs-container alt">

                  <div className="tab-content" id="tab1" style={{display:'none'}}>
                    <form method="post" className="login">


                    
                       
                        <a href="#" className="button medium" style={{background:'#4a6d9d', color:'#fff'}}> <i class="fa fa-fw">&#xf230;</i>
                        Facebook Login</a>
                  
                      
                    </form>
                  </div>

                  <div className="tab-content" id="tab2" style={{display:'none'}}>

                    <form method="post" className="register">
                      
                       <a href="#" className="button medium" style={{background:'#4a6d9d', color:'#fff'}}> <i class="fa fa-fw">&#xf230;</i>
                        Facebook Login</a>
        
                    </form>
                  </div>

                </div>
              </div>
            </div>


          </div>
        </div>
      </header>
      <div className="clearfix"></div>
      </div>
     )
    
  }

  renderLoggedOut() {

    return (
            <div>
      <header id="header-container">

        <div id="header" className="cloned sticky">
          <div className="container">
            
            <div className="left-side">
              
              <div id="logo">
                <a href="/"><img src="https://res.cloudinary.com/spazeeid/image/upload/lhukm16yizg5dl58e2vi" alt="logo" /></a>
              </div>
              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>

              <nav id="navigation" className="style-1">
                <ul id="responsive">

                  <li><a href="#">Home</a>
                    
                  </li>

                  <li><a href="/listing">Listing</a>
                    
                  </li>

                  
                </ul>
              </nav>
              <div className="clearfix"></div>
         
              
            </div>
     
            <div className="right-side">
              <div className="header-widget">
               
                        {this.renderButton()}
                
              </div>
            </div>

            <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">

              <div className="small-dialog-header">
                <h3>Sign In</h3>
              </div>

              <div className="sign-in-form style-1">

                <ul className="tabs-nav">
                  <li className=""><a href="#tab1">Brand</a></li>
                  <li><a href="#tab2">Space Partners</a></li>
                </ul>

                <div className="tabs-container alt">

                  <div className="tab-content" id="tab1" style={{display:'none'}}>
                    <form method="post" className="login">


                    
                       
                        <a href="#" className="button medium" style={{background:'#4a6d9d'}}> <i className="fa fa-fw">&#xf230;</i>
                        Facebook Login</a>
                  
                      
                    </form>
                  </div>

                  <div className="tab-content" id="tab2" style={{display:'none'}}>

                    <form method="post" className="register">
                      
                       <a href="#" className="button medium" style={{background:'#4a6d9d'}}> <i className="fa fa-fw">&#xf230;</i>
                        Facebook Login</a>
        
                    </form>
                  </div>

                </div>
              </div>
            </div>


          </div>
        </div>
      </header>
      <div className="clearfix"></div>
      </div>
    )
  }
}

const LOGGED_IN_USER = gql`
  query LoggedInUserFb {
    loggedInUserFb {
      id
      jabatan
      facebookUserId
    
    }
  }
`

const AUTHENTICATE_FACEBOOK_USER = gql`
  mutation AuthenticateUserFbMutation($facebookToken: String!) {
    authenticateUserFb(facebookToken: $facebookToken) {
      token
    }
  }
`

export default compose(
  graphql(AUTHENTICATE_FACEBOOK_USER, { name: 'authenticateUserFbMutation' }),
  graphql(LOGGED_IN_USER, { options: { fetchPolicy: 'network-only'}})
) (withRouter(Header))
