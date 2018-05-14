import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import Sidebar from '../Sidebar/'

class Messages extends Component {


  render() {
   
   
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
                
                       <li className="unread">
                          <Link to="/me/messages/detail">
                            <div className="message-avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>

                            <div className="message-by">
                              <div className="message-by-headline">
                                <h5>Kathy Brown <i>Unread</i></h5>
                                <span>2 hours ago</span>
                              </div>
                              <p>Hello, I want to talk about your great listing! Morbi velit eros, sagittis in facilisis non, rhoncus posuere ultricies...</p>
                            </div>
                          </Link>
                        </li>


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




export default Messages;
