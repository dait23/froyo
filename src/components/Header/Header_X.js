import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div>
      <header id="header-container">

        <div id="header">
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
                    <ul>
                      <li><a href="index-2.html">Home 1</a></li>
                      <li><a href="index-3.html">Home 2</a></li>
                      <li><a href="index-4.html">Home 3</a></li>
                      <li><a href="index-5.html">Home 4</a></li>
                    </ul>
                  </li>

                  <li><a href="#">Listings</a>
                    <ul>
                      <li><a href="#">List Layout</a>
                        <ul>
                          <li><a href="listings-list-with-sidebar.html">With Sidebar</a></li>
                          <li><a href="listings-list-full-width.html">Full Width</a></li>
                          <li><a href="listings-list-full-width-with-map.html">Full Width + Map</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Grid Layout</a>
                        <ul>
                          <li><a href="listings-grid-with-sidebar-1.html">With Sidebar 1</a></li>
                          <li><a href="listings-grid-with-sidebar-2.html">With Sidebar 2</a></li>
                          <li><a href="listings-grid-full-width.html">Full Width</a></li>
                          <li><a href="listings-grid-full-width-with-map.html">Full Width + Map</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Half Screen Map</a>
                        <ul>
                          <li><a href="listings-half-screen-map-list.html">List Layout</a></li>
                          <li><a href="listings-half-screen-map-grid-1.html">Grid Layout 1</a></li>
                          <li><a href="listings-half-screen-map-grid-2.html">Grid Layout 2</a></li>
                        </ul>
                      </li>
                      <li><a href="listings-single-page.html">Single Listing 1</a></li>
                      <li><a href="listings-single-page-2.html">Single Listing 2</a></li>
                    </ul>
                  </li>

                  <li><a href="#">User Panel</a>
                    <ul>
                      <li><a href="dashboard.html">Dashboard</a></li>
                      <li><a href="dashboard-messages.html">Messages</a></li>
                      <li><a href="dashboard-bookings.html">Bookings</a></li>
                      <li><a href="dashboard-my-listings.html">My Listings</a></li>
                      <li><a href="dashboard-reviews.html">Reviews</a></li>
                      <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                      <li><a href="dashboard-add-listing.html">Add Listing</a></li>
                      <li><a href="dashboard-my-profile.html">My Profile</a></li>
                      <li><a href="dashboard-invoice.html">Invoice</a></li>
                    </ul>
                  </li>

                  <li><a href="#">Pages</a>
                    <div className="mega-menu mobile-styles three-columns">

                        <div className="mega-menu-section">
                          <ul>
                            <li className="mega-menu-headline">Pages #1</li>
                            <li><a href="pages-user-profile.html"><i className="sl sl-icon-user"></i> User Profile</a></li>
                            <li><a href="pages-booking.html"><i className="sl sl-icon-check"></i> Booking Page</a></li>
                            <li><a href="pages-add-listing.html"><i className="sl sl-icon-plus"></i> Add Listing</a></li>
                            <li><a href="pages-blog.html"><i className="sl sl-icon-docs"></i> Blog</a></li>
                          </ul>
                        </div>
          
                        <div className="mega-menu-section">
                          <ul>
                            <li className="mega-menu-headline">Pages #2</li>
                            <li><a href="pages-contact.html"><i className="sl sl-icon-envelope-open"></i> Contact</a></li>
                            <li><a href="pages-coming-soon.html"><i className="sl sl-icon-hourglass"></i> Coming Soon</a></li>
                            <li><a href="pages-404.html"><i className="sl sl-icon-close"></i> 404 Page</a></li>
                            <li><a href="pages-masonry-filtering.html"><i className="sl sl-icon-equalizer"></i> Masonry Filtering</a></li>
                          </ul>
                        </div>

                        <div className="mega-menu-section">
                          <ul>
                            <li className="mega-menu-headline">Other</li>
                            <li><a href="pages-elements.html"><i className="sl sl-icon-settings"></i> Elements</a></li>
                            <li><a href="pages-pricing-tables.html"><i className="sl sl-icon-tag"></i> Pricing Tables</a></li>
                            <li><a href="pages-typography.html"><i className="sl sl-icon-pencil"></i> Typography</a></li>
                            <li><a href="pages-icons.html"><i className="sl sl-icon-diamond"></i> Icons</a></li>
                          </ul>
                        </div>
                        
                    </div>
                  </li>
                  
                </ul>
              </nav>
              <div className="clearfix"></div>
         
              
            </div>
     
            <div className="right-side">
              <div className="header-widget">
                <a href="#sign-in-dialog" className="sign-in popup-with-zoom-anim"><i className="sl sl-icon-login"></i> Sign In</a>
                <a href="dashboard-add-listing.html" className="button border with-icon">Add Listing <i className="sl sl-icon-plus"></i></a>
              </div>
            </div>

            <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">

              <div className="small-dialog-header">
                <h3>Sign In</h3>
              </div>

              <div className="sign-in-form style-1">

                <ul className="tabs-nav">
                  <li className=""><a href="#tab1">Log In</a></li>
                  <li><a href="#tab2">Register</a></li>
                </ul>

                <div className="tabs-container alt">

                  <div className="tab-content" id="tab1" style={{display:'none'}}>
                    <form method="post" className="login">

                      <p className="form-row form-row-wide">
                        <label>Username:
                          <i className="im im-icon-Male"></i>
                          <input type="text" className="input-text" name="username" value="" />
                        </label>
                      </p>

                      <p className="form-row form-row-wide">
                        <label>Password:
                          <i className="im im-icon-Lock-2"></i>
                          <input className="input-text" type="password" name="password" />
                        </label>
                        <span className="lost_password">
                          <a href="#" >Lost Your Password?</a>
                        </span>
                      </p>

                      <div className="form-row">
                        <input type="submit" className="button border margin-top-5" name="login" value="Login" />
                        <div className="checkboxes margin-top-10">
                          <input  type="checkbox" name="check" />
                          <label>Remember Me</label>
                        </div>
                      </div>
                      
                    </form>
                  </div>

                  <div className="tab-content" id="tab2" style={{display:'none'}}>

                    <form method="post" className="register">
                      
                    <p className="form-row form-row-wide">
                      <label>Username:
                        <i className="im im-icon-Male"></i>
                        <input type="text" className="input-text" name="username"  value="" />
                      </label>
                    </p>
                      
                    <p className="form-row form-row-wide">
                      <label>Email Address:
                        <i className="im im-icon-Mail"></i>
                        <input type="text" className="input-text" name="email"  value="" />
                      </label>
                    </p>

                    <p className="form-row form-row-wide">
                      <label>Password:
                        <i className="im im-icon-Lock-2"></i>
                        <input className="input-text" type="password" name="password1" />
                      </label>
                    </p>

                    <p className="form-row form-row-wide">
                      <label>Repeat Password:
                        <i className="im im-icon-Lock-2"></i>
                        <input className="input-text" type="password" name="password2" />
                      </label>
                    </p>

                    <input type="submit" className="button border fw margin-top-10" name="register" value="Register" />
        
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

export default Header;
