import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import Sidebar from '../Sidebar/'


import Avatar from './dashboard-avatar.jpg'

class DetailMessages extends Component {


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
                    <h4>Kathy Brown</h4>
                     <a href="#" className="message-action"><i className="sl sl-icon-trash"></i> Delete Conversation</a>
                  </div>

                  <div className="messages-container-inner">

        
                  <div className="message-content">

                     <div className="message-bubble">
                      <div className="message-avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
                      <div className="message-text"><p>Hello, I want to talk about your great listing! Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor lacinia neque imperdiet vitae.</p></div>
                    </div>

                    <div className="message-bubble me">
                      <div className="message-avatar"><img src={Avatar} alt="" /></div>
                      <div className="message-text"><p>Nam ut hendrerit orci, ac gravida orci. Cras tristique rutrum libero at consequat. Vestibulum vehicula neque maximus sapien iaculis, nec vehicula sapien fringilla.</p></div>
                    </div>


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
