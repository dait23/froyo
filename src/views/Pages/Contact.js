import React, {Component} from 'react';



class Contact extends Component {
  render() {
    return (


    	<div className="container margin-bottom-50">

	        <div className="row">


	            <div className="col-md-4">

					<h4 className="headline margin-bottom-50 margin-top-70">Find Us There</h4>


					<div className="sidebar-textbox">
						<p>Collaboratively administrate channels whereas virtual. Objectively seize scalable metrics whereas proactive e-services.</p>

						<ul className="contact-details">
							<li><i className="im im-icon-Phone-2"></i> <strong>Phone:</strong> <span>(123) 123-456 </span></li>
							<li><i className="im im-icon-Fax"></i> <strong>Fax:</strong> <span>(123) 123-456 </span></li>
							<li><i className="im im-icon-Globe"></i> <strong>Web:</strong> <span><a href="#">www.example.com</a></span></li>
							<li><i className="im im-icon-Envelope"></i> <strong>E-Mail:</strong> <span><a href="#"><span className="__cf_email__" data-cfemail="94fbf2f2fdf7f1d4f1ecf5f9e4f8f1baf7fbf9">[email&#160;protected]</span></a></span></li>
						</ul>
					</div>

				</div>

				<div className="col-md-8">
                   
                   <section id="contact">
                     <h4 className="headline margin-bottom-35 margin-top-70">Contact Form</h4>
                     <div id="contact-message"></div>

                     <form method="post" action="http://www.vasterad.com/themes/listeo_updated/contact.php" name="contactform" id="contactform" autocomplete="on">

					<div className="row">
						<div className="col-md-6">
							<div>
								<input name="name" type="text" id="name" placeholder="Your Name" required="required" />
							</div>
						</div>

						<div className="col-md-6">
							<div>
								<input name="email" type="email" id="email" placeholder="Email Address" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required="required" />
							</div>
						</div>
					</div>

					<div>
						<input name="subject" type="text" id="subject" placeholder="Subject" required="required" />
					</div>

					<div>
						<textarea name="comments" cols="40" rows="3" id="comments" placeholder="Message" spellcheck="true" required="required"></textarea>
					</div>

					<input type="submit" class="submit button" id="submit" value="Submit Message" />

					</form>
 
                   </section>

				</div>



	        </div>
	    </div>

     
    )
  }
}

export default Contact;
